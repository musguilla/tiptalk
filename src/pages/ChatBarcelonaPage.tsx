import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatBarcelonaPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Barcelona – Conoce gente en la Ciudad Condal"
            description="La comunidad de chat más activa de Barcelona. Conecta con barceloneses y visitantes para compartir planes, cultura y amistad en la ciudad más cosmopolita del Mediterráneo."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🏖️</span> De la Barceloneta a Gràcia
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Barcelona es una ciudad que nunca duerme, y nuestro chat refleja esa energía. En Tiptalk Barcelona encontrarás personas de todos los barrios: desde el aire bohemio de Gràcia hasta el ambiente marinero de la Barceloneta. Es el punto de encuentro ideal para quienes buscan recomendaciones sobre el último restaurante de moda en el Born o quieren comentar el partido del Barça en tiempo real.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🏛️</span> Cultura y Eventos
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                ¿Buscas compañía para ir al Primavera Sound o al Sónar? ¿Quieres comentar la última exposición en el MACBA? Nuestra comunidad madrileña es apasionada de la cultura. Aquí no solo chateas; creas vínculos con personas que comparten tus mismos intereses por el arte, la música y la arquitectura modernista que hace única a nuestra ciudad.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">¿Por qué elegir el Chat Barcelona de Tiptalk?</h3>
                        <p className="text-blue-800 mb-6">
                            A diferencia de otras salas de chat obsoletas, Tiptalk te ofrece una experiencia moderna, segura y gratificante. Aquí, tu participación tiene valor real gracias a nuestro sistema de Tips.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Gente Real</h4>
                                <p className="text-sm text-gray-600">Usuarios verificados y una comunidad madura que busca conexiones auténticas en la capital catalana.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Sin Registro</h4>
                                <p className="text-sm text-gray-600">Entra como invitado y empieza a hablar en segundos. Privacidad total para tus conversaciones.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Multi-idioma</h4>
                                <p className="text-sm text-gray-600">Exprésate en castellano o catalán; nuestra comunidad es abierta y multicultural.</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Planes y quedadas en Barcelona</h3>
                        <p>
                            Nuestro chat no se queda solo en la pantalla. Muchos usuarios utilizan Tiptalk para organizar quedadas para correr por la Diagonal, ir de cañas por el Eixample o simplemente disfrutar de un atardecer en los Búnkers del Carmel. La seguridad y el respeto son nuestras prioridades, permitiéndote conocer gente nueva en un entorno de confianza.
                        </p>
                        <p>
                            Únete hoy mismo a la sala de Barcelona y descubre por qué somos la red social de chat preferida por los barceloneses. No importa si eres de aquí de toda la vida o si acabas de llegar; en Tiptalk siempre hay un hueco para ti.
                        </p>
                    </div>
                </div>
            }
        />
    );
};
