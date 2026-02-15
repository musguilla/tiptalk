import { SEOPageTemplate } from './SEOPageTemplate';

export const SalaChatMadridPage = () => {
    return (
        <SEOPageTemplate
            title="Sala de chat Madrid – Conéctate con la Capital"
            description="La sala de referencia para todos los madrileños. Todo sobre lo que pasa en Madrid, en tiempo real."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🐻</span> Del Oso y el Madroño
                        </h3>
                        <p>
                            Únete a la conversación sobre los mejores sitios para ir de cañas, eventos culturales o simplemente comparte cómo está el tráfico en la M-30. Madrid en estado puro en nuestra sala dedicada.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🚉</span> Punto de Encuentro
                        </h3>
                        <p>
                            Ya seas de Chamberí, Vallecas o Alcobendas, esta es tu casa. El lugar perfecto para hacer amigos locales y enterarte de todo lo que se cuece en la gran ciudad.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
