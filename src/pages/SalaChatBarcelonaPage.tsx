import { SEOPageTemplate } from './SEOPageTemplate';

export const SalaChatBarcelonaPage = () => {
    return (
        <SEOPageTemplate
            title="Sala de chat Barcelona – Connecta amb la Ciutat Comtal"
            description="Entra en la sala favorita de los barceloneses. Amigos, planes y mucha conversación en Barcelona."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🌊</span> Mediterráneo y Modernismo
                        </h3>
                        <p>
                            Habla sobre el Barça, el último concierto en el Palau o recomienda ese restaurante escondido del Born. Nuestra sala de Barcelona es el lugar ideal para compartir vivencias sobre la ciudad.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🏘️</span> De Gràcia a L'Hospitalet
                        </h3>
                        <p>
                            Barcelona es diversa y su chat también. Conoce a personas de todos los barrios y alrededores, haz planes para ir a la playa o busca compañía para ir de compras por el Passeig de Gràcia.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
