import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatValenciaPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Valencia – Habla con gente de la Comunidad Valenciana"
            description="La sala de chat más vibrante de Valencia. Disfruta de conversaciones frescas sobre la ciudad, sus fiestas y haz nuevos amigos en el Levante español."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🔥</span> Pólvora, Sol y Playa
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                En nuestro Chat Valencia vivirás la pasión de las Fallas, el sol de la Malvarrosa y el ambiente del Carmen durante todo el año. Es el espacio perfecto para preguntar por los mejores casales falleros, organizar una paella con gente nueva o simplemente charlar sobre la actualidad de la ciudad de las artes y las ciencias.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🌊</span> El Espíritu del Turia
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Valencia es luz y comunidad. En Tiptalk Valencia fomentamos esa cercanía facilitando que personas de Ruzafa, Benicalap o el Cabañal se encuentren en una sala segura y divertida. No importa si buscas amistad, amor o simplemente pasar un buen rato chateando; aquí encontrarás a gente con tu misma sintonía.
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                        <h3 className="text-2xl font-bold text-orange-900 mb-4">Lo mejor del Chat Valencia en Tiptalk</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1.5 w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700"><strong>Chat gratuito:</strong> Acceso total a todas las funciones sin coste.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1.5 w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700"><strong>Eventos Locales:</strong> Entérate de conciertos, mascletàs y ferias antes que nadie.</span>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1.5 w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700"><strong>Gente cerca:</strong> Localiza a usuarios en tu mismo código postal.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1.5 w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700"><strong>Seguridad:</strong> Moderación activa para un ambiente libre de spam.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="prose prose-orange max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Conectando Valencia</h3>
                        <p>
                            Nuestro objetivo es ser la plaza pública digital de Valencia. Un lugar donde compartir un "bon dia", comentar la última noticia del Levante o el VCF, y sobre todo, donde nadie se sienta solo. La interfaz intuitiva permite que tanto jóvenes como mayores disfruten de la experiencia de chatear online sin complicaciones.
                        </p>
                        <p>
                            ¿A qué esperas para entrar? La sala de Valencia te espera con los brazos abiertos. ¡Apunta't y comença a parlar!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
