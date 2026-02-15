import { SEOPageTemplate } from './SEOPageTemplate';

export const TerraChatEspanaPage = () => {
    return (
        <SEOPageTemplate
            title="Terra Chat España – El espíritu del chat clásico renovado"
            description="Revive la esencia del mítico Terra Chat en su versión para España, ahora con toda la tecnología de Tiptalk. Gratis, rápido y con la gente de siempre."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🏛️</span> Un Homenaje al Pasado
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mucho antes de las redes sociales, Terra Chat unió a toda España. En Tiptalk hemos querido rescatar esa sensación de comunidad, de canales llenos de gente a cualquier hora y de descubrimientos constantes. Nuestra sala Terra Chat España es para los nostálgicos y para las nuevas generaciones que buscan una forma de comunicación más pura y directa.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🚀</span> Tecnología del Futuro
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Aunque el espíritu es clásico, nuestra plataforma es de última generación. Olvídate de los errores de conexión o las interfaces obsoletas. El nuevo Terra Chat España en Tiptalk es rápido, seguro y está lleno de funciones sociales modernas como nuestro exclusivo sistema de Tips.
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-8 rounded-3xl border border-orange-200 text-center">
                        <h3 className="text-2xl font-bold text-orange-900 mb-4 italic">"El chat de siempre, como nunca lo habías visto"</h3>
                        <p className="text-orange-800 max-w-2xl mx-auto">
                            Disfruta de las salas de siempre (Ligue, Amistad, General) con la seguridad y rapidez que solo Tiptalk puede ofrecerte en España.
                        </p>
                    </div>

                    <div className="prose prose-orange max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">La comunidad más leal de España</h3>
                        <p>
                            Entrar en Terra Chat España significa ser parte de una historia que empezó hace décadas y que hoy continúa más viva que nunca. Contamos con salas específicas por regiones, edades y temáticas para que siempre encuentres tu sitio. Chatea gratis, sin registros obligatorios y con la tranquilidad de estar en una plataforma moderada y segura.
                        </p>
                        <p>
                            ¡Vuelve a casa! Entra ya en el Terra Chat España de Tiptalk y reconecta con tus amigos.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
