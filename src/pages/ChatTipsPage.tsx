import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatTipsPage = () => {
    return (
        <SEOPageTemplate
            title="Chat con tips – Recompensas digitales en tiempo real"
            description="Usa nuestros Tips para destacar tus mensajes, enviar regalos y apoyar a tus amigos en la plataforma."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">⚡</span> Mensajes que brillan
                        </h3>
                        <p>
                            Los Tips te permiten dar un toque especial a tus conversaciones. Destaca tus mensajes sobre el resto y asegúrate de que esa persona especial vea lo que tienes que decirle.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🎁</span> Sistema de recompensas
                        </h3>
                        <p>
                            Nuestra economía interna basada en Tips facilita que el valor fluya entre los usuarios. Es un sistema seguro, transparente y diseñado para llevar la interacción al siguiente nivel.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
