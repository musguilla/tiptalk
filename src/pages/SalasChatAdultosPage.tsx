import { SEOPageTemplate } from './SEOPageTemplate';

export const SalasChatAdultosPage = () => {
    return (
        <SEOPageTemplate
            title="Salas de chat adultos – Espacios exclusivos +18"
            description="Entra en nuestras salas reservadas para adultos. Temas maduros, sin censura y con total libertad de expresión."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🗝️</span> Exclusividad y Libertad
                        </h3>
                        <p>
                            En las salas de chat para adultos de Tiptalk, puedes hablar de cualquier tema sin tabúes. Mantén conversaciones profundas, divertidas o sugerentes con otros usuarios que buscan lo mismo que tú.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🛡️</span> Seguridad y Respeto
                        </h3>
                        <p>
                            Aunque son salas para adultos, el respeto sigue siendo nuestra norma número uno. Disfruta de un ambiente maduro donde todos los participantes conocen y aceptan las normas de la comunidad.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
