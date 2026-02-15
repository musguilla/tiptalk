import { SEOPageTemplate } from './SEOPageTemplate';

export const TerraChatPage = () => {
    return (
        <SEOPageTemplate
            title="Terra chat gratis – El espíritu de los clásicos, renovado"
            description="Si buscas la experiencia del mítico Terra chat, Tiptalk es la evolución que estabas esperando. Tu chat de siempre con tecnología de hoy."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🕰️</span> Nostalgia y modernidad
                        </h3>
                        <p>
                            Muchos recordamos con cariño las tardes en Terra Chat. En Tiptalk hemos recuperado esa esencia de simplicidad y comunidad, pero añadiendo las funciones modernas que hoy en día son imprescindibles.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🚀</span> Más rápido que nunca
                        </h3>
                        <p>
                            Sin esperas, sin Java (como en los viejos tiempos) y compatible con todos los navegadores modernos. El Terra chat gratis de nueva generación te espera para revivir esas grandes conversaciones.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
