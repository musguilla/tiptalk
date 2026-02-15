import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatColombiaPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Colombia – Conéctate con el sabor y la alegría colombiana"
            description="Entra al chat de Colombia y conoce gente de Bogotá, Medellín, Cali, Barranquilla y todo el país. Haz amigos, comparte cultura y disfruta de la mejor hospitalidad."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🇨🇴</span> De San Andrés a Leticia
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Colombia es un país de regiones, cada una con su propia magia. En Tiptalk Colombia encontrarás salas dedicadas para los amantes de la capital, para quienes disfrutan de la eterna primavera en Medellín o para los que llevan el ritmo del Valle y la Costa en la sangre. Es el espacio perfecto para preguntar por los mejores parces, compartir música caribeña o simplemente charlar sobre la actualidad del país. Nuestra comunidad es conocida por su carisma y alegría desbordante.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">☕</span> Amistad con Aroma de Café
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Chatear en Colombia es como sentarse a tomar un tintico con amigos. En nuestras salas valoramos la amabilidad y la conversación fluida. Contamos con herramientas modernas que te permiten no solo escribir, sino también enviar fotos y mensajes que destacan gracias a nuestro sistema de Tips. Ya sea que busques el amor o simplemente un grupo de amigos para comentar el fin de semana, en Tiptalk lo encontrarás en un entorno seguro y protegido.
                            </p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                        <h3 className="text-2xl font-bold text-yellow-900 mb-6">¿Por qué entrar al Chat Colombia de Tiptalk?</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 shadow-sm">1</div>
                                <h4 className="font-bold text-gray-900">Pasión Futbolera</h4>
                                <p className="text-sm text-gray-600 italic">Debates apasionados sobre nuestra selección y ligas locales en tiempo real.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 shadow-sm">2</div>
                                <h4 className="font-bold text-gray-900">Hospitalidad Paisa</h4>
                                <p className="text-sm text-gray-600 italic">Una bienvenida calurosa garantizada por parte de nuestra comunidad activa.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 shadow-sm">3</div>
                                <h4 className="font-bold text-gray-900">Conexión Costeña</h4>
                                <p className="text-sm text-gray-600 italic">Toda la alegría y el ritmo del norte del país en nuestras salas de ligue.</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-yellow max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Chat Seguro para todos los Colombianos</h3>
                        <p>
                            Entendemos que la privacidad es fundamental. Por eso en Tiptalk puedes chatear sin registro obligatorio, manteniendo el control total sobre tu identidad. Nuestra tecnología de punta asegura que tu experiencia sea rápida y sin interrupciones, tanto en WiFi como en datos móviles. ¡No te quedes sin parche! Entra ya a la comunidad más unida de Colombia.
                        </p>
                        <p>
                            ¡De una, parce! Tu nueva gente te está esperando en las salas de Tiptalk Colombia.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
