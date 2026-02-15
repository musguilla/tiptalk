import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatSexoPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Sexo – Ligoteo, flirteo y citas"
            description="Encuentra personas con tus mismos intereses y deseos. Un espacio libre de prejuicios para conocer gente nueva."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">💘</span> Flirteo sin límites
                        </h3>
                        <p>
                            Nuestras salas de ligue están diseñadas para que la chispa surja de forma natural. Chatea, conoce a esa persona especial y deja que la conversación fluya en un ambiente divertido y picante.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🔞</span> Para adultos
                        </h3>
                        <p>
                            Un entorno dedicado a personas mayores de edad que saben lo que buscan. Con total libertad para expresarte, siempre desde el respeto y el consentimiento mutuo.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
