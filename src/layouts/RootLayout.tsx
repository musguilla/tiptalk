
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const RootLayout = () => {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <Outlet />
            </main>
        </div>
    );
};
