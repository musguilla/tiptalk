import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatChilePage = () => {
    return (
        <SEOPageTemplate
            title="Chat Chile – La Sala más bacán para chatear"
            description="Entra al chat de Chile y conoce gente de Santiago, Valparaíso, Concepción y todo el país. Haz amigos, comparte experiencias y disfruta de la mejor onda chilena."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🇨🇱</span> Del Norte al Sur
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Chile es territorio de gente acogedora y conversaciones entretenidas. En Tiptalk Chile hemos creado salas específicas para cada región. ¿Buscas a alguien en Santiago para ir de paseo por el Cerro San Cristóbal? ¿O quizás gente en el sur para hablar sobre la vida en la Patagonia? Aquí encontrarás a chilenos de todas partes compartiendo anécdotas, noticias y, por supuesto, mucha buena vibra. Es el lugar perfecto para hablar de música, cine, deportes y todo lo que nos apasiona.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🏔️</span> Comunidad y Amistad
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nuestra comunidad chilena se destaca por ser directa y divertida. En estas salas no solo vienes a leer mensajes, vienes a construir amistades reales. Contamos con un sistema de moderación que asegura un ambiente libre de bots y spam, para que tu única preocupación sea qué tema de conversación proponer hoy. Comparte tus fotos, envía Tips a tus amigos favoritos y disfruta de una experiencia social completa.
                            </p>
                        </div>
                    </div>

                    <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-6">¿Qué hace especial a Tiptalk Chile?</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-5 rounded-xl text-center shadow-sm">
                                <div className="text-3xl mb-2">⚡</div>
                                <h4 className="font-bold text-gray-900 text-sm">Carga Rápida</h4>
                                <p className="text-xs text-gray-500">Chatea sin lag ni esperas.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl text-center shadow-sm">
                                <div className="text-3xl mb-2">🔒</div>
                                <h4 className="font-bold text-gray-900 text-sm">Privacidad</h4>
                                <p className="text-xs text-gray-500">Tus datos están seguros con nosotros.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl text-center shadow-sm">
                                <div className="text-3xl mb-2">👥</div>
                                <h4 className="font-bold text-gray-900 text-sm">Gente Real</h4>
                                <p className="text-xs text-gray-500">Cero por ciento perfiles falsos.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl text-center shadow-sm">
                                <div className="text-3xl mb-2">💰</div>
                                <h4 className="font-bold text-gray-900 text-sm">Tips</h4>
                                <p className="text-xs text-gray-500">Gana mientras conversas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">El mejor Chat Online de Chile</h3>
                        <p>
                            No pierdas más tiempo en redes sociales aburridas. El chat es la forma más directa de conectar con la esencia de las personas. En Tiptalk Chile, valoramos la espontaneidad y el respeto. Únete hoy mismo, elige un buen avatar y lánzate a conocer a los chilenos y chilenas más buena onda de internet. ¡Wena onda, te esperamos!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
