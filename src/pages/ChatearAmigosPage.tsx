import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatearAmigosPage = () => {
    return (
        <SEOPageTemplate
            title="Chatear con amigos – Tu grupo, siempre conectado"
            description="Mantente en contacto con tus amigos de siempre o haz un nuevo grupo en Tiptalk. La amistad empieza con un 'hola'."
            content={
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="text-3xl">🤝</span> Fortalece tus Vínculos
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                En un mundo digital tan acelerado, mantener el contacto con los que más quieres es fundamental. <strong>Chatear con amigos</strong> en Tiptalk no es solo intercambiar texto, es compartir momentos, risas y apoyo en una plataforma diseñada para la cercanía.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Ya sea que quieras organizar la próxima salida, compartir fotos de tus vacaciones o simplemente saber cómo les ha ido el día, nuestras salas privadas y grupales ofrecen el entorno perfecto para que la amistad florezca.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
                                <div className="text-2xl">📸</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Comparte Recuerdos</h4>
                                    <p className="text-sm text-gray-600">Envía fotos y contenido multimedia de forma rápida y segura.</p>
                                </div>
                            </div>
                            <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 flex gap-4">
                                <div className="text-2xl">⚡</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Sincronización Total</h4>
                                    <p className="text-sm text-gray-600">Tus conversaciones siempre al día, sin importar el dispositivo que uses.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">¿Por qué elegir Tiptalk para hablar con tus amigos?</h3>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                                <h4 className="font-bold mb-2">Privacidad Total</h4>
                                <p className="text-sm text-gray-500">Tus charlas privadas son solo tuyas. Sin rastreos publicitarios.</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                                <h4 className="font-bold mb-2">Multi-Chat</h4>
                                <p className="text-sm text-gray-500">Gestiona múltiples conversaciones y grupos de amigos sin esfuerzo.</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                                <h4 className="font-bold mb-2">Recompensas</h4>
                                <p className="text-sm text-gray-500">Envía Tips a tus amigos como agradecimiento o regalo por su apoyo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Invita a tus amigos y empieza la charla ahora!</h3>
                        <p className="text-gray-600 mb-8">No dejes que la distancia social sea un problema. Tiptalk es el puente que te une a tu gente, todos los días, a todas horas.</p>
                        <button className="bg-blue-600 text-white font-bold py-4 px-12 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:scale-105">
                            Crear Sala para Amigos
                        </button>
                    </div>
                </div>
            }
        />
    );
};
