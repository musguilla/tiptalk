import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatFotosPage = () => {
    return (
        <SEOPageTemplate
            title="Chat gratis fotos – Comparte tus mejores momentos"
            description="Un chat visual donde puedes compartir imágenes y ver fotos de otros usuarios mientras conversas."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">📸</span> Una imagen vale más que mil palabras
                        </h3>
                        <p>
                            En Tiptalk puedes enviar fotos de forma sencilla y segura. Muestra quién eres, comparte tus viajes o simplemente diviértete con memes en nuestras salas de chat gratuitas con soporte para imágenes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🛡️</span> Compartición segura
                        </h3>
                        <p>
                            Nuestro sistema garantiza que compartir fotos sea una experiencia agradable. Puedes elegir a quién envías tus imágenes y disfrutar de una comunicación visual enriquecida sin complicaciones.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
