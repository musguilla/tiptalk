import { SEOPageTemplate } from './SEOPageTemplate';

export const SalasChatEspanolPage = () => {
    return (
        <SEOPageTemplate
            title="Salas de chat español – Encuentra tu rincón favorito"
            description="Explora nuestra amplia variedad de salas temáticas, por países y por ciudades. La mayor red de salas de chat en español."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🏛️</span> Diversidad Temática
                        </h3>
                        <p>
                            Desde salas de literatura y cine hasta deportes o tecnología. Nuestras salas de chat en español están categorizadas para que siempre encuentres personas con las que compartas pasiones comunes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🌐</span> Conexión sin Fronteras
                        </h3>
                        <p>
                            Entra en salas específicas de México, Argentina, Chile, España o Colombia. No importa dónde estés, siempre hay una sala de chat abierta esperando tu participación.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
