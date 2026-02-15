import { SEOPageTemplate } from './SEOPageTemplate';

export const Chat50Page = () => {
    return (
        <SEOPageTemplate
            title="Chat más de 50 – Conexiones con experiencia y madurez"
            description="Un espacio dedicado a personas maduras que buscan amigos, compañía o nuevas ilusiones. La edad es solo un número en Tiptalk."
            content={
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="text-3xl">🍷</span> La Plenitud de la Experiencia
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Cruzar la barrera de los 50 no es el final de nada, sino el comienzo de una etapa llena de libertad y sabiduría. En nuestro <strong>Chat para más de 50 años</strong>, encontrarás una comunidad que valora la tranquilidad, el respeto y las conversaciones que realmente aportan valor.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Aquí no hay lugar para el ruido innecesario. Es el rincón ideal para quienes buscan redescubrir la amistad, encontrar pareja o simplemente compartir anécdotas con personas que han vivido experiencias similares.
                            </p>
                        </div>
                        <div className="bg-amber-50 rounded-[2.5rem] p-8 border border-amber-100 shadow-sm relative overflow-hidden">
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl"></div>
                            <h4 className="text-xl font-bold text-amber-900 mb-6 italic">"He vuelto a sentir la ilusión de conectar con gente de mi edad sin complicaciones."</h4>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">👤</div>
                                <div>
                                    <p className="font-bold text-gray-900">Ricardo M., 56 años</p>
                                    <p className="text-xs text-amber-700 font-bold uppercase tracking-widest">Valencia, España</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">☕</span> Salón de Tertulia
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                    Hablamos de viajes y cultura
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                    Compartimos consejos de vida
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                    Espacio libre de toxicidad y faltas de respeto
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">❤️</span> Nuevas Ilusiones
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                                    Encuentra personas afines en tu ciudad
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                                    Sin presiones ni registros intrusivos
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                                    Privacidad garantizada al 100%
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="prose prose-amber max-w-none text-center bg-gray-50 p-8 md:p-12 rounded-[3rem]">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Un diseño pensado para todos</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Nuestra plataforma es intuitiva y fácil de leer, con botones claros y una interfaz limpia. No necesitas ser un experto en tecnología para disfrutar del chat más activo para mayores de 50 años. Solo entra, elige tu nick y empieza a disfrutar de la compañía.
                        </p>
                        <button className="bg-amber-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-amber-700 transition-all hover:scale-105">
                            Entrar al Chat +50
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4">
                            <h5 className="font-bold text-gray-900">Seguridad</h5>
                            <p className="text-sm text-gray-500">Moderación constante para tu tranquilidad.</p>
                        </div>
                        <div className="p-4 border-x border-gray-100">
                            <h5 className="font-bold text-gray-900">Gratuidad</h5>
                            <p className="text-sm text-gray-500">Acceso a todas las salas sin cuotas mensuales.</p>
                        </div>
                        <div className="p-4">
                            <h5 className="font-bold text-gray-900">Soporte</h5>
                            <p className="text-sm text-gray-500">Estamos aquí para ayudarte si tienes dudas.</p>
                        </div>
                    </div>
                </div>
            }
        />
    );
};
