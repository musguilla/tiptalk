import { SEOPageTemplate } from './SEOPageTemplate';

export const DaleChatPage = () => {
    return (
        <SEOPageTemplate
            title="Dale Chat – ¡Dale a la conversación y haz amigos!"
            description="Dale Chat es la forma más rápida y sencilla de conectar con el mundo. Una plataforma dinámica para chatear, ligar y divertirte sin límites."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🚀</span> Rápido y Directo
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Como su nombre indica, en Dale Chat no perdemos el tiempo. Es para quienes quieren "darle" a la tecla desde el primer segundo. Sin esperas, sin formularios aburridos. Solo tú y miles de personas dispuestas a compartir un momento de distracción, una buena anécdota o una profunda reflexión.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">⚡</span> Energía Positiva
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Lo que define a Dale Chat es su ambiente eléctrico. Siempre hay algo pasando: un debate, alguien enviando Tips o una confesión anónima. Es el motor de Tiptalk, donde la actividad nunca cesa y siempre hay alguien al otro lado de la pantalla listo para responderte.
                            </p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-200">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="text-5xl">🔥</div>
                            <div>
                                <h3 className="text-xl font-bold text-yellow-900 mb-2">¡Dale ya al chat!</h3>
                                <p className="text-yellow-800">
                                    No necesitas ser un experto. Solo entra, elige tu nick y empieza a escribir. Así de fácil es ser parte de nuestra comunidad.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-yellow max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué usar Dale Chat en Tiptalk?</h3>
                        <p>
                            A diferencia de los chats antiguos, Dale Chat está optimizado para dispositivos móviles modernos. La interfaz es intuitiva, limpia y está diseñada para que la conversación sea la protagonista. Además, nuestro sistema de Tips permite recompensar a los usuarios más simpáticos, haciendo que la experiencia sea mucho más dinámica y gratificante que un chat convencional.
                        </p>
                        <p>
                            ¡No esperes más! Dale chat a tu vida y conoce a gente impresionante hoy mismo.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
