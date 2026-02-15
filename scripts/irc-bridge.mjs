
import { Client } from 'irc-framework';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import WebSocket from 'ws';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase env vars');
    process.exit(1);
}

// Polyfill WebSocket for Node environment (required for Supabase Realtime)
global.WebSocket = WebSocket;

const supabase = createClient(supabaseUrl, supabaseKey);

// IRC Config
const IRC_SERVER = 'irc.chathispano.com';
const MAIN_BOT_NICK = 'Tiptalk_' + Math.floor(Math.random() * 10000);
const IRC_CHANNELS = ['#madrid'];
const BOT_ID = '00000000-0000-0000-0000-000000000000'; // Fixed ID for the bridge (Main Bot)
const SUPABASE_CHANNEL_ID = 'general';

const mainClient = new Client();
const ircClients = new Map(); // userId -> Client

// State
let messageCounter = 0;
let ircUsers = []; // List of pure IRC users (not Tiptalk mirrors)
let lastBroadcast = 0;
let sessionUserId = null;

// ==========================================
// 1. Main Bridge Bot (Listener & Broadcaster)
// ==========================================

async function startBridge() {
    console.log('Starting Tiptalk IRC Bridge...');

    // Auth Main Bot
    const { data: authData, error: authError } = await supabase.auth.signInAnonymously();
    if (authError) {
        console.error('Failed to sign in:', authError);
        process.exit(1);
    }
    sessionUserId = authData.user.id;
    console.log(`Authenticated as Main Bot: ${sessionUserId}`);

    // Upsert bot profile
    await supabase.from('profiles').upsert({
        id: sessionUserId,
        username: 'IRC Bridge',
        avatar_url: 'https://api.dicebear.com/7.x/bottts/svg?seed=bridge',
        is_guest: false
    });

    console.log(`Connecting Main Bot to IRC (${IRC_SERVER}:6667)...`);
    setupClient(mainClient, MAIN_BOT_NICK, true);
    mainClient.connect({
        host: IRC_SERVER,
        port: 6667,
        nick: MAIN_BOT_NICK,
        username: 'tiptalk',
        gecos: 'Tiptalk Bridge Bot',
        encoding: 'utf8'
    });

    mainClient.on('socket connected', () => console.log('IRC Socket Connected'));
    mainClient.on('socket close', () => console.log('IRC Socket Closed'));
    mainClient.on('close', () => console.log('IRC Connection Closed'));

    // Start watching Message Table (Outgoing: Tiptalk -> IRC)
    subscribeToMessages();

    // Start Realtime (Presence & Broadcast)
    setupRealtime();
}

function setupClient(client, nick, isMain = false) {
    client.on('registered', () => {
        console.log(`IRC [${nick}]: Registered`);
        IRC_CHANNELS.forEach(chan => client.join(chan));
    });

    // Only Main Bot listens for messages to bridge back to Tiptalk
    if (isMain) {
        client.on('message', handleIncomingIRCMessage);

        // Track IRC User List (only Main Bot needs to do this)
        client.on('userlist', (event) => {
            if (IRC_CHANNELS.some(c => c.toLowerCase() === event.channel.toLowerCase())) {
                console.log(`IRC: Userlist for ${event.channel} (${event.users.length} users)`);
                updateIrcUsers(event.users.map(u => ({ nick: u.nick })), 'reset');
            }
        });

        client.on('join', (event) => {
            if (IRC_CHANNELS.some(c => c.toLowerCase() === event.channel.toLowerCase())) {
                // If it's a Tiptalk mirror, ignore
                if (event.nick.endsWith('_tiptalkchat')) return;
                updateIrcUsers([{ nick: event.nick }], 'add');
            }
        });

        client.on('part', (event) => updateIrcUsers([{ nick: event.nick }], 'remove'));
        client.on('quit', (event) => updateIrcUsers([{ nick: event.nick }], 'remove'));
    }

    client.on('error', (err) => {
        const errMsg = err.message || '';
        if (errMsg.includes('Sólo puedes conectar 3 clones')) {
            // Find and remove from map if it was a mirror
            for (const [userId, c] of ircClients.entries()) {
                if (c === client) {
                    console.warn(`[Mirror] Clone limit reached. Removing ${nick} (Mirror) from active list.`);
                    ircClients.delete(userId);
                    break;
                }
            }
            return;
        }
        console.error(`IRC Error [${nick}]:`, err.message || err);
    });

    client.on('close', () => {
        // Find and remove from map
        for (const [userId, c] of ircClients.entries()) {
            if (c === client) {
                ircClients.delete(userId);
                break;
            }
        }
    });
}

// ==========================================
// 2. Incoming Logic (IRC -> Tiptalk)
// ==========================================

async function handleIncomingIRCMessage(event) {
    if (event.type !== 'privmsg') return;
    const target = event.target.toLowerCase();
    const isTarget = IRC_CHANNELS.some(c => c.toLowerCase() === target);
    if (!isTarget) return;

    // Ignore messages from Tiptalk mirrors (echo prevention) and ANY Bot instance
    if (
        event.nick.endsWith('_tt') ||
        event.nick.toLowerCase().startsWith('tiptalk_') ||
        event.nick === MAIN_BOT_NICK
    ) return;

    try {
        const { error } = await supabase.from('messages').insert({
            channel_id: SUPABASE_CHANNEL_ID,
            user_id: sessionUserId, // Messages from IRC are attributed to Bridge Bot
            content: `**[${event.nick}]** ${event.message}`
        });

        if (error) console.error('DB Insert Error:', error.message);
        else {
            process.stdout.write('.');
            pruneMessages();
        }
    } catch (err) {
        console.error('Bridge Error:', err);
    }
}

function updateIrcUsers(users, action) {
    if (action === 'reset') {
        ircUsers = users;
    } else if (action === 'add') {
        users.forEach(u => {
            if (!ircUsers.some(existing => existing.nick === u.nick)) ircUsers.push(u);
        });
    } else if (action === 'remove') {
        const nicksToRemove = new Set(users.map(u => u.nick));
        ircUsers = ircUsers.filter(u => !nicksToRemove.has(u.nick));
    }
    broadcastUserList();
}

// ==========================================
// 4. Realtime Logic (Presence & Broadcast)
// ==========================================

let bridgeChannel = null;

function setupRealtime() {
    console.log('Setting up Realtime (Presence & Broadcast)...');

    // Unified Channel (Messages + Broadcast + Presence)
    bridgeChannel = supabase.channel(`room:${SUPABASE_CHANNEL_ID}`, {
        config: { presence: { key: 'bridge-bot' } }
    });

    bridgeChannel
        .on('presence', { event: 'sync' }, () => {
            const state = bridgeChannel.presenceState();
            const users = Object.values(state).flat();
            syncMirrors(users);
        })
        .subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                console.log('[Realtime] Bridge Channel Subscribed');
                await bridgeChannel.track({
                    user_id: sessionUserId,
                    username: 'IRC Bridge',
                    online_at: new Date().toISOString()
                });
            }
        });
}

async function broadcastUserList() {
    if (!bridgeChannel) return;

    const now = Date.now();
    if (now - lastBroadcast < 5000) return; // Throttle 5s
    lastBroadcast = now;

    // Filter out the bot itself (but ALLOW Tiptalk mirrors to be broadcasted so they appear in UI)
    const filteredUsers = ircUsers.filter(u =>
        u.nick !== MAIN_BOT_NICK &&
        !u.nick.startsWith('Tiptalk_bot')
    );

    console.log(`[Realtime] Broadcasting ${filteredUsers.length} IRC users to ${SUPABASE_CHANNEL_ID}...`);
    await bridgeChannel.send({
        type: 'broadcast',
        event: 'irc_users',
        payload: { users: filteredUsers }
    });
}

async function pruneMessages() {
    messageCounter++;
    if (messageCounter >= 10) {
        messageCounter = 0;
        await supabase.rpc('prune_messages', { target_channel_id: SUPABASE_CHANNEL_ID, limit_count: 200 });
    }
}

// ==========================================
// 3. Outgoing Logic (Tiptalk -> IRC)
// ==========================================

function subscribeToMessages() {
    supabase
        .channel('bridge-outgoing')
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'messages',
            filter: `channel_id=eq.${SUPABASE_CHANNEL_ID}`
        }, async (payload) => {
            const msg = payload.new;

            // Ignore messages sent by the Bridge Bot itself (IRC -> Tiptalk loop)
            if (msg.user_id === sessionUserId) return;

            // 1. Check if we have a mirror client
            let clientToUse = ircClients.get(msg.user_id);
            let textToSend = msg.content;

            if (!clientToUse) {
                // Fallback: Use Main Bot
                clientToUse = mainClient;

                // Try to get a nice display name for the fallback
                const { data: profile } = await supabase.from('profiles').select('username').eq('id', msg.user_id).single();
                const displayName = profile?.username || msg.user_id.slice(0, 4);
                textToSend = `[${displayName}] ${msg.content}`;
            }

            IRC_CHANNELS.forEach(chan => {
                queueMessage(clientToUse, chan, textToSend);
            });
        })
        .subscribe();
}

// ==========================================
// 4. Presence Logic (User Mirroring)
// ==========================================

let lastSync = 0;
function syncMirrors(activeUsers) {
    const now = Date.now();
    if (now - lastSync < 5000) return; // Only sync once every 5s
    lastSync = now;

    const activeIds = new Set(activeUsers.map(u => u.user_id).filter(Boolean));

    // Connect new mirrors with delay to avoid flood
    activeUsers.forEach((user, index) => {
        if (
            user.user_id &&
            user.user_id !== sessionUserId &&
            user.username !== 'IRC Bridge' &&
            !ircClients.has(user.user_id)
        ) {
            // Stagger connections
            setTimeout(() => {
                connectMirror(user);
            }, index * 2000); // 2 seconds apart
        }
    });

    // Disconnect stale mirrors
    for (const [userId, client] of ircClients.entries()) {
        if (!activeIds.has(userId)) {
            console.log(`[Mirror] User ${userId} left Tiptalk, cleanup...`);
            client.quit('Left Tiptalk');
            ircClients.delete(userId);
        }
    }
}

function connectMirror(user) {
    if (!user.username) return; // Ignore users with no username (e.g. ghost bots)
    if (ircClients.has(user.user_id)) return;
    if (user.user_id === sessionUserId) return; // Don't mirror the bot itself if it shows up in presence?

    // Generate valid IRC nick
    const sanitizedName = (user.username || 'Guest').replace(/[^a-zA-Z0-9]/g, '');
    const suffix = '_tt'; // Short suffix
    const maxNickLen = 29; // Safe limit
    const maxNameLen = maxNickLen - suffix.length;

    // Truncate name first, then append suffix
    const nick = `${sanitizedName.substring(0, maxNameLen)}${suffix}`;

    console.log(`[Mirror] Connecting ${nick} for ${user.username} (ID: ${user.user_id})`);

    const client = new Client();

    ircClients.set(user.user_id, client);

    client.on('registered', () => {
        console.log(`[Mirror] ${nick} is now online on IRC.`);
        IRC_CHANNELS.forEach(chan => client.join(chan));
    });

    client.on('join', (event) => {
        console.log(`[Mirror] ${nick} JOINED ${event.channel}`);
    });

    client.on('kick', (event) => {
        console.warn(`[Mirror] ${nick} KICKED from ${event.channel}: ${event.message}`);
        ircClients.delete(user.user_id);
    });

    client.on('kill', (event) => {
        console.warn(`[Mirror] ${nick} KILLED: ${event.message}`);
        ircClients.delete(user.user_id);
    });

    client.on('error', (err) => {
        const msg = err.message || '';
        if (msg.includes('Sólo puedes conectar 3 clones')) {
            console.error(`[Mirror] FAILED: ${nick} cannot connect (IP Limit reached).`);
            ircClients.delete(user.user_id);
        } else {
            console.error(`[Mirror] IRC Error for ${nick}:`, msg);
        }
    });

    client.on('close', () => {
        console.log(`[Mirror] ${nick} disconnected from IRC.`);
        ircClients.delete(user.user_id);
    });

    client.connect({
        host: IRC_SERVER,
        port: 6667,
        nick: nick,
        username: 'tiptalkuser',
        gecos: 'Tiptalk User Mirror',
        encoding: 'utf8'
    });
}

function disconnectMirror(user) {
    const client = ircClients.get(user.user_id);
    if (client) {
        console.log(`[Mirror] Disconnecting ${user.username}`);
        client.quit('Left Tiptalk');
        ircClients.delete(user.user_id);
    }
}

// Start
startBridge();
