import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatMadridPage = () => {
    return (
        <SEOPageTemplate
            title="Chat gratis madrid – La sala de los madrileños y visitantes"
            description="Si estás en Madrid o quieres conocer gente de la capital, esta es tu sala preferida. Chat gratis Madrid para todos."
            content={
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🏛️</span> Corazón de la Comunidad
                        </h3>
                        <p>
                            Madrid es una ciudad vibrante y su chat no podía ser menos. Conoce gente de la Puerta del Sol, Malasaña, Retiro o cualquier barrio de la comunidad. Siempre hay gente dispuesta a charlar y compartir planes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🍻</span> Quedadas y Amistad
                        </h3>
                        <p>
                            Muchos de nuestros usuarios aprovechan el chat gratis Madrid para organizar quedadas reales, ir de cañas o descubrir nuevos sitios de la ciudad. Únete y descubre lo que la capital tiene que ofrecerte.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
