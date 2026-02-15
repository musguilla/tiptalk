import type { Channel, Message, User, Package } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { subMinutes } from 'date-fns';

export const MOCK_USERS: User[] = [
    {
        id: 'u1',
        name: 'CryptoKing',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoKing',
        isGuest: false,
        walletBalance: 1540,
        role: 'user',
    },
    {
        id: 'u2',
        name: 'AliceWonder',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
        isGuest: false,
        walletBalance: 250,
        role: 'user',
    },
    {
        id: 'u3',
        name: 'BobBuilder',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
        isGuest: false,
        walletBalance: 50,
        role: 'user',
    },
];

export const MOCK_CHANNELS: Channel[] = [
    {
        id: 'general',
        name: 'General',
        category: 'General',
        description: 'Sala principal de Tiptalk. ¡Saluda a todos!',
        ownerId: 'system',
        activeUsers: 5430,
        thumbnailUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000',
        tags: ['General', 'Comunidad', 'Bienvenida'],
        isLive: true,
    },
    {
        id: 'c1',
        name: 'Subiendo a Gran Maestro',
        category: 'Gaming',
        description: 'Subiendo de rango en Apex Legends. ¡Únete para aprender trucos!',
        ownerId: 'u1',
        activeUsers: 4200,
        thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
        tags: ['Competitivo', 'FPS', 'Ranked'],
        isLive: true,
        topTipperIfAny: { userId: 'u2', userName: 'AliceWonder', amount: 5000 },
    },
    {
        id: 'c2',
        name: 'Programando un clon de Tiptalk EN VIVO',
        category: 'Tecnología',
        description: 'Construyendo una app de chat full-stack desde cero.',
        ownerId: 'u2',
        activeUsers: 1800,
        thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
        tags: ['Programación', 'React', 'TypeScript'],
        isLive: true,
        topTipperIfAny: { userId: 'u3', userName: 'BobBuilder', amount: 200 },
    },
    {
        id: 'c3',
        name: 'Charla Tech Nocturna & AMA',
        category: 'Podcast',
        description: 'Discutiendo lo último en IA y desarrollo web.',
        ownerId: 'system',
        activeUsers: 842,
        thumbnailUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
        tags: ['Podcast', 'Tech', 'AMA'],
        isLive: true,
    },
    {
        id: 'c4',
        name: 'Beats Lofi para Estudiar',
        category: 'Música',
        description: 'Relájate y concéntrate.',
        ownerId: 'u3',
        activeUsers: 210,
        thumbnailUrl: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=1000',
        tags: ['Lofi', 'Música', 'Relax'],
        isLive: true,
    }
];

export const MOCK_PACKAGES: Package[] = [
    { id: 'p1', name: 'Bronce', price: 4.99, tips: 100 },
    { id: 'p2', name: 'Plata', price: 19.99, tips: 500 },
    { id: 'p3', name: 'Oro', price: 34.99, tips: 1000 },
];

export const generateMockMessages = (channelId: string): Message[] => [
    {
        id: uuidv4(),
        channelId,
        userId: 'u1',
        userName: 'CryptoKing',
        userAvatar: MOCK_USERS[0].avatar,
        content: '¡Bienvenidos todos! BTC se ve bien hoy.',
        timestamp: subMinutes(new Date(), 10),
        isTip: false,
    },
    {
        id: uuidv4(),
        channelId,
        userId: 'u2',
        userName: 'AliceWonder',
        userAvatar: MOCK_USERS[1].avatar,
        content: '¡A la luna! 🚀 Aquí hay algo de amor para el canal.',
        timestamp: subMinutes(new Date(), 8),
        isTip: true,
        tipAmount: 50,
        tipEffect: 'sparkle',
    },
    {
        id: uuidv4(),
        channelId,
        userId: 'guest_123',
        userName: 'Guest_123',
        userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest123',
        content: '¿Es esto consejo financiero? 😂',
        timestamp: subMinutes(new Date(), 5),
        isTip: false,
    },
    {
        id: uuidv4(),
        channelId,
        userId: 'u3',
        userName: 'BobBuilder',
        userAvatar: MOCK_USERS[2].avatar,
        content: '¡MENSAJE TIER ORO! ¡Gracias por los insights!',
        timestamp: subMinutes(new Date(), 2),
        isTip: true,
        tipAmount: 500,
        tipEffect: 'gold',
    }
];
