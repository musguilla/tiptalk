import { useState } from 'react';
import { Search, Bell, Video } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';

export const TopNavbar = () => {
    const { user } = useAuthStore();
    const [searchQuery, setSearchQuery] = useState('');


    return (
        <nav className="h-16 bg-white border-b border-gray-200 flex items-center px-6 sticky top-0 z-20">
            {/* 1. Logo Section */}
            <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        <Video fill="currentColor" size={18} className="text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">Tiptalk</span>
                </Link>
            </div>

            {/* 2. Search Bar - Left Aligned */}
            <div className="ml-8 w-full max-w-md">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar streams o usuarios..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                    <Search className="absolute left-3.5 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            {/* 3. Auth Buttons / User Profile */}
            <div className="ml-auto flex items-center gap-3 justify-end">
                {user ? (
                    <>
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="flex items-center gap-2 pl-2">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-8 h-8 rounded-full border border-gray-200"
                            />
                            <div className="hidden lg:block text-sm">
                                <span className="font-bold block leading-none">{user.name}</span>
                                {user.isGuest && <span className="text-[10px] text-gray-400 uppercase">Guest</span>}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="text-gray-700 font-bold text-sm hover:text-gray-900 px-3 py-2 whitespace-nowrap"
                        >
                            Iniciar Sesión
                        </Link>
                        <Link
                            to="/register"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
                        >
                            Registrarse
                        </Link>
                    </>
                )}


            </div>
        </nav>
    );
};
