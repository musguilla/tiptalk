import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/useAuthStore';
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { checkSession } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            await checkSession();
            navigate('/');
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.message || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Bienvenido de nuevo</h2>
                <p className="text-gray-500">Ingresa tus datos para acceder a tu cuenta.</p>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm font-medium">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 mb-8">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Correo Electrónico</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            <Mail size={18} />
                        </div>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-sm font-bold text-gray-700">Contraseña</label>
                        <a href="#" className="text-sm text-blue-600 font-medium hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            <Lock size={18} />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? <Loader2 className="animate-spin" size={20} /> : 'Iniciar Sesión'}
                </button>
            </form>

            <div className="relative flex items-center justify-center border-t border-gray-200 pt-6 mb-6">
                <span className="absolute bg-white px-3 text-xs font-bold text-gray-400 uppercase tracking-wider top-3">
                    O continúa con
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white py-3 rounded-xl transition-colors font-medium text-gray-700">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 opacity-60 grayscale group-hover:grayscale-0" />
                    Google
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white py-3 rounded-xl transition-colors font-medium text-gray-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 3.96-.69.46.03 2.16.2 3.15 1.6-2.58 1.5-2.14 4.86.37 6.13-.58 1.63-1.42 3.23-2.56 5.19zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                    Apple
                </button>
            </div>

            <div className="text-center">
                <span className="text-gray-500">¿No tienes una cuenta? </span>
                <Link to="/register" className="text-blue-600 font-bold hover:underline">Regístrate</Link>
            </div>
        </>
    );
};
