import { HeroSection } from '../components/HeroSection';
import { TopNavbar } from '../components/TopNavbar';
import { Link } from 'react-router-dom';

interface SEOPageTemplateProps {
    title: string;
    description: string;
    content: React.ReactNode;
}

export const SEOPageTemplate = ({ title, description, content }: SEOPageTemplateProps) => {
    return (
        <div className="h-screen flex flex-col bg-white overflow-hidden">
            <TopNavbar />

            <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
                    <HeroSection />

                    <div className="mt-12 mb-20">
                        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
                                {title}
                            </h2>

                            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                                <p className="text-lg leading-relaxed font-semibold">
                                    {description}
                                </p>

                                <div className="border-t border-gray-100 my-8"></div>

                                {content}
                            </div>
                        </section>
                    </div>

                    {/* SEO Links Footer Section (same as Home) */}
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
