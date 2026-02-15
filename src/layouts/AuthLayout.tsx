import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Video, Zap, Users, CheckCircle } from 'lucide-react';

export const AuthLayout = () => {
    return (
        <div className="flex min-h-screen bg-white">
            {/* Left Sidebar - Marketing Content */}
            <div className="hidden lg:flex w-1/2 bg-blue-600 relative overflow-hidden flex-col justify-between p-16 text-white">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/3"></div>

                <div className="relative z-10">
                    <Link to="/" className="flex items-center gap-3 mb-10 text-white">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 font-bold text-2xl">
                            <Video fill="currentColor" size={20} />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Tiptalk</span>
                    </Link>

                    <h1 className="text-5xl font-extrabold leading-tight mb-6">
                        Convierte tu pasión <br />
                        en ganancias.
                    </h1>
                    <p className="text-blue-100 text-lg mb-12 max-w-md">
                        Únete a miles de creadores que están construyendo sus comunidades y ganando directamente de sus fans.
                    </p>

                    <div className="space-y-6">
                        <FeatureRow
                            icon={<Zap size={20} />}
                            title="Habilita Streaming de Video"
                            desc="Transmite en HD con un solo clic."
                        />
                        <FeatureRow
                            icon={<CheckCircle size={20} />}
                            title="Recibe Propinas Instantáneas"
                            desc="Apoyo directo de tus espectadores leales."
                        />
                        <FeatureRow
                            icon={<Users size={20} />}
                            title="Participación de Fans"
                            desc="Chat interactivo y mensajería privada."
                        />
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="relative z-10 bg-blue-700/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/50 mt-12">
                    <p className="text-lg italic mb-4">"Tiptalk cambió cómo me conecto con mi audiencia. El sistema de propinas es fluido y la comunidad es increíble."</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-200 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" />
                        </div>
                        <div>
                            <div className="font-bold text-white">Sarah Jenkins</div>
                            <div className="text-xs text-blue-200">Creadora de Contenido Gaming</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form Content */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-24 xl:px-32 relative">
                <div className="w-full max-w-md mx-auto">
                    <Outlet />
                </div>

                <div className="mt-12 text-center text-xs text-gray-400">
                    <div className="flex justify-center gap-6 mb-2">
                        <a href="#" className="hover:text-gray-600">Centro de Ayuda</a>
                        <a href="#" className="hover:text-gray-600">Normas</a>
                        <a href="#" className="hover:text-gray-600">Política de Cookies</a>
                    </div>
                    © 2026 Tiptalk Inc.
                </div>
            </div>
        </div>
    );
};

const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-center gap-4 bg-blue-500/20 p-4 rounded-xl border border-blue-400/30">
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-white">{title}</h3>
            <p className="text-sm text-blue-100">{desc}</p>
        </div>
    </div>
);
