import { SEOPageTemplate } from './SEOPageTemplate';

export const Chat40Page = () => {
    return (
        <SEOPageTemplate
            title="Chat +de 40 – El punto de encuentro de los cuarentones"
            description="Chatea con personas de más de 40 años. Una comunidad madura, con los pies en la tierra y muchas ganas de compartir experiencias y amistad."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">⏳</span> La Mejor Edad para Chatear
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                A los 40 sabemos lo que queremos. En nuestra sala dedicada a mayores de 40 encontrarás conversaciones interesantes, con sentido y profundidad. Es el lugar perfecto para quienes buscan desconectar del trabajo, hablar de sus aficiones o simplemente conocer a alguien que entienda su etapa vital. Sin las prisas de la juventud, pero con toda la energía de la madurez.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🍷</span> Como el Buen Vino
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                El chat para mayores de 40 en Tiptalk es una comunidad acogedora donde se comparten desde consejos de vida hasta las mejores recomendaciones de viajes o cine. Aquí nadie se siente fuera de lugar. Únete a una sala donde el respeto es la norma y la buena charla es el objetivo principal.
                            </p>
                        </div>
                    </div>

                    <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100">
                        <h3 className="text-2xl font-bold text-rose-900 mb-6 text-center">Beneficios de elegir nuestro chat +40</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                                <div className="p-3 bg-rose-100 rounded-xl text-rose-600 font-bold">✓</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Conversaciones con sustancia</h4>
                                    <p className="text-sm text-gray-600">Olvídate del "hola, qué tal" vacío. Aquí la gente sabe conversar.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                                <div className="p-3 bg-rose-100 rounded-xl text-rose-600 font-bold">✓</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Perfiles afines</h4>
                                    <p className="text-sm text-gray-600">Encuentra a personas que comparten tus mismos valores y estilo de vida.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-rose max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Un espacio seguro y privado</h3>
                        <p>
                            En Tiptalk nos preocupamos por tu privacidad. Puedes entrar en la sala de mayores de 40 años sin necesidad de registros complicados. Participa en las conversaciones grupales o, si conectas con alguien especial, continúa la charla en privado. La madurez se nota en el ambiente: respetuoso, fluido y muy divertido.
                        </p>
                        <p>
                            ¡No dejes que te lo cuenten! Entra ya y descubre la comunidad +40 más activa de la red.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
