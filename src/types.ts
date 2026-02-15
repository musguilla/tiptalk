export interface User {
    id: string;
    name: string;
    avatar: string;
    isGuest: boolean;
    walletBalance?: number; // Only for registered users
    role?: 'admin' | 'user'; // Global role, simplified
}

export interface Channel {
    id: string;
    name: string;
    category: string; // e.g., "Crypto", "Gaming", "Chilling"
    description: string;
    ownerId: string; // User ID of the creator
    activeUsers: number;
    thumbnailUrl?: string;
    tags?: string[];
    isLive?: boolean;
    topTipperIfAny?: {
        userId: string;
        userName: string;
        amount: number;
    };
}

export interface Message {
    id: string;
    channelId: string;
    userId: string;
    userName: string;
    userAvatar: string;
    content: string;
    timestamp: Date;
    isTip: boolean;
    tipAmount?: number; // Amount in "Tips" (credits)
    tipEffect?: 'sparkle' | 'gold' | 'neon'; // Visual effects
}

export interface TipTransaction {
    id: string;
    userId: string;
    amount: number; // Amount in Tips
    type: 'purchase' | 'spend' | 'receive' | 'payout';
    timestamp: Date;
    description: string;
}

export interface Package {
    id: string;
    name: string;
    price: number;
    tips: number;
}
