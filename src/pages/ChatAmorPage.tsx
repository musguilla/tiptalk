import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatAmorPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Amor – Encuentra a tu media naranja o una nueva ilusión"
            description="Entra al chat de amor más romántico de internet. Salas dedicadas al ligue, el flirteo y la búsqueda de pareja estable o amistades con derecho a roce."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">❤️</span> Donde nace el sentimiento
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                El amor puede surgir en cualquier momento y lugar, y qué mejor sitio que una sala diseñada específicamente para ello. En Tiptalk Amor, las conversaciones fluyen de manera natural, sin la frialdad de los algoritmos de las apps de citas convencionales. Aquí puedes charlar, conocer los intereses de la otra persona a través de la conversación y dejar que la chispa surja poco a poco. Es el espacio ideal para románticos empedernidos que valoran el arte de hablar y conocer a alguien profundamente.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🥂</span> Flirteo y Seducción
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                ¿Buscas un flirteo divertido o quizás algo más intenso? Nuestras salas de ligue están llenas de personas con ganas de conocerte. Contamos con herramientas que facilitan el acercamiento: envía fotos románticas, destaca tus mensajes con Tips exclusivos o simplemente mantén una charla íntima por privado. En Tiptalk, fomentamos un ambiente de respeto y sinceridad, donde cada usuario busca su propia forma de felicidad compartida.
                            </p>
                        </div>
                    </div>

                    <div className="bg-pink-50 p-8 rounded-3xl border border-pink-100 shadow-sm relative overflow-hidden text-center">
                        <div className="absolute -left-10 -top-10 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-40"></div>
                        <h3 className="text-2xl font-bold text-pink-900 mb-4">¿Preparado para el amor?</h3>
                        <p className="text-pink-800 mb-8 max-w-xl mx-auto">
                            Miles de parejas se han conocido a través de salas de chat a lo largo de los años. Tiptalk es la evolución de esa experiencia clásica con tecnología moderna.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100">
                                <p className="text-pink-600 font-bold mb-1">Sin Juicios</p>
                                <p className="text-xs text-gray-500">Un espacio libre para ser tú mismo y expresar tus sentimientos.</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100">
                                <p className="text-pink-600 font-bold mb-1">Privacidad</p>
                                <p className="text-xs text-gray-500">Mensajes privados cifrados para tus momentos de mayor intimidad.</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100">
                                <p className="text-pink-600 font-bold mb-1">Compatibilidad</p>
                                <p className="text-xs text-gray-500">Encuentra a gente con tus mismos valores, hobbies y metas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-pink max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Mucho más que un Chat de Ligar</h3>
                        <p>
                            A diferencia de otras plataformas, en Tiptalk Amor priorizamos la calidad de las conexiones. Nuestras salas están moderadas para evitar comportamientos tóxicos, asegurando que tu búsqueda del amor sea una experiencia agradable y segura. Tenemos canales para todas las edades y orientaciones, porque creemos que el amor no tiene límites ni etiquetas.
                        </p>
                        <p>
                            No esperes a que el destino toque a tu puerta. ¡Entra ya en el Chat Amor de Tiptalk y empieza a escribir tu propia historia romántica hoy mismo!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
