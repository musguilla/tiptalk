import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { parseIRCMessage } from '../utils/ircParser';

export const GlobalChat = () => {
    // Vercel build fix verified
    const [messages, setMessages] = useState<any[]>([]);
    const [ircUserCount, setIrcUserCount] = useState(0);
    const [onlineUserCount, setOnlineUserCount] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fetch last 10 messages from general
        const fetchMessages = async () => {
            const { data } = await supabase
                .from('messages')
                .select('*, profiles(username, avatar_url)')
                .eq('channel_id', 'general')
                .order('created_at', { ascending: true })
                .limit(20);

            if (data) setMessages(data);
        };
        fetchMessages();
        // ... (rest of the useEffect body)
        const channel = supabase.channel('room:general');

        channel
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: 'channel_id=eq.general' }, async (payload: any) => {
                const msg = payload.new;
                // Fetch profile
                const { data: profile } = await supabase.from('profiles').select('username, avatar_url').eq('id', msg.user_id).single();
                setMessages(prev => [...prev.slice(-19), { ...msg, profiles: profile }]);
            })
            .on('broadcast', { event: 'irc_users' }, (payload: any) => {
                const users = payload.users || payload.payload?.users || [];
                setIrcUserCount(users.length);
            })
            .on('presence', { event: 'sync' }, () => {
                const state = channel.presenceState();
                const count = Object.keys(state).length;
                setOnlineUserCount(count);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col h-full flex-shrink-0">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between shadow-sm z-10">
                <div className="flex items-center gap-2 font-bold text-gray-800">
                    <MessageCircle size={18} className="text-blue-600" />
                    Chat Global
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {onlineUserCount + ircUserCount} LÍNEA
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30" ref={scrollRef}>
                {messages.map((msg) => {
                    const ircData = parseIRCMessage(msg.content, msg.profiles?.username || 'Unknown');
                    const displayNick = ircData.isIRC ? ircData.nick : (msg.profiles?.username || 'Guest');
                    const displayMsg = ircData.isIRC ? ircData.message : msg.content;

                    if (msg.is_tip) {
                        return (
                            <div key={msg.id} className="bg-yellow-50 border border-yellow-100 p-3 rounded-xl shadow-sm animate-in zoom-in-95">
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles size={14} className="text-yellow-600" />
                                    <span className="text-[10px] font-bold text-yellow-700 uppercase">Propina</span>
                                </div>
                                <p className="text-sm font-bold text-gray-900">
                                    {displayNick} envió <span className="text-blue-600">{msg.tip_amount} Tips!</span>
                                </p>
                            </div>
                        );
                    }

                    return (
                        <div key={msg.id} className="group animate-in fade-in slide-in-from-bottom-2">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className={`text-[11px] font-bold ${ircData.isIRC ? 'text-gray-500' : 'text-blue-600'}`}>
                                    {displayNick}
                                </span>
                                <span className="text-[9px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                            <div className={`text-sm py-1.5 px-3 rounded-2xl ${ircData.isIRC ? 'bg-gray-100 text-gray-600' : 'bg-white text-gray-800 shadow-sm border border-gray-100'} rounded-tl-none inline-block max-w-full break-words`}>
                                {displayMsg}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
                <button
                    onClick={() => window.location.href = '/chat/general'}
                    className="w-full bg-blue-600 text-white p-3 rounded-xl text-center text-sm font-bold hover:bg-blue-700 transition shadow-md shadow-blue-100 flex items-center justify-center gap-2"
                >
                    Entrar al Chat Completo
                </button>
            </div>
        </div>
    );
};
