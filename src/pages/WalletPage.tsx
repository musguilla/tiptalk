import { useState } from 'react';
import { CreditCard, Shield } from 'lucide-react';
import { useWalletStore } from '../store/useWalletStore';
import { MOCK_PACKAGES } from '../store/mockData';
import { useAuthStore } from '../store/useAuthStore';
import clsx from 'clsx';

export const WalletPage = () => {
    useAuthStore();
    const { balance, addFunds } = useWalletStore();
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePurchase = () => {
        if (!selectedPackage) return;
        setIsProcessing(true);

        setTimeout(() => {
            const pkg = MOCK_PACKAGES.find(p => p.id === selectedPackage);
            if (pkg) {
                addFunds(pkg.tips);
                alert(`Successfully purchased ${pkg.tips} Tips!`);
            }
            setIsProcessing(false);
            setSelectedPackage(null);
        }, 1500);
    };

    return (
        <div className="p-8 max-w-5xl mx-auto overflow-y-auto h-full">
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wallet</h1>
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-bold text-lg">
                    <span>💎 {balance.toLocaleString()} Tips Available</span>
                </div>
            </header>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {MOCK_PACKAGES.map((pkg) => (
                    <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={clsx(
                            "border-2 rounded-2xl p-6 cursor-pointer transition-all relative overflow-hidden",
                            selectedPackage === pkg.id
                                ? "border-blue-500 bg-blue-50/50 shadow-lg scale-105"
                                : "border-gray-100 bg-white hover:border-blue-200 hover:shadow-md"
                        )}
                    >
                        {pkg.id === 'p3' && (
                            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-xl">
                                BEST VALUE
                            </div>
                        )}

                        <h3 className="text-gray-500 font-medium uppercase tracking-wide text-sm mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-bold text-gray-900 mb-4">
                            {pkg.tips} <span className="text-lg text-gray-400 font-normal">Tips</span>
                        </div>
                        <div className="text-xl font-bold text-blue-600 mb-6">
                            ${pkg.price}
                        </div>

                        <button className={clsx(
                            "w-full py-2 rounded-lg font-bold transition-colors",
                            selectedPackage === pkg.id
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                        )}>
                            Select
                        </button>
                    </div>
                ))}
            </div>

            {selectedPackage && (
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <CreditCard className="text-blue-600" />
                        Payment Details
                    </h3>

                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Card Number</label>
                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Expiry</label>
                                <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">CVC</label>
                                <input type="text" placeholder="123" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handlePurchase}
                        disabled={isProcessing}
                        className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isProcessing ? 'Processing...' : `Pay $${MOCK_PACKAGES.find(p => p.id === selectedPackage)?.price}`}
                    </button>

                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                        <Shield size={12} />
                        Secure Payment Simulation
                    </div>
                </div>
            )}
        </div>
    );
};
