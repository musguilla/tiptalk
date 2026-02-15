import { SEOPageTemplate } from './SEOPageTemplate';

export const ChatSinRegistroWebPage = () => {
    return (
        <SEOPageTemplate
            title="Chat sin Registro – Libertad total para chatear"
            description="Entra y chatea en segundos. Sin correos, sin contraseñas y sin esperas. La privacidad y la rapidez son nuestra prioridad."
            content={
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🔒</span> Privacidad Absoluta
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                El Chat Sin Registro de Tiptalk está diseñado para quienes valoran su anonimato por encima de todo. No te pediremos ningún dato personal para que empieces a hablar. Elige un alias divertido y lánzate a la conversación. En un mundo lleno de registros y rastreos, nosotros te ofrecemos un oasis de libertad digital.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">⏱️</span> Rapidez Imbatible
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                ¿Tienes cinco minutos libres y quieres charlar? Con nuestro sistema sin registro, en menos de diez segundos estarás interactuando con gente real. Es la solución perfecta para momentos de aburrimiento o cuando simplemente quieres preguntar algo rápidamente a una comunidad activa.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold">!</div>
                            <h3 className="text-xl font-bold text-slate-900">¿Cómo funciona el Chat sin Registro?</h3>
                        </div>
                        <ol className="grid md:grid-cols-3 gap-6 text-left">
                            <li>
                                <span className="block font-bold text-slate-900 mb-1">1. Accede</span>
                                <p className="text-sm text-slate-600">Entra en nuestra web desde cualquier dispositivo.</p>
                            </li>
                            <li>
                                <span className="block font-bold text-slate-900 mb-1">2. Nick</span>
                                <p className="text-sm text-slate-600">Escribe el alias que quieras usar temporalmente.</p>
                            </li>
                            <li>
                                <span className="block font-bold text-slate-900 mb-1">3. ¡Habla!</span>
                                <p className="text-sm text-slate-600">Entra en las salas y disfruta de la charla sin más.</p>
                            </li>
                        </ol>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">La seguridad no es una opción</h3>
                        <p>
                            Aunque nuestro chat sea sin registro, contamos con una moderación avanzada para proteger a nuestros usuarios. El anonimato no es excusa para la falta de respeto. Disfruta de una comunidad limpia, divertida e interesante donde lo que importa son tus palabras, no tus datos personales.
                        </p>
                        <p>
                            ¡Prueba hoy la libertad del Chat sin Registro en Tiptalk!
                        </p>
                    </div>
                </div>
            }
        />
    );
};
