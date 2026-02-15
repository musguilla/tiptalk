import { HeroSection } from '../components/HeroSection';
import { TopNavbar } from '../components/TopNavbar';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className="h-screen flex flex-col bg-white overflow-hidden">
            {/* Top Navigation */}
            <TopNavbar />

            <div className="flex flex-1 overflow-hidden">
                {/* Main Content Scrollable Area */}
                <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
                    <HeroSection />

                    {/* SEO / Welcome Content */}
                    <div className="mt-12 mb-20">
                        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
                                Tiptalk – La mayor red de chat en español para conocer gente y hacer nuevos amigos
                            </h2>

                            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                                <p className="text-lg leading-relaxed">
                                    Bienvenido/a a <strong>Tiptalk</strong>, la red de chat en español donde puedes conocer gente de tu ciudad,
                                    hacer nuevos amigos, ligar y conectar con personas de habla hispana en cualquier parte del mundo.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Si buscas un chat online en español gratuito, moderno y adaptado a móviles, Tiptalk es tu lugar.
                                    Nuestra plataforma te permite hablar con personas de <strong>España, Argentina, Chile, Perú, México, Estados Unidos (USA)</strong> y muchos más países,
                                    ampliando tus posibilidades de amistad y conexión sin límites.
                                </p>

                                <div className="border-t border-gray-100 my-8"></div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="text-2xl">🌎</span> Conecta con personas cerca de ti o en cualquier país
                                        </h3>
                                        <p className="mb-4">
                                            Con nuestra innovadora función “Gente Cerca”, puedes encontrar y chatear con personas que están en tu mismo pueblo o ciudad.
                                            Ideal si quieres hacer amigos locales, conocer gente nueva o incluso encontrar pareja en tu zona.
                                        </p>
                                        <p>
                                            Además, puedes acceder a salas de chat por países y ciudades, lo que facilita encontrar conversaciones que realmente te interesen.
                                            Todo diseñado para ofrecerte la mejor experiencia de chat en español con recompensas.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="text-2xl">💬</span> Chat para hacer amigos, ligar y divertirte
                                        </h3>
                                        <ul className="space-y-2 list-none pl-0">
                                            {['Hacer nuevos amigos', 'Ligar online', 'Participar en conversaciones grupales', 'Conocer personas con tus mismos intereses', 'Hablar con gente hispana de todo el mundo'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-6 text-sm bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800">
                                            Si quieres disfrutar del mejor chat en España y en español, esta es tu red.
                                            Aquí encontrarás una comunidad activa y un equipo de gestión que mantiene el entorno seguro, dinámico y divertido.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* SEO Links Footer Section */}
                    <div className="mt-12 mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Salas Populares</h3>
                                <ul className="space-y-2">
                                    <li><Link to="/chat-gratis" className="text-gray-500 hover:text-blue-600 transition-colors">Chat gratis</Link></li>
                                    <li><Link to="/chat-en-espanol" className="text-gray-500 hover:text-blue-600 transition-colors">Chat en español</Link></li>
                                    <li><Link to="/dale-chat" className="text-gray-500 hover:text-blue-600 transition-colors">Dale Chat</Link></li>
                                    <li><Link to="/chat-sin-registro" className="text-gray-500 hover:text-blue-600 transition-colors">Chat sin registro</Link></li>
                                    <li><Link to="/chatear-online" className="text-gray-500 hover:text-blue-600 transition-colors">Chatear online</Link></li>
                                    <li><Link to="/chat-jovenes" className="text-gray-500 hover:text-blue-600 transition-colors">Chat jovenes</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Comunidad y Más</h3>
                                <ul className="space-y-2">
                                    <li><Link to="/ligar-y-conocer-gente" className="text-gray-500 hover:text-blue-600 transition-colors">Ligar y conocer gente</Link></li>
                                    <li><Link to="/chat-amor" className="text-gray-500 hover:text-blue-600 transition-colors">Chat Amor</Link></li>
                                    <li><Link to="/chat-mas-de-40" className="text-gray-500 hover:text-blue-600 transition-colors">Chat +de 40</Link></li>
                                    <li><Link to="/chat-mas-de-50" className="text-gray-500 hover:text-blue-600 transition-colors">Chat mas de 50</Link></li>
                                    <li><Link to="/chatear-con-amigos" className="text-gray-500 hover:text-blue-600 transition-colors">Chatear con amigos</Link></li>
                                    <li><Link to="/chat-con-propinas" className="text-gray-500 hover:text-blue-600 transition-colors">Chat con propinas</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">España</h3>
                                <ul className="space-y-2">
                                    <li><Link to="/chat-de-espana" className="text-gray-500 hover:text-blue-600 transition-colors">Chat de España</Link></li>
                                    <li><Link to="/chat-gratis-espana" className="text-gray-500 hover:text-blue-600 transition-colors">Chat gratis España</Link></li>
                                    <li><Link to="/terra-chat-espana" className="text-gray-500 hover:text-blue-600 transition-colors">Terra chat España</Link></li>
                                    <li><Link to="/chat-barcelona" className="text-gray-500 hover:text-blue-600 transition-colors">Chat Barcelona</Link></li>
                                    <li><Link to="/chat-valencia" className="text-gray-500 hover:text-blue-600 transition-colors">Chat Valencia</Link></li>
                                    <li><Link to="/chat-gratis-madrid" className="text-gray-500 hover:text-blue-600 transition-colors">Chat gratis madrid</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Internacional</h3>
                                <ul className="space-y-2">
                                    <li><Link to="/chat-mexico" className="text-gray-500 hover:text-blue-600 transition-colors">Chat Mexico</Link></li>
                                    <li><Link to="/chat-argentina" className="text-gray-500 hover:text-blue-600 transition-colors">Chat Argentina</Link></li>
                                    <li><Link to="/chat-peru" className="text-gray-500 hover:text-blue-600 transition-colors">Chat Perú</Link></li>
                                    <li><Link to="/chat-chile" className="text-gray-500 hover:text-blue-600 transition-colors">Chat Chile</Link></li>
                                    <li><Link to="/chat-colombia" className="text-gray-500 hover:text-blue-600 transition-colors">Chat Colombia</Link></li>
                                    <li><Link to="/chat-sexo" className="text-gray-500 hover:text-blue-600 transition-colors">Chat sexo</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </main>


            </div>
        </div>
    );
};
