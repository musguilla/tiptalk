
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';

import { ChatLayout } from './components/ChatLayout';
import { WalletPage } from './pages/WalletPage';
import { EarningsPage } from './pages/EarningsPage';
import { AuthLayout } from './layouts/AuthLayout';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ChatGratisPage } from './pages/ChatGratisPage';
import { ChatEspanolPage } from './pages/ChatEspanolPage';
import { ChatEspanaPage } from './pages/ChatEspanaPage';
import { TerraChatPage } from './pages/TerraChatPage';
import { ChatSinRegistroPage } from './pages/ChatSinRegistroPage';
import { ChatMadridPage } from './pages/ChatMadridPage';
import { ChatFotosPage } from './pages/ChatFotosPage';
import { Chat50Page } from './pages/Chat50Page';
import { SalasChatEspanolPage } from './pages/SalasChatEspanolPage';
import { ChatPropinasPage } from './pages/ChatPropinasPage';
import { ChatTipsPage } from './pages/ChatTipsPage';
import { ChatearOnlinePage } from './pages/ChatearOnlinePage';
import { ChatEspanolOnlinePage } from './pages/ChatEspanolOnlinePage';
import { ChatSexoPage } from './pages/ChatSexoPage';
import { ChatearAmigosPage } from './pages/ChatearAmigosPage';
import { SalasChatAdultosPage } from './pages/SalasChatAdultosPage';
import { SalaChatMadridPage } from './pages/SalaChatMadridPage';
import { SalaChatBarcelonaPage } from './pages/SalaChatBarcelonaPage';
import { ChatBarcelonaPage } from './pages/ChatBarcelonaPage';
import { ChatValenciaPage } from './pages/ChatValenciaPage';
import { ChatMexicoPage } from './pages/ChatMexicoPage';
import { ChatArgentinaPage } from './pages/ChatArgentinaPage';
import { ChatPeruPage } from './pages/ChatPeruPage';
import { ChatChilePage } from './pages/ChatChilePage';
import { ChatColombiaPage } from './pages/ChatColombiaPage';
import { ChatJovenesPage } from './pages/ChatJovenesPage';
import { ChatAmorPage } from './pages/ChatAmorPage';
import { Chat40Page } from './pages/Chat40Page';
import { DaleChatPage } from './pages/DaleChatPage';
import { ChatDeEspanaPage } from './pages/ChatDeEspanaPage';
import { ChatGratisEspanaPage } from './pages/ChatGratisEspanaPage';
import { LigarGentePage } from './pages/LigarGentePage';
import { TerraChatEspanaPage } from './pages/TerraChatEspanaPage';
import { ChatSinRegistroWebPage } from './pages/ChatSinRegistroWebPage';

// ChatPage is now ChatLayout directly or wrapped
const ChatPage = () => <ChatLayout />;

function App() {
  const { user, checkSession } = useAuthStore();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:channelId" element={<ChatPage />} />
          <Route
            path="/wallet"
            element={user ? <WalletPage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/earnings"
            element={user ? <EarningsPage /> : <Navigate to="/" replace />}
          />
          {/* SEO Routes */}
          <Route path="/chat-gratis" element={<ChatGratisPage />} />
          <Route path="/chat-en-espanol" element={<ChatEspanolPage />} />
          <Route path="/chat-espana" element={<ChatEspanaPage />} />
          <Route path="/terra-chat-gratis" element={<TerraChatPage />} />
          <Route path="/chat-gratis-sin-registro" element={<ChatSinRegistroPage />} />
          <Route path="/chat-gratis-madrid" element={<ChatMadridPage />} />
          <Route path="/chat-gratis-fotos" element={<ChatFotosPage />} />
          <Route path="/chat-mas-de-50" element={<Chat50Page />} />
          <Route path="/salas-chat-espanol" element={<SalasChatEspanolPage />} />
          <Route path="/chat-con-propinas" element={<ChatPropinasPage />} />
          <Route path="/chat-con-tips" element={<ChatTipsPage />} />
          <Route path="/chatear-online" element={<ChatearOnlinePage />} />
          <Route path="/chat-espanol-online" element={<ChatEspanolOnlinePage />} />
          <Route path="/chat-sexo" element={<ChatSexoPage />} />
          <Route path="/chatear-con-amigos" element={<ChatearAmigosPage />} />
          <Route path="/salas-chat-adultos" element={<SalasChatAdultosPage />} />
          <Route path="/sala-de-chat-madrid" element={<SalaChatMadridPage />} />
          <Route path="/sala-de-chat-barcelona" element={<SalaChatBarcelonaPage />} />
          <Route path="/chat-barcelona" element={<ChatBarcelonaPage />} />
          <Route path="/chat-valencia" element={<ChatValenciaPage />} />
          <Route path="/chat-mexico" element={<ChatMexicoPage />} />
          <Route path="/chat-argentina" element={<ChatArgentinaPage />} />
          <Route path="/chat-peru" element={<ChatPeruPage />} />
          <Route path="/chat-chile" element={<ChatChilePage />} />
          <Route path="/chat-colombia" element={<ChatColombiaPage />} />
          <Route path="/chat-jovenes" element={<ChatJovenesPage />} />
          <Route path="/chat-amor" element={<ChatAmorPage />} />
          <Route path="/chat-mas-de-40" element={<Chat40Page />} />
          <Route path="/dale-chat" element={<DaleChatPage />} />
          <Route path="/chat-de-espana" element={<ChatDeEspanaPage />} />
          <Route path="/chat-gratis-espana" element={<ChatGratisEspanaPage />} />
          <Route path="/ligar-y-conocer-gente" element={<LigarGentePage />} />
          <Route path="/terra-chat-espana" element={<TerraChatEspanaPage />} />
          <Route path="/chat-sin-registro" element={<ChatSinRegistroWebPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
