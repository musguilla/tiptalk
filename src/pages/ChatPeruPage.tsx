import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatPeruPage = () => {
    return (
        <SEOPageTemplate
            title="Chat Perú – Encuentra amigos y conéctate con todo el Perú"
            description="La sala de chat número uno para peruanos. Únete a conversaciones sobre Lima, Arequipa, Trujillo, nuestra gastronomía y haz amistades duraderas."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🇵🇪</span> De la Costa a la Selva
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Perú es un país de tradiciones y gente amable. En Tiptalk Perú, hemos creado un espacio donde limeños, arequipeños, trujillanos e iquiteños se encuentran para charlar. Es el lugar perfecto para hablar de los mejores huariques, comentar los partidos de la Blanquirroja o simplemente compartir el día a día. Nuestra comunidad peruana es acogedora y siempre está dispuesta a dar una cálida bienvenida a los nuevos usuarios.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🍲</span> Gastronomía y Corazón
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Si hay algo que nos une es el orgullo por nuestra cultura. En nuestras salas se debaten desde recetas de ceviche hasta planes para ir de viaje a Cusco. En Tiptalk no solo intercambias palabras, intercambias experiencias con personas que valoran nuestra historia y nuestro futuro. Es un chat seguro, moderado y diseñado para que te sientas como en una reunión con amigos de toda la vida.
                            </p>
                        </div>
                    </div>

                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                        <h3 className="text-2xl font-bold text-red-900 mb-6">Ventajas de usar el Chat Perú de Tiptalk</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Salas por Ciudades</h4>
                                    <p className="text-sm text-gray-600">Busca gente específicamente de tu zona para organizar salidas reales o amistad local.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Gana recompensas</h4>
                                    <p className="text-sm text-gray-600">Recibe Tips de otros usuarios por ser divertido, informativo o simplemente por ser tú.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Privacidad Gradual</h4>
                                    <p className="text-sm text-gray-600">Empieza anonimamente y solo comparte lo que quieras cuando tengas confianza.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Optimizado Móvil</h4>
                                    <p className="text-sm text-gray-600">Chatea fluido desde cualquier equipo con una interfaz moderna y rápida.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-red max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">El Punto de Encuentro Digital del Perú</h3>
                        <p>
                            Nuestra misión es conectar a todos los peruanos, vivan donde vivan. Tiptalk es ideal para peruanos en el extranjero que quieren mantener el contacto con su gente y su lengua. Entra ahora, elige un alias y descubre por qué somos la comunidad de chat más grande y unida del país. ¡Habla, causa! ¡Te estamos esperando!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
