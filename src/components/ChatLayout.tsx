import React, { useState, useEffect, useRef } from 'react';
import { Send, Smile, MoreVertical, Coins } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useWalletStore } from '../store/useWalletStore';
import { supabase } from '../lib/supabase';
import { MessageBubble } from './MessageBubble';
import type { Message } from '../types';

export const ChatLayout = () => {
    const { channelId: rawChannelId } = useParams();
    const channelId = rawChannelId?.toLowerCase() || '';
    const { user } = useAuthStore();
    const { sendTip } = useWalletStore();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [showTipMenu, setShowTipMenu] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [channelName, setChannelName] = useState('');
    const [ircUsers, setIrcUsers] = useState<any[]>([]);

    const [channelDesc, setChannelDesc] = useState('');
    const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
    const [connectionStatus, setConnectionStatus] = useState<'CONNECTING' | 'CONNECTED' | 'DISCONNECTED' | 'ERROR'>('DISCONNECTED');
    const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

    // Fetch Channel Details
    useEffect(() => {
        if (!channelId) return;

        const fetchChannel = async () => {
            const { data } = await supabase
                .from('channels')
                .select('*')
                .eq('id', channelId)
                .single();

            if (data) {
                setChannelName(data.name);
                setChannelDesc(data.description || '');
            } else {
                console.log(`[Chat] Channel ${channelId} not found. Auto-creating...`);
                // Auto-create channel
                const { error: createError } = await supabase
                    .from('channels')
                    .insert({
                        id: channelId,
                        name: channelId,
                        category: 'General',
                        description: 'Sala de chat creada por usuario',
                        owner_id: user ? user.id : 'system',
                        active_users: 0,
                        is_live: true
                    });

                if (createError) {
                    console.error('[Chat] Failed to auto-create channel:', createError);
                } else {
                    setChannelName(channelId);
                    setChannelDesc('Sala de chat creada por usuario');
                }
            }
        };

        fetchChannel();
    }, [channelId]);

    // Self-healing: Ensure profile exists (in case trigger failed)
    useEffect(() => {
        const ensureProfile = async () => {
            if (!user) return;
            const { count } = await supabase.from('profiles').select('id', { count: 'exact', head: true }).eq('id', user.id);

            if (count === 0) {
                console.log('[Chat] Repairing missing profile for', user.id);
                // Try to create profile with unique suffix to avoid collision
                const uniqueName = `${user.name}_${Math.floor(Math.random() * 1000)}`;
                await supabase.from('profiles').insert({
                    id: user.id,
                    username: uniqueName,
                    avatar_url: user.avatar,
                    is_guest: user.isGuest || true
                });
            }
        };
        ensureProfile();
    }, [user?.id]);

    // Unified Realtime Subscription (Messages & IRC Users)
    useEffect(() => {
        if (!channelId || !user) return;

        // Cleanup previous channel if exists
        if (channelRef.current) {
            console.log('[Realtime] Cleaning up previous channel');
            supabase.removeChannel(channelRef.current);
            channelRef.current = null;
        }

        // Reset state for new channel
        setMessages([]);
        setIrcUsers([]);
        setOnlineUsers([]);
        setConnectionStatus('CONNECTING');

        console.log(`[Realtime] Initializing message channel: ${channelId}`);

        // Shared channel name for broadcasts (must match IRC bridge)
        const channelName = `room:${channelId}`;
        const channel = supabase.channel(channelName, {
            config: { presence: { key: user.id } }
        });
        channelRef.current = channel;

        // Fetch initial messages
        const fetchInitialMessages = async () => {
            const { data, error } = await supabase
                .from('messages')
                .select('*, profiles(username, avatar_url)')
                .eq('channel_id', channelId)
                .order('created_at', { ascending: true })
                .limit(200);

            if (error) {
                console.error('[Chat] Initial fetch error:', error);
                setConnectionStatus('ERROR');
            } else if (data) {
                const formatted: Message[] = data.map((msg: any) => ({
                    id: msg.id,
                    channelId: msg.channel_id,
                    userId: msg.user_id,
                    userName: msg.profiles?.username || 'Unknown',
                    userAvatar: msg.profiles?.avatar_url || '',
                    content: msg.content,
                    timestamp: new Date(msg.created_at),
                    isTip: msg.is_tip || false,
                    tipAmount: msg.tip_amount,
                }));
                setMessages(formatted);
            }
        };

        fetchInitialMessages();

        channel
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'messages',
            }, async (payload: any) => {
                const message = payload.new;
                // console.log('[Realtime] Message received:', message);

                // Ignore if not for this channel
                // Ignore if not for this channel (case-insensitive)
                if (message.channel_id.toLowerCase() !== channelId.toLowerCase()) return;

                // Fetch profile
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('username, avatar_url')
                    .eq('id', message.user_id)
                    .single();

                const newMsg: Message = {
                    id: message.id,
                    channelId: message.channel_id,
                    userId: message.user_id,
                    userName: profile?.username || 'Unknown',
                    userAvatar: profile?.avatar_url || '',
                    content: message.content,
                    timestamp: new Date(message.created_at),
                    isTip: message.is_tip || false,
                    tipAmount: message.tip_amount,
                };

                setMessages((prev) => {
                    if (prev.some(m => m.id === newMsg.id)) return prev;
                    return [...prev, newMsg];
                });
            })
            .on('broadcast', { event: 'irc_users' }, (payload: any) => {
                // Support both direct and wrapped payload (Supabase clients vary)
                const users = payload.users || payload.payload?.users || [];
                setIrcUsers(users);
            })
            // Presence Handlers on the SAME channel
            .on('presence', { event: 'sync' }, () => {
                const state = channel.presenceState();
                const users = Object.values(state).flat().map((s: any) => s);
                setOnlineUsers(users);
            })
            .on('presence', { event: 'join' }, ({ newPresences }: { newPresences: any[] }) => {
                console.log('[Realtime] User Joined:', newPresences);
            })
            .on('presence', { event: 'leave' }, ({ leftPresences }: { leftPresences: any[] }) => {
                console.log('[Realtime] User Left:', leftPresences);
            })
            .subscribe(async (status: string) => {
                console.log(`[Realtime - Messages] status:`, status);
                if (status === 'SUBSCRIBED') {
                    setConnectionStatus('CONNECTED');

                    // Track Presence
                    const trackResult = await channel.track({
                        user_id: user.id,
                        username: user.name || 'Guest',
                        avatar_url: user.avatar,
                        online_at: new Date().toISOString(),
                    });

                    if (trackResult !== 'ok') {
                        console.error('[Realtime] Presence tracking failed:', trackResult);
                    }
                } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
                    setConnectionStatus('ERROR');
                    // Retry
                    setTimeout(() => {
                        if (channelRef.current) channelRef.current.subscribe();
                    }, 5000);
                } else if (status === 'CLOSED') {
                    setConnectionStatus('DISCONNECTED');
                }
            });

        // Auto-join persistence
        const joinDB = async () => {
            try {
                await supabase.from('channel_members').upsert({ channel_id: channelId, user_id: user.id }, { onConflict: 'channel_id, user_id' });
            } catch (err) {
                console.error('[Chat] DB Join error:', err);
            }
        };
        joinDB();

        return () => {
            if (channelRef.current) {
                console.log(`[Realtime] Disconnecting ${channelName}`);
                supabase.removeChannel(channelRef.current);
                channelRef.current = null;
            }
        };
    }, [channelId, user?.id]); // Only change if ID changes, not user object ref




    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || !user || !channelId) return;

        const content = input.trim();
        setInput(''); // Optimistic clear

        // 1. Ensure in Channel Members (Join if not joined) - CRITICAL for RLS
        // Must be done before insert so RLS policies allow the select/subscription
        await supabase.from('channel_members').upsert({
            channel_id: channelId,
            user_id: user.id
        }, { onConflict: 'channel_id, user_id' });

        // Optimistic UI Update (Optional, but let's rely on fast return from DB for now to get real ID)
        // If we wanted true optimistic, we'd add a temp message here.

        // 2. Insert Message and Select Return Data
        const { data: insertedMsg, error } = await supabase
            .from('messages')
            .insert({
                channel_id: channelId,
                user_id: user.id,
                content: content,
                is_tip: false
            })
            .select('*, profiles(username, avatar_url)')
            .single();

        if (error) {
            console.error('Error sending message:', error);
            // Ideally rollback optimistic UI if we had one
        } else if (insertedMsg) {
            const newMsg: Message = {
                id: insertedMsg.id,
                channelId: insertedMsg.channel_id,
                userId: insertedMsg.user_id,
                userName: insertedMsg.profiles?.username || user.name || 'Guest',
                userAvatar: insertedMsg.profiles?.avatar_url || user.avatar || '',
                content: insertedMsg.content,
                timestamp: new Date(insertedMsg.created_at),
                isTip: insertedMsg.is_tip || false,
                tipAmount: insertedMsg.tip_amount,
            };

            setMessages((prev) => {
                if (prev.some(m => m.id === newMsg.id)) return prev;
                return [...prev, newMsg];
            });
        }
    };

    const handleSendTip = async (amount: number, effect: 'sparkle' | 'gold' | 'neon') => {
        if (!user || !channelId) return;

        // Check funds locally first (optimistic)
        const success = sendTip(amount, 'system'); // In real app, recipient would be channel owner or specific user

        if (success) {
            // Insert Tip Message
            await supabase.from('messages').insert({
                channel_id: channelId,
                user_id: user.id,
                content: `Sent ${amount} Tips! (${effect})`,
                is_tip: true,
                tip_amount: amount
            });
            setShowTipMenu(false);
        } else {
            alert("Insufficient funds!");
        }
    };

    if (!channelId) return <div className="p-10">Select a channel</div>;

    return (
        <div className="flex h-full">
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-gray-50 relative">
                {/* Chat Header */}
                <div className="h-16 px-6 bg-white border-b border-gray-200 flex items-center justify-between flex-shrink-0 shadow-sm z-10">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-gray-800"># {channelName || 'Loading...'}</h2>
                            <div
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${connectionStatus === 'CONNECTED' ? 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]' :
                                    connectionStatus === 'CONNECTING' ? 'bg-yellow-500 animate-pulse' :
                                        'bg-red-500'
                                    }`}
                                title={`Status: ${connectionStatus}`}
                            />
                        </div>
                        <p className="text-xs text-gray-500">{channelDesc}</p>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-1" title="Tiptalk Users">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">{onlineUsers.length}</span>
                        </div>
                        {ircUsers.length > 0 && (
                            <div className="flex items-center gap-1" title="IRC Users">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="text-sm font-medium">{ircUsers.length}</span>
                            </div>
                        )}

                        <div className="relative group">
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                                <MoreVertical size={20} />
                            </button>

                            {/* User List Dropdown */}
                            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-4 hidden group-hover:block z-50">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Tiptalkers ({onlineUsers.length})</h3>
                                <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                                    {onlineUsers.map((u, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            {u.username || 'Anon'}
                                        </div>
                                    ))}
                                </div>

                                {ircUsers.length > 0 && (
                                    <>
                                        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3 pt-2 border-t border-gray-100">Usuarios ({ircUsers.length})</h3>
                                        <div className="space-y-2 max-h-60 overflow-y-auto">
                                            {[...ircUsers].sort((a, b) => a.nick.localeCompare(b.nick)).slice(0, 50).map((u, i) => ( // Limit rendering
                                                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                                                    {u.nick}
                                                </div>
                                            ))}
                                            {ircUsers.length > 50 && (
                                                <div className="text-xs text-gray-400 italic pt-1">
                                                    + {ircUsers.length - 50} más...
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4" ref={scrollRef}>
                    {messages.map((msg) => (
                        <MessageBubble
                            key={msg.id}
                            message={msg}
                            isOwnMessage={user?.id === msg.userId}
                        />
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <form onSubmit={handleSend} className="flex items-end gap-2 max-w-4xl mx-auto relative">

                        {/* Tip Menu Popup */}
                        {showTipMenu && (
                            <div className="absolute bottom-14 left-0 bg-white p-3 rounded-xl shadow-xl border border-gray-100 border-b-4 border-b-gray-200 w-64 animate-in fade-in slide-in-from-bottom-2 z-20">
                                <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Select Tip Amount</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    <TipButton amount={10} label="💎 10" onClick={() => handleSendTip(10, 'sparkle')} color="bg-blue-50 text-blue-600 hover:bg-blue-100" />
                                    <TipButton amount={50} label="🔥 50" onClick={() => handleSendTip(50, 'gold')} color="bg-yellow-50 text-yellow-600 hover:bg-yellow-100" />
                                    <TipButton amount={100} label="🚀 100" onClick={() => handleSendTip(100, 'neon')} color="bg-purple-50 text-purple-600 hover:bg-purple-100" />
                                </div>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={() => setShowTipMenu(!showTipMenu)}
                            className="p-3 text-yellow-500 hover:bg-yellow-50 rounded-full transition-colors flex-shrink-0"
                            title="Send Tip"
                        >
                            <Coins size={24} fill="currentColor" className="opacity-80" />
                        </button>

                        <div className="flex-1 bg-gray-100 rounded-xl flex items-center px-4 py-2 gap-2 border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                            <button type="button" className="text-gray-400 hover:text-gray-600">
                                <PlusCircleIcon />
                            </button>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={user ? `Message #${channelName}` : "Login to chat..."}
                                disabled={!user}
                                className="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-400"
                            />
                            <button type="button" className="text-gray-400 hover:text-gray-600">
                                <Smile size={20} />
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={!input.trim() || !user}
                            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                        >
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Sidebar (Participants) */}
            <div className="w-60 bg-white border-l border-gray-200 hidden lg:flex flex-col">

                {/* Tiptalk Users */}
                <div className="p-4 border-b border-gray-200 font-bold text-gray-700 text-sm flex justify-between items-center">
                    <span>Tiptalkers</span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">{onlineUsers.length}</span>
                </div>
                <div className="max-h-[40%] overflow-y-auto p-2 border-b border-gray-100">
                    <div className="space-y-1">
                        {onlineUsers.map((u, i) => (
                            <ParticipantItem
                                key={u.user_id + i}
                                name={u.username || 'Guest'}
                                avatar={u.avatar_url}
                                role={u.user_id === user?.id ? 'You' : 'Member'}
                                status="online"
                            />
                        ))}
                        {onlineUsers.length === 0 && <p className="text-xs text-gray-400 p-2 italic">No users online</p>}
                    </div>
                </div>

                {/* IRC Users */}
                <div className="p-4 border-b border-gray-200 font-bold text-gray-700 text-sm flex justify-between items-center bg-gray-50">
                    <span>Usuarios</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">{ircUsers.length}</span>
                </div>
                <div className="flex-1 overflow-y-auto p-2 bg-gray-50/50">
                    <div className="space-y-1">
                        {[...ircUsers].sort((a, b) => a.nick.localeCompare(b.nick)).map((u, i) => (
                            <div key={i} className="flex items-center gap-2 px-2 py-1 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-100 group">
                                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-[10px] flex-shrink-0">
                                    {u.nick.charAt(0).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs text-gray-600 truncate font-medium group-hover:text-blue-600 transition-colors">{u.nick}</p>
                                </div>
                            </div>
                        ))}
                        {ircUsers.length === 0 && <p className="text-xs text-gray-400 p-2 italic">Waiting for update...</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const TipButton = ({ label, onClick, color }: any) => (
    <button type="button" onClick={onClick} className={`px-2 py-2 rounded-lg text-sm font-bold transition-colors ${color}`}>
        {label}
    </button>
);

const PlusCircleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
);

const ParticipantItem = ({ name, role, avatar }: any) => (
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            <img src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
        </div>
        <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium truncate ${role === 'Owner' ? 'text-blue-600' : 'text-gray-700'}`}>
                {name}
            </p>
            {role && <p className="text-[10px] text-gray-400 font-bold uppercase">{role}</p>}
        </div>
    </div>
);
