
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useWalletStore } from '../store/useWalletStore';
import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const MOCK_EARNINGS_DATA = [
    { day: 'Mon', tips: 1200 },
    { day: 'Tue', tips: 900 },
    { day: 'Wed', tips: 4500 }, // Big donation!
    { day: 'Thu', tips: 2100 },
    { day: 'Fri', tips: 3400 },
    { day: 'Sat', tips: 1800 },
    { day: 'Sun', tips: 2600 },
];

export const EarningsPage = () => {
    const { balance, getPayoutStatus } = useWalletStore();
    const { canWithdraw, remainingNeed } = getPayoutStatus();

    // Convert balance to USD (100 Tips = $1.00)
    const balanceUSD = (balance / 100).toFixed(2);
    const remainingUSD = (remainingNeed / 100).toFixed(2);

    return (
        <div className="p-8 h-full overflow-y-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Creator Dashboard</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-sm font-medium mb-1">Total Balance</div>
                    <div className="text-4xl font-bold text-gray-900 flex items-center gap-2">
                        ${balanceUSD}
                        <span className="text-sm font-normal text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">
                            {balance} Tips
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-sm font-medium mb-1">Last 7 Days</div>
                    <div className="text-4xl font-bold text-green-600 flex items-center gap-2">
                        +$165.00
                        <TrendingUp size={24} />
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl text-white shadow-lg">
                    <div className="text-gray-400 text-sm font-medium mb-4">Payout Status</div>
                    {canWithdraw ? (
                        <div>
                            <div className="flex items-center gap-2 text-green-400 font-bold mb-4">
                                <CheckCircle size={20} />
                                Ready to Withdraw
                            </div>
                            <button className="w-full bg-white text-black py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                                Withdraw Profits
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center gap-2 text-yellow-400 font-bold mb-2">
                                <AlertCircle size={20} />
                                Min. $50.00 Required
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mb-2 overflow-hidden">
                                <div
                                    className="bg-yellow-400 h-full transition-all duration-1000"
                                    style={{ width: `${Math.min(100, (balance / 5000) * 100)}%` }}
                                />
                            </div>
                            <p className="text-xs text-gray-400">
                                You need ${remainingUSD} more to withdraw.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8 h-96">
                <h3 className="font-bold text-gray-800 mb-6">Earnings History (Tips)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={MOCK_EARNINGS_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280' }}
                            dx={-10}
                        />
                        <Tooltip
                            cursor={{ fill: '#F3F4F6' }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="tips" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
