import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatGratisPage = () => {
    return (
        <SEOPageTemplate
            title="Chat gratis – Encuentra personas para chatear sin coste"
            description="Tiptalk te ofrece la mejor experiencia de chat gratis online. Únete a nuestra comunidad y conecta con miles de usuarios sin pagar nada."
            content={
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="text-3xl">🚀</span> La Libertad de Charlar sin Costes
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                En un internet saturado de suscripciones y muros de pago, Tiptalk nace bajo una premisa sencilla: <strong>el chat debe ser gratis</strong>. Nuestra plataforma te permite entrar en contacto con personas de todo el mundo, participar en debates apasionados o simplemente pasar el rato sin que tu cuenta bancaria lo note.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                No creemos en los límites de mensajes diarios ni en las funciones básicas "capadas". Aquí, el acceso a las salas principales y la interacción con otros usuarios es y será siempre una prioridad gratuita para nuestra comunidad.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4">¿Qué obtienes con el Chat Gratis?</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</div>
                                    <span className="text-gray-700 font-medium">Acceso ilimitado a salas generales</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</div>
                                    <span className="text-gray-700 font-medium">Mensajería privada individual</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</div>
                                    <span className="text-gray-700 font-medium">Carga instantánea sin anuncios invasivos</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</div>
                                    <span className="text-gray-700 font-medium">Sistema de notificaciones en tiempo real</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-16">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mucho más que un chat gratuito</h3>
                            <p className="text-gray-600">
                                Combinamos la simplicidad de los chats clásicos con la potencia de la tecnología moderna para ofrecerte una experiencia única en España y Latinoamérica.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                                <div className="text-3xl mb-4">🌍</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Comunidad Global</h4>
                                <p className="text-gray-600 text-sm">
                                    Conecta con hispanohablantes de todos los continentes. Desde Madrid hasta Buenos Aires, nuestra red gratis te mantiene unido a tus raíces.
                                </p>
                            </div>
                            <div className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100">
                                <div className="text-3xl mb-4">🎭</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Anonimato Seguro</h4>
                                <p className="text-gray-600 text-sm">
                                    Tu privacidad es sagrada. Chatea sin revelar datos sensibles y mantén el control total sobre quién ve tu información personal.
                                </p>
                            </div>
                            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
                                <div className="text-3xl mb-4">💎</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Premios y Tips</h4>
                                <p className="text-gray-600 text-sm">
                                    ¿Quién dijo que lo gratis no tiene valor? En Tiptalk puedes recibir propinas reales de otros usuarios solo por ser tú mismo y aportar a la charla.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h4 className="text-3xl font-bold mb-6 italic">"El mejor chat gratuito que he probado en años"</h4>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                                Miles de usuarios se han pasado a Tiptalk por su rapidez y la calidad de su comunidad. Únete tú también y descubre por qué somos tendencia.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl">
                                Empezar a Chatear Gratis Now
                            </button>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Preguntas Frecuentes sobre nuestro Chat Gratis</h3>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            <div>
                                <h5 className="font-bold text-gray-900">¿Realmente es gratis chatear?</h5>
                                <p className="text-sm text-gray-600">Sí, las funciones de chat público y privado son gratuitas. Solo pagas si decides comprar Tips para apoyar a otros usuarios.</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-gray-900">¿Necesito registrarme para entrar?</h5>
                                <p className="text-sm text-gray-600">Puedes entrar como invitado para probar la plataforma, aunque crear una cuenta te permitirá guardar tu perfil y tus ganancias.</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-gray-900">¿Funciona en teléfonos móviles?</h5>
                                <p className="text-sm text-gray-600">Absolutamente. Nuestra aplicación web está 100% optimizada para Android e iOS, cargando rápidamente incluso en conexiones lentas.</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-gray-900">¿Es seguro para mujeres y jóvenes?</h5>
                                <p className="text-sm text-gray-600">Contamos con moderación automática y humana para asegurar que el ambiente sea siempre de respeto y libre de acoso.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};
