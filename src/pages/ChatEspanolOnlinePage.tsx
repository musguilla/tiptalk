import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatEspanolOnlinePage = () => {
    return (
        <SEOPageTemplate
            title="Chat español online – Conecta con el mundo hispano"
            description="La red social de chat en español más dinámica de internet. Descubre un mundo de posibilidades sin salir de casa."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🔥</span> Comunidad Activa
                        </h3>
                        <p>
                            Forma parte de una comunidad que no para de crecer. En nuestro chat español online, la diversidad de voces y opiniones hace que cada conversación sea una experiencia nueva y enriquecedora.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">📱</span> Adaptado a ti
                        </h3>
                        <p>
                            Disfruta de funciones exclusivas como el envío de fotos, mensajes de voz y el sistema de propinas, todo integrado en una interfaz sencilla pero poderosa diseñada para el usuario hispanohablante.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
