import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatEspanaPage = () => {
    return (
        <SEOPageTemplate
            title="Chat España – Conoce gente de todo el territorio nacional"
            description="¿Buscas gente de España? Entra en nuestras salas dedicadas a las diferentes provincias y ciudades españolas."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🇪🇸</span> De Madrid a Barcelona, de Sevilla a Bilbao
                        </h3>
                        <p>
                            En el Chat España de Tiptalk encontrarás salas específicas para cada región. Tanto si quieres hablar del clima en el norte como de la feria en el sur, siempre habrá alguien conectado compartiendo tu misma ubicación.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">⚡</span> Conexión inmediata
                        </h3>
                        <p>
                            Miles de españoles se conectan a diario para charlar sobre actualidad, deportes o simplemente para pasar el rato. Regístrate o entra como invitado para empezar a formar parte de la mayor red social de chat en España.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
