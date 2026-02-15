import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatJovenesPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Jóvenes – El lugar de la Generación Z y Alpha"
            description="Entra al chat para jóvenes más dinámico de internet. Conoce gente de tu edad, habla de tendencias, gaming, música y haz nuevos amigos en un entorno seguro y divertido."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🎮</span> Gaming, Trends y Vibes
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Si estás cansado de las redes sociales convencionales donde todo es fachada, el Chat Jóvenes de Tiptalk es tu sitio. Aquí la comunicación es directa, real y sin filtros (bueno, con los filtros que tú quieras poner). Hablamos de los últimos lanzamientos en Steam, de los trends de TikTok que lo están petando y de la música que realmente suena en tus cascos. Es el lugar perfecto para encontrar tu squad o simplemente pasar el rato comentando directos de streamers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">✨</span> Exprésate a tu manera
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                En Tiptalk entendemos que vuestra forma de comunicar es visual y rápida. Por eso nuestras salas permiten compartir fotos y usar un sistema de Tips que mola mucho para destacar tus mensajes o demostrar apoyo a tus amigos. La privacidad es clave: tú eliges quién eres y qué compartes. Sin la presión de los likes públicos, solo conversaciones que fluyen con gente que vibra en tu misma frecuencia.
                            </p>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 shadow-sm relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
                        <h3 className="text-2xl font-bold text-purple-900 mb-6 relative z-10">¿Por qué Tiptalk es el chat para jóvenes definitivo?</h3>
                        <div className="grid md:grid-cols-2 gap-4 relative z-10">
                            {[
                                { title: "Cero Postureo", desc: "Aquí vienes a chatear y ser tú mismo, sin necesidad de feeds perfectos." },
                                { title: "Economía Digital", desc: "Gana y envía Tips para destacar en la comunidad y apoyar a otros." },
                                { title: "Mobile First", desc: "Diseñado para ir contigo en el móvil, rápido y sin consumo excesivo de datos." },
                                { title: "Safe Space", desc: "Moderación automática y manual para mantener a los trolls a raya." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-purple-100">
                                    <h4 className="font-bold text-purple-900">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-purple max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Haz amigos de verdad online</h3>
                        <p>
                            Sabemos que a veces es difícil conectar con gente nueva fuera de tu círculo de siempre. En nuestras salas de chat para jóvenes, las barreras desaparecen. Tenemos canales específicos para estudiantes, para aficionados al anime, para creadores de contenido y mucho más. Todo diseñado para que encuentres a personas que compartan tus pasiones y con las que puedas hablar durante horas.
                        </p>
                        <p>
                            ¡No te quedes fuera de la conversación! Entra ya, elige un nick que te represente y empieza a conocer a gente increíble. ¡Nos vemos dentro!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
