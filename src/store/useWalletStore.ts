import { create } from 'zustand';
import type { TipTransaction } from '../types';

interface WalletState {
    balance: number;
    transactions: TipTransaction[];
    addFunds: (amount: number) => void;
    sendTip: (amount: number, recipientId: string) => boolean; // Returns success/fail
    getPayoutStatus: () => { canWithdraw: boolean; remainingNeed: number };
}

export const useWalletStore = create<WalletState>((set, get) => ({
    balance: 1540, // Initial balance from mock auth user (simulated sync)
    transactions: [],

    addFunds: (amount: number) => {
        set((state) => ({
            balance: state.balance + amount,
            transactions: [
                {
                    id: Date.now().toString(),
                    userId: 'current',
                    amount,
                    type: 'purchase',
                    timestamp: new Date(),
                    description: `Purchased ${amount} Tips`,
                },
                ...state.transactions,
            ],
        }));
    },

    sendTip: (amount: number, recipientId: string) => {
        const { balance } = get();
        if (balance >= amount) {
            set((state) => ({
                balance: state.balance - amount,
                transactions: [
                    {
                        id: Date.now().toString(),
                        userId: 'current',
                        amount: -amount,
                        type: 'spend',
                        timestamp: new Date(),
                        description: `Sent tip to ${recipientId}`,
                    },
                    ...state.transactions,
                ],
            }));
            return true;
        }
        return false;
    },

    getPayoutStatus: () => {
        const { balance } = get();
        // 100 Tips = $1.00 USD. Minimum $50 USD = 5000 Tips.
        const threshold = 5000;
        return {
            canWithdraw: balance >= threshold,
            remainingNeed: Math.max(0, threshold - balance),
        };
    },
}));
