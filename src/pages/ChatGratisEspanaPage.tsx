import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatGratisEspanaPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Gratis España – Sin registro y sin límites"
            description="La mejor opción para chatear gratis en España. Conoce gente, haz amigos y liga totalmente gratis en nuestra sala nacional."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">💸</span> 100% Gratuito
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                En Tiptalk creemos que la comunicación debe ser libre. Nuestro Chat Gratis España te permite acceder a todas las funcionalidades principales sin que tengas que sacar la cartera. Entra en las salas, envía mensajes, usa emoticonos y conoce a gente nueva de Madrid, Barcelona, Sevilla y el resto del país sin coste alguno.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">⚡</span> Acceso Instantáneo
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                No te hacemos perder el tiempo con encuestas o pasos innecesarios. Haz clic, pon tu nick y ya estás dentro. Es el chat gratis de España más rápido y eficiente del mercado actual, optimizado tanto para PC como para móviles.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">¿Qué incluye el Chat Gratis España?</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-center gap-3">
                                <span className="text-green-400">✔</span> Canales temáticos variados
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-400">✔</span> Mensajería privada ilimitada
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-400">✔</span> Envío de fotos seguro
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-400">✔</span> Sin necesidad de tarjeta bancaria
                            </li>
                        </ul>
                    </div>

                    <div className="prose prose-indigo max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">La comunidad de chat favorita en España</h3>
                        <p>
                            Miles de usuarios nos eligen a diario por nuestra simplicidad y la calidad de la gente. El Chat Gratis de España es ideal para aquellos que buscan una alternativa a las apps de citas tradicionales que suelen cobrar por cada interacción. Aquí, la conversación es el centro de todo.
                        </p>
                        <p>
                            ¡No pagues por chatear! Únete ya a Tiptalk y disfruta del mejor ambiente gratuito de la red.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
