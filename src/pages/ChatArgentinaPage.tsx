import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatArgentinaPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Argentina – Salas de Chat para Argentinos y Amantes del Mate"
            description="Entrá al chat de Argentina más copado. Conocé gente de Buenos Aires, Córdoba, Rosario y todo el país. Charlas sobre fútbol, política, cultura y mucha buena onda."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🇦🇷</span> De Ushuaia a la Quiaca
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                El Chat Argentina de Tiptalk es el punto de encuentro virtual por excelencia. Aquí nos juntamos a cualquier hora a compartir un mate digital y debatir de lo que sea. Tenemos salas para porteños, cordobeses, rosarinos y gente de cada rincón de nuestras provincias. Es el lugar ideal para encontrar compañeros de salida, debatir el último partido o simplemente pasar el rato con gente que tiene tu mismo humor y forma de hablar.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">⚽</span> Pasión y Cultura
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Si hay algo que nos define es la pasión, y en nuestras salas se nota. Hablamos de fútbol, de música nacional, de literatura y de todo lo que nos apasiona. Nuestra comunidad es abierta, analítica y muy divertida. En Tiptalk Argentina, fomentamos la libertad de expresión siempre desde el respeto, creando un espacio donde todos se sientan como en casa, estén donde estén.
                            </p>
                        </div>
                    </div>

                    <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100">
                        <h3 className="text-2xl font-bold text-sky-900 mb-6">¿Qué vas a encontrar en Tiptalk Argentina?</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
                                <h4 className="font-bold text-gray-900 mb-2">Buena Onda</h4>
                                <p className="text-sm text-gray-600">Un ambiente distendido para hacer amigos nuevos, chatear y divertirte sin complicaciones.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
                                <h4 className="font-bold text-gray-900 mb-2">Totalmente Gratis</h4>
                                <p className="text-sm text-gray-600">Nada de suscripciones raras. Entrás y chateás. Así de simple.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
                                <h4 className="font-bold text-gray-900 mb-2">Sistema de Propinas</h4>
                                <p className="text-sm text-gray-600">Premiá a los que tiran buenos comentarios o te divierten con Tips reales.</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-sky max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">El Chat para Argentinos en el Mundo</h3>
                        <p>
                            Sabemos que hay argentinos por todos lados. Por eso, Tiptalk es la herramienta perfecta para mantenerte conectado con tus raíces y con gente que hable tu mismo idioma, sin importar si estás en Buenos Aires o en Madrid. Nuestras salas están optimizadas para móviles, para que puedas llevar la charla a todos lados.
                        </p>
                        <p>
                            ¡No te quedes afuera! Sumate a la comunidad, armá tu perfil y empezá a chatear con los argentinos más buena onda de la red. ¡Dale, te esperamos!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
