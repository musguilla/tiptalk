import { create } from 'zustand';
import type { User } from '../types';
import { supabase } from '../lib/supabase';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    loginAsGuest: (nickname: string) => Promise<void>;
    logout: () => Promise<void>;
    setUser: (user: User | null) => void;
    checkSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    loading: true,

    setUser: (user) => set({ user, isAuthenticated: !!user }),

    checkSession: async () => {
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                // Fetch profile
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single();

                set({
                    user: {
                        id: session.user.id,
                        name: profile?.username || session.user.user_metadata?.username || 'Usuario',
                        avatar: profile?.avatar_url || session.user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${session.user.id}`,
                        isGuest: profile?.is_guest ?? session.user.user_metadata?.is_guest ?? false,
                        walletBalance: 0,
                        role: 'user'
                    },
                    isAuthenticated: true
                });
            }
        } catch (error) {
            console.error('Session check error:', error);
        } finally {
            set({ loading: false });
        }
    },

    loginAsGuest: async (nickname: string) => {
        try {
            set({ loading: true });
            // Ensure unique username to satisfy database unique constraint
            const uniqueNickname = `${nickname}_${Math.floor(Math.random() * 10000)}`;

            const { data, error } = await supabase.auth.signInAnonymously({
                options: {
                    data: {
                        username: uniqueNickname,
                        avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`,
                        is_guest: true
                    }
                }
            });

            if (error) throw error;

            if (data.user) {
                // Profile trigger should handle creation, but we set local state for immediate feedback
                set({
                    user: {
                        id: data.user.id,
                        name: nickname,
                        avatar: data.user.user_metadata.avatar_url,
                        isGuest: true,
                        walletBalance: 0,
                        role: 'user'
                    },
                    isAuthenticated: true
                });
            }
        } catch (error) {
            console.error('Guest login error:', error);
            throw error;
        } finally {
            set({ loading: false });
        }
    },

    logout: async () => {
        const currentUser = useAuthStore.getState().user;

        if (currentUser?.isGuest) {
            // Delete profile from DB before signing out
            await supabase.from('profiles').delete().eq('id', currentUser.id);
        }

        const { error } = await supabase.auth.signOut();
        if (error) console.error('Error logging out:', error);
        set({ user: null, isAuthenticated: false });
    },
}));
