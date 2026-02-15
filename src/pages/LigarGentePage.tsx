import { SEOPageTemplate } from './SEOPageTemplate';

export const LigarGentePage = () => {
    return (
        <SEOPageTemplate
            title="Ligar y Conocer Gente – La sala más activa de Tiptalk"
            description="¿Buscas una nueva ilusión o simplemente hacer amigos? Nuestra sala de ligar es el sitio perfecto para conectar con personas con tus mismos intereses."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">💘</span> Conexiones Reales
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ligar y conocer gente en Tiptalk es diferente. Aquí la magia surge de la conversación. Sin el estrés de decidir por una foto en un segundo, puedes tomarte tu tiempo para charlar, reírte con los chistes de la otra persona y descubrir si hay química de verdad. Es el lugar ideal para quienes valoran la personalidad tanto como el aspecto físico.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🤝</span> Amistad con Posibilidades
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                No todo es ligar intensamente; muchas de las mejores relaciones empiezan con una buena amistad. En esta sala encontrarás a gente abierta, educada y con ganas de ampliar su círculo social. Comparte tus aficiones, habla de tus sueños y deja que las cosas fluyan de manera natural en un ambiente relajado y moderno.
                            </p>
                        </div>
                    </div>

                    <div className="bg-pink-100/50 p-8 rounded-[2rem] border-2 border-dashed border-pink-200 text-center">
                        <h3 className="text-2xl font-bold text-pink-700 mb-4">Consejos para ligar en Tiptalk</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-5 rounded-2xl shadow-sm">
                                <p className="font-bold text-gray-900">Sé tú mismo</p>
                                <p className="text-sm text-gray-500">La honestidad es lo que más atrae en un chat anónimo.</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm">
                                <p className="font-bold text-gray-900">Educa y respeta</p>
                                <p className="text-sm text-gray-500">Un buen saludo y educación abren muchas puertas.</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm">
                                <p className="font-bold text-gray-900">Usa los Tips</p>
                                <p className="text-sm text-gray-500">Los Tips son geniales para romper el hielo y destacar.</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-pink max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Tu próxima aventura empieza aquí</h3>
                        <p>
                            Nuestra sala de ligar está moderada constantemente para asegurar que la experiencia sea agradable para todos. Contamos con filtros de búsqueda para que encuentres a personas cerca de ti o con intereses similares. Tiptalk es la herramienta definitiva para socializar en la era digital de forma segura y divertida.
                        </p>
                        <p>
                            ¡No esperes más a que el destino actúe! Entra ya, chatea y lánzate a ligar y conocer gente increíble.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
