import React, { useState, useEffect, useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Wallet, BarChart2, PlusCircle, LogOut, ChevronDown, ChevronRight, Hash, Circle, Video } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { supabase } from '../lib/supabase';
import clsx from 'clsx';

// Local types for Sidebar
type Channel = {
    id: string;
    name: string;
    category: string;
};

type CategoryItem = {
    type: 'category';
    label: string;
    id: string;
    defaultOpen: boolean;
    items: Channel[];
};

export const Sidebar = () => {
    const { user, logout } = useAuthStore();
    const [connectedChannels, setConnectedChannels] = useState<Channel[]>([]);
    const [categories, setCategories] = useState<(Channel | CategoryItem)[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('[Sidebar] Mounted. User:', user?.id);
    }, []);

    useEffect(() => {
        let mounted = true;

        const loadData = async () => {
            console.log('[Sidebar] Loading data...');
            try {
                // 1. Fetch All Channels (Public)
                const { data: channelsData, error: channelsError } = await supabase
                    .from('channels')
                    .select('*')
                    .order('created_at', { ascending: true });

                if (channelsError) throw channelsError;

                if (mounted && channelsData) {
                    console.log('[Sidebar] Channels loaded:', channelsData.length);

                    // Organize channels
                    const general: Channel[] = [];
                    const espana: Channel[] = [];
                    const latam: Channel[] = [];
                    const adultos: Channel[] = [];
                    const others: Channel[] = [];

                    channelsData.forEach((ch: any) => {
                        if (ch.category === 'General') general.push(ch);
                        else if (ch.category === 'España') espana.push(ch);
                        else if (ch.category === 'Latinoamérica') latam.push(ch);
                        else if (ch.category === 'Adultos') adultos.push(ch);
                        else others.push(ch);
                    });

                    setCategories([
                        ...general,
                        ...others,
                        { type: 'category', label: 'España', id: 'espana', defaultOpen: true, items: espana },
                        { type: 'category', label: 'Latinoamérica', id: 'latam', defaultOpen: true, items: latam },
                        { type: 'category', label: 'Adultos', id: 'adultos', defaultOpen: false, items: adultos }
                    ]);
                }

                // 2. Fetch User's Connected Channels (if logged in)
                if (user) {
                    const { data: memberData, error: memberError } = await supabase
                        .from('channel_members')
                        .select('channel_id, channels(*)')
                        .eq('user_id', user.id);

                    if (!memberError && memberData && mounted) {
                        // @ts-ignore
                        const mapped = memberData.map((item: any) => item.channels).filter(Boolean);
                        setConnectedChannels(mapped);
                    }
                }
            } catch (err) {
                console.error('[Sidebar] Data load error:', err);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        loadData();

        return () => { mounted = false; };
    }, [user]); // Re-run when user changes (e.g. login)

    // Derived state
    const filteredCategories = useMemo(() => {
        if (loading) return [];
        const connectedIds = new Set(connectedChannels.map(c => c.id));
        return categories.map(item => {
            if ('type' in item && item.type === 'category') {
                const visibleItems = item.items.filter(ch => !connectedIds.has(ch.id));
                if (visibleItems.length === 0) return null;
                return { ...item, items: visibleItems };
            }
            // Standalone
            if (connectedIds.has((item as Channel).id)) return null;
            return item;
        }).filter(Boolean) as (Channel | CategoryItem)[];
    }, [categories, connectedChannels, loading]);

    return (
        <div className="w-64 bg-gray-900 h-screen flex flex-col text-white border-r border-gray-800 flex-shrink-0">
            <Link to="/" className="p-6 border-b border-gray-800 flex items-center gap-2 hover:bg-gray-800/50 transition-colors">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">
                    <Video fill="currentColor" size={18} className="text-white" />
                </div>
                <h1 className="text-xl font-bold tracking-tight">Tiptalk</h1>
            </Link>

            <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
                {user && (
                    <>
                        <div className="pt-4 pb-2 px-2 text-xs font-semibold text-gray-500 uppercase">
                            Menú
                        </div>
                        <NavItem to="/wallet" icon={<Wallet size={20} />} label="Propinas" />
                        {!user.isGuest && (
                            <NavItem to="/earnings" icon={<BarChart2 size={20} />} label="Panel de Creador" />
                        )}
                    </>
                )}

                {/* Connected Channels */}
                {connectedChannels.length > 0 && (
                    <>
                        <div className="pt-4 pb-2 px-2 text-xs font-semibold text-green-500 uppercase flex items-center gap-2">
                            Salas Conectadas <Circle size={8} className="fill-green-500 animate-pulse" />
                        </div>
                        {connectedChannels.map((channel) => (
                            <NavItem
                                key={`connected-${channel.id}`}
                                to={`/chat/${channel.id}`}
                                icon={<HashtagIcon />}
                                label={channel.name.toLowerCase()}
                                rightElement={<Circle size={8} className="fill-green-500 text-green-500" />}
                            />
                        ))}
                    </>
                )}

                <div className="pt-4 pb-2 px-2 text-xs font-semibold text-gray-500 uppercase">
                    Salas de Chat
                </div>

                {loading ? (
                    <div className="px-4 py-2 text-gray-500 text-sm">Cargando salas...</div>
                ) : (
                    filteredCategories.map((item) => {
                        if ('type' in item && item.type === 'category') {
                            if (item.items.length === 0) return null; // Hide empty categories
                            return <SidebarCategory key={item.id} item={item as CategoryItem} />;
                        } else {
                            const channel = item as Channel;
                            return <NavItem key={channel.id} to={`/chat/${channel.id}`} icon={<HashtagIcon />} label={channel.name.toLowerCase()} />;
                        }
                    })
                )}
            </nav>

            <div className="p-4 border-t border-gray-800">
                {user ? (
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full bg-gray-700" />
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">{user.name}</p>
                                <p className="text-xs text-gray-400 truncate">
                                    {user.isGuest ? 'Invitado' : 'Member'}
                                </p>
                            </div>
                            <button
                                onClick={logout}
                                className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-red-400 transition-colors"
                                title="Logout"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors text-sm border border-gray-700 hover:border-gray-600">
                            <PlusCircle size={16} />
                            <span>Crear sala privada</span>
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

const HashtagIcon = () => <Hash size={18} />;

const SidebarCategory = ({ item }: { item: CategoryItem }) => {
    const [isOpen, setIsOpen] = useState(item.defaultOpen);

    return (
        <div className="space-y-1">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors group"
            >
                <span className="font-medium text-sm group-hover:text-gray-200">{item.label}</span>
                {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            {isOpen && (
                <div className="pl-4 space-y-1 border-l border-gray-800 ml-3">
                    {item.items.map((subItem) => (
                        <NavItem
                            key={subItem.id}
                            to={`/chat/${subItem.id}`}
                            icon={<Hash size={16} className="text-gray-600" />}
                            label={subItem.name.toLowerCase()}
                            className="text-sm py-1.5"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const NavItem = ({ to, icon, label, className, rightElement }: { to: string; icon: React.ReactNode; label: string, className?: string, rightElement?: React.ReactNode }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            clsx(
                "flex items-center gap-3 px-3 py-1.5 rounded-lg transition-colors",
                isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                className
            )
        }
    >
        {icon}
        <span className="truncate flex-1">{label}</span>
        {rightElement}
    </NavLink>
);
