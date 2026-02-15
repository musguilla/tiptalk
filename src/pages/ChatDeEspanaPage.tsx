import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatDeEspanaPage = () => {
    return (
        <SEOPageTemplate
            title="Chat de España – La Sala Nacional de Tiptalk"
            description="Entra al chat de España más popular. Conecta con gente de todas las ciudades y comunidades autónomas en un ambiente seguro y gratuito."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🇪🇸</span> De punta a punta del país
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                El Chat de España es nuestro salón principal. Aquí se mezclan acentos de Andalucía con los del norte, la energía de las islas con la calma de la meseta. Es el punto de encuentro ideal si quieres una visión global de lo que sucede en el país o simplemente quieres hablar con alguien que comparta tus mismos horarios y costumbres.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🌍</span> Tradición y Futuro
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                En el Chat de España de Tiptalk conviven usuarios de todas las edades. Compartimos noticias, comentamos los programas de televisión del momento y, sobre todo, nos apoyamos. Nuestra comunidad es el reflejo de la sociedad española actual: abierta, diversa y muy charlatana.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2 underline italic">Gratis 100%</h4>
                            <p className="text-sm text-blue-800">Sin costes ocultos. Entra y disfruta del chat de España sin pagar nada.</p>
                        </div>
                        <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                            <h4 className="font-bold text-red-900 mb-2 underline italic">Gente Real</h4>
                            <p className="text-sm text-red-800">Moderamos activamente para asegurar que hables con personas reales, no con bots.</p>
                        </div>
                        <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                            <h4 className="font-bold text-yellow-900 mb-2 underline italic">Privacidad</h4>
                            <p className="text-sm text-yellow-800">Respeta tu anonimato. Chatea con total libertad y seguridad.</p>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">La plaza pública digital de España</h3>
                        <p>
                            Nuestro chat para españoles está diseñado para ser la plaza pública donde todos son bienvenidos. Ya sea para ligar, hacer amigos o simplemente pasar un rato entretenido, Tiptalk te ofrece las mejores herramientas. Envía Tips para resaltar los comentarios que te gusten y ayuda a crear una comunidad más positiva y vibrante.
                        </p>
                        <p>
                            ¡Únete hoy a la conversación nacional en el mejor Chat de España!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
