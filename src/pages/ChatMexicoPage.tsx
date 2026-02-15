import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatMexicoPage = () => {
    return (
        <SEOPageTemplate
            title="Chat México – La mayor red de chat en la República Mexicana"
            description="Entra al chat de México más grande y divertido. Chatea con gente de CDMX, Monterrey, Guadalajara y todo el país. Haz amigos, liga y comparte la cultura mexicana."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🇲🇽</span> De Tijuana a Cancún
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                México es un país vibrante, lleno de color y alegría, y nuestro chat refleja exactamente eso. En Tiptalk México, tenemos salas dedicadas para cada estado de la República. Ya sea que busques el ambiente regio de Monterrey, la calidez de Guadalajara o el ritmo acelerado de la CDMX, aquí encontrarás tu lugar. Es el espacio perfecto para compartir memes, hablar de fútbol o recomendar los mejores tacos de tu colonia.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🌮</span> Conecta con tu Identidad
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nuestra comunidad mexicana se distingue por su hospitalidad y buen humor. En estas salas no solo chateas, haces amigos que se vuelven familia. Comparte tus tradiciones, celebra las fiestas patrias online y mantente conectado con personas que comparten tus mismos códigos, modismos y pasión por nuestra tierra.
                            </p>
                        </div>
                    </div>

                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                        <h3 className="text-2xl font-bold text-green-900 mb-6">¿Por qué Tiptalk es el mejor chat de México?</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 italic text-center">
                                "¡Padrísimo! Conocí a mucha gente de mi ciudad sin salir de casa."
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 italic text-center">
                                "El sistema de propinas hace que todo sea más emocionante."
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 italic text-center">
                                "Muy seguro y fácil de usar desde el celular."
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 italic text-center">
                                "Salas organizadas por estados, ¡excelente!"
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-green max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Chat Seguro y Gratuito para todos los Mexicanos</h3>
                        <p>
                            En Tiptalk nos tomamos muy en serio la seguridad de nuestros usuarios. Moderamos nuestras salas para asegurar que el ambiente sea siempre de respeto y diversión. Puedes entrar sin registro para probar la plataforma o crear tu cuenta para empezar a recibir Tips por tu actividad. ¡Chatear en México nunca había sido tan gratificante!
                        </p>
                        <p>
                            Ya sea que busques pareja, amigos para salir o gente con quien jugar videojuegos, en el Chat México de Tiptalk lo encontrarás. ¡Órale, entra ya y empieza la plática!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
