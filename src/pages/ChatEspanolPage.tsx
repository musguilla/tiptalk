import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatEspanolPage = () => {
    return (
        <SEOPageTemplate
            title="Chat en español – El punto de encuentro de la comunidad hispana"
            description="Conecta con personas de toda Latinoamérica, España y Estados Unidos que comparten tu idioma. El mayor chat en español del mundo."
            content={
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="text-3xl">🗣️</span> La Lengua que nos Une
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                El español es más que un idioma; es una cultura vibrante, diversa y llena de matices. En nuestro <strong>Chat en Español</strong>, creamos un puente digital entre España, Latinoamérica y las comunidades hispanas de todo el mundo.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Aquí no importa si dices "vale" o "ya", "boludo" o "chamo". Lo importante es la conexión inmediata con personas que entienden tus modismos, tu humor y tus raíces. Tiptalk es el gran salón de la comunidad hispana.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-2xl border border-red-100 text-center">
                                <span className="text-3xl block mb-2">🇪🇸</span>
                                <span className="text-xs font-bold text-red-900 uppercase">España</span>
                            </div>
                            <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                                <span className="text-3xl block mb-2">🇲🇽</span>
                                <span className="text-xs font-bold text-green-900 uppercase">México</span>
                            </div>
                            <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 text-center">
                                <span className="text-3xl block mb-2">🇦🇷</span>
                                <span className="text-xs font-bold text-sky-900 uppercase">Argentina</span>
                            </div>
                            <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100 text-center">
                                <span className="text-3xl block mb-2">🇨🇴</span>
                                <span className="text-xs font-bold text-yellow-900 uppercase">Colombia</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ventajas de chatear en tu idioma</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl font-bold h-fit">✓</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Sin Barreras</h4>
                                    <p className="text-sm text-gray-600">Exprésate con total libertad, usando tus expresiones favoritas y siendo tú mismo.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl font-bold h-fit">✓</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Intercambio Cultural</h4>
                                    <p className="text-sm text-gray-600">Descubre cómo se vive en otros países hispanos, sus costumbres y sus historias.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl font-bold h-fit">✓</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Amistades Globales</h4>
                                    <p className="text-sm text-gray-600">Haz amigos que, aunque estén a miles de kilómetros, comparten tu misma lengua materna.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl font-bold h-fit">✓</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Canales Temáticos</h4>
                                    <p className="text-sm text-gray-600">Desde música latina hasta política o deportes, siempre hay un rincón para tus intereses.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">El chat favorito de la comunidad hispanohablante</h3>
                        <p>
                            Miles de usuarios se conectan a diario para compartir su vida en el Chat en Español de Tiptalk. Gracias a nuestro sistema de Tips, los miembros más carismáticos y serviciales de la comunidad son recompensados, creando un ambiente de gran calidad y respeto.
                        </p>
                        <p>
                            ¡No esperes más! Entra ahora en la comunidad hispana más grande y divertida de internet. Sin registros complicados, totalmente gratis y listo para usar en tu móvil.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-3xl p-8 md:p-12 text-white flex flex-col items-center text-center">
                        <h4 className="text-3xl font-bold mb-4">Únete a la Gran Charla Hispana</h4>
                        <p className="mb-8 text-white/90 max-w-xl text-lg">Más de 500 millones de personas hablan tu idioma. ¿A cuántas quieres conocer hoy?</p>
                        <button className="bg-white text-red-600 font-bold py-4 px-12 rounded-full shadow-2xl hover:scale-105 transition-all">
                            Entrar al Chat en Español
                        </button>
                    </div>
                </div>
            }
        />
    );
};
