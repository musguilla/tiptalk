import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatearOnlinePage = () => {
    return (
        <SEOPageTemplate
            title="Chatear online – Comunicación instantánea desde tu navegador"
            description="Sin descargas, sin instalaciones. Entra en Tiptalk y empieza a chatear online con personas de todo el mundo al instante."
            content={
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="text-3xl">🌐</span> Tu Ventana al Mundo Digital
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                <strong>Chatear online</strong> nunca ha sido tan sencillo y potente. En Tiptalk, hemos eliminado todas las barreras técnicas para que la comunicación sea instantánea. Olvídate de pesadas descargas, actualizaciones de software o instalaciones complejas.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Nuestra plataforma funciona directamente desde tu navegador favorito (Chrome, Safari, Firefox, Edge), ofreciéndote una experiencia de chat en tiempo real estable, segura y extremadamente rápida.
                            </p>
                        </div>
                        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative">
                            <div className="absolute top-4 left-4 flex gap-1.5">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="mt-6 space-y-4">
                                <div className="bg-slate-800 p-3 rounded-lg w-3/4">Hola, ¿alguien online? 😊</div>
                                <div className="bg-blue-600 p-3 rounded-lg w-3/4 ml-auto text-right">¡Claro! Siempre hay gente aquí.</div>
                                <div className="bg-slate-800 p-3 rounded-lg w-1/2">Genial, Tiptalk es súper rápido.</div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">La mejor experiencia de chat online</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4">⚡</div>
                                <h4 className="font-bold mb-2">Carga en Segundos</h4>
                                <p className="text-sm text-gray-600 font-medium italic underline">Optimizado para conexiones móviles y de escritorio.</p>
                            </div>
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4">🛡️</div>
                                <h4 className="font-bold mb-2">Seguridad Web</h4>
                                <p className="text-sm text-gray-600 font-medium italic underline">Protocolos de cifrado para proteger tus datos online.</p>
                            </div>
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4">💬</div>
                                <h4 className="font-bold mb-2">Real-Time</h4>
                                <p className="text-sm text-gray-600 font-medium italic underline">Sin refrescos de página, mensajes instantáneos.</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué todo el mundo prefiere Tiptalk para chatear online?</h3>
                        <p>
                            La clave está en la simplicidad. Al ser un sistema basado en web, puedes usarlo desde cualquier dispositivo: un PC antiguo, la tablet del salón o tu smartphone de última generación. No necesitas crear cuentas pesadas; con un simple nick ya estás participando en la charla global.
                        </p>
                        <p>
                            Además, la funcionalidad de propinas (Tips) añade una capa social que otros chats no tienen. Premias la agilidad, la inteligencia y el buen humor, haciendo que chatear online sea una experiencia mucho más gratificante y humana.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center border border-blue-100">
                        <h4 className="text-2xl font-bold text-blue-900 mb-4 font-outfit">¿Listo para conectar con el mundo?</h4>
                        <p className="text-blue-800 mb-8 font-outfit">Únete a los miles de usuarios que ya están chateando online ahora mismo.</p>
                        <button className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-shadow-lg transform hover:-translate-y-1 transition-all">
                            Entrar al Chat Online
                        </button>
                    </div>
                </div>
            }
        />
    );
};
