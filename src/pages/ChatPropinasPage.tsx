import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatPropinasPage = () => {
    return (
        <SEOPageTemplate
            title="Chat con propinas – Gana dinero chateando"
            description="Tiptalk revoluciona el chat online permitiendo que los usuarios se den propinas entre sí. ¡Tu popularidad tiene premio!"
            content={
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="text-3xl">💹</span> La Nueva Economía de la Conversación
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                En las redes sociales tradicionales, tu tiempo y tu carisma generan beneficios solo para la plataforma. En Tiptalk, hemos cambiado las reglas del juego. Introducimos el <strong>Chat con Propinas</strong>, un sistema donde el valor fluye directamente entre usuarios.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Si alguien te hace reír, te ofrece un consejo valioso o simplemente te cae bien, puedes agradecerle con un "Tip" al instante. Es una forma de reconocimiento tangible que fomenta un ambiente de respeto, calidad y diversión.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl border border-yellow-100 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="text-xl">✨</span> Beneficios de los Tips
                            </h4>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-yellow-400 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">💰</div>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Ingresos Reales</h5>
                                        <p className="text-sm text-gray-600">Convierte tu influencia y simpatía en ganancias que puedes utilizar en la plataforma.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-orange-400 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">⭐</div>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Destaca del Resto</h5>
                                        <p className="text-sm text-gray-600">Los usuarios que reciben y dan propinas ganan prestigio y visibilidad en las salas.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">🤝</div>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Vínculos Fuertes</h5>
                                        <p className="text-sm text-gray-600">Un tip es la mejor forma de romper el hielo y demostrar interés genuino por alguien.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 italic text-center">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">"Tiptalk me ha permitido conocer gente increíble y, además, sentir que mi tiempo en el chat tiene un valor real."</h4>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                            <div className="text-left">
                                <p className="font-bold text-gray-900">María G.</p>
                                <p className="text-sm text-gray-500">Usuaria desde 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="prose prose-blue max-w-none">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Cómo funcionan las propinas en Tiptalk?</h3>
                            <p>
                                El proceso es extremadamente sencillo y está integrado en la interfaz de chat de forma nativa. Solo tienes que hacer clic en el nombre de un usuario o en el icono de moneda junto a su mensaje para enviarle la cantidad de Tips que desees.
                            </p>
                            <p>
                                Los Tips se descuentan de tu monedero virtual y se añaden instantáneamente al del receptor. Es rápido, seguro y totalmente transparente. Además, puedes enviar mensajes especiales junto con tus propinas para que todo el mundo vea tu generosidad (o hacerlo de forma privada).
                            </p>
                        </div>
                        <div className="prose prose-blue max-w-none">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Seguridad y Transparencia</h3>
                            <p>
                                Todas las transacciones de Tips están protegidas por nuestro sistema de seguridad. Puedes ver tu historial de propinas dadas y recibidas en cualquier momento desde tu panel de usuario.
                            </p>
                            <p>
                                Nuestro objetivo es crear una economía circular donde los usuarios se apoyen entre sí, permitiendo que los mejores creadores de conversación y los miembros más serviciales de la comunidad se vean recompensados por su contribución positiva.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h4 className="text-3xl font-bold mb-4">¿Listo para empezar a ganar?</h4>
                            <p className="text-blue-100">
                                Únete hoy a Tiptalk y descubre cómo el chat con propinas puede cambiar tu forma de socializar en internet.
                            </p>
                        </div>
                        <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                            Abrir mi Monedero
                        </button>
                    </div>
                </div>
            }
        />
    );
};
