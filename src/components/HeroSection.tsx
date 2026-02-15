import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
    const [nickname, setNickname] = useState('');
    const { loginAsGuest, loading } = useAuthStore();
    const navigate = useNavigate();

    const handleStartChat = async () => {
        if (!nickname.trim()) return;

        try {
            await loginAsGuest(nickname);
            navigate('/chat/general');
        } catch (error) {
            console.error('Failed to login as guest:', error);
            // Optionally show error toast here
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleStartChat();
        }
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden border border-blue-100 shadow-sm">

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider rounded-lg mb-4">
                    En Vivo e Interactivo
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    Chatea gratis y gana recompensas
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                    Tiptalk es el primer chat gratis donde puedes ganar recompensas de tus amig@s por tu actividad en la plataforma. Cuanto más participes, más oportunidades tendrás de obtener beneficios exclusivos dentro de la comunidad. Habla con personas de tu ciudad o de cualquier parte del mundo, participa en conversaciones y haz nuevos amigos.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-3xl">
                    <input
                        type="text"
                        placeholder="Escribe tu apodo"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={loading}
                        className="flex-1 px-6 py-4 rounded-xl border-2 border-green-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:!border-blue-500 focus:ring-4 focus:!ring-blue-500/10 transition-all font-medium text-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] focus:shadow-none disabled:opacity-50"
                    />
                    <button
                        onClick={handleStartChat}
                        disabled={loading || !nickname.trim()}
                        className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-200 hover:shadow-green-300 transform hover:-translate-y-1 whitespace-nowrap text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>
                                Empezar a chatear <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Abstract Chat Bubble visual on the right */}
            <div className="hidden md:block absolute right-12 bottom-12 opacity-80">
                <div className="bg-white p-6 rounded-2xl rounded-bl-none shadow-xl border border-gray-100 max-w-xs transform rotate-2">
                    <div className="w-full h-3 bg-gray-100 rounded-full mb-3 w-3/4"></div>
                    <div className="w-full h-3 bg-gray-100 rounded-full mb-3"></div>
                    <div className="w-full h-3 bg-gray-100 rounded-full w-1/2"></div>
                </div>
                <div className="bg-blue-600 p-6 rounded-2xl rounded-br-none shadow-xl absolute -top-24 -left-12 transform -rotate-3">
                    <div className="w-32 h-3 bg-blue-400 rounded-full mb-3"></div>
                    <div className="w-48 h-3 bg-blue-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};
