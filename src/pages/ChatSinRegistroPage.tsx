import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatSinRegistroPage = () => {
    return (
        <SEOPageTemplate
            title="Chat gratis sin registro – Chatea de forma rápida y anónima"
            description="Entra directamente en las salas de chat sin necesidad de crear una cuenta. Tu privacidad y rapidez son nuestra prioridad."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">👤</span> Privacidad Total
                        </h3>
                        <p>
                            ¿No quieres compartir tus datos personales? No hay problema. Nuestro chat gratis sin registro te permite empezar a hablar solo con un apodo. Sin correos electrónicos, sin contraseñas, solo chatear.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">💨</span> Velocidad Extrema
                        </h3>
                        <p>
                            Desde que entras en la web hasta que estás enviando tu primer mensaje pasan menos de 5 segundos. Es la forma más rápida de conectar con personas nuevas de todo el mundo sin complicaciones burocráticas.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
