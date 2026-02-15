
import { format } from 'date-fns';
import { Sparkles, Zap, Star, MessageSquare } from 'lucide-react';
import type { Message } from '../types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { parseIRCMessage } from '../utils/ircParser';

interface MessageBubbleProps {
    message: Message;
    isOwnMessage: boolean;
}

export const MessageBubble = ({ message, isOwnMessage }: MessageBubbleProps) => {
    const isTip = message.isTip && message.tipAmount;

    // Parse IRC Content
    const ircData = parseIRCMessage(message.content, message.userName);
    const displayContent = ircData.isIRC ? ircData.message : message.content;
    const displayName = ircData.isIRC ? ircData.nick : message.userName;
    const isIRC = ircData.isIRC;

    // Dynamic styles based on tip amount/effect
    const getTipStyles = () => {
        if (!isTip) return '';

        switch (message.tipEffect) {
            case 'gold':
                return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-400 shadow-lg shadow-yellow-100/50';
            case 'neon':
                return 'bg-gray-900 text-white border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]';
            case 'sparkle':
                return 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-indigo-300';
            default:
                return 'bg-yellow-50 border border-yellow-200';
        }
    };

    const TipIcon = () => {
        switch (message.tipEffect) {
            case 'gold': return <Star className="text-yellow-500 fill-yellow-500" size={16} />;
            case 'neon': return <Zap className="text-purple-400 fill-purple-400" size={16} />;
            default: return <Sparkles className="text-indigo-500" size={16} />;
        }
    };

    return (
        <div className={clsx("flex gap-3 mb-4 max-w-[80%]", isOwnMessage ? "ml-auto flex-row-reverse" : "")}>
            {!isIRC && (
                <img
                    src={message.userAvatar}
                    alt={displayName}
                    className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"
                />
            )}

            {isIRC && (
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400">
                    <MessageSquare size={14} />
                </div>
            )}

            <div className="flex flex-col">
                <div className={clsx("flex items-center gap-2 mb-1", isOwnMessage ? "justify-end" : "")}>
                    <span className={clsx("text-xs font-bold", isIRC ? "text-gray-500" : "text-gray-600")}>
                        {displayName}
                    </span>
                    <span className="text-[10px] text-gray-400">{format(message.timestamp, 'HH:mm')}</span>
                </div>

                <div className={twMerge(
                    "px-4 py-2 rounded-2xl relative",
                    isOwnMessage
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none",
                    isIRC ? "bg-gray-50 text-gray-600 border-0" : "",
                    getTipStyles()
                )}>
                    {isTip && (
                        <div className="flex items-center gap-1 mb-1 font-bold text-xs uppercase tracking-wider opacity-90 border-b border-black/10 pb-1">
                            <TipIcon />
                            <span>{message.tipAmount} Tips</span>
                        </div>
                    )}
                    <p className="whitespace-pre-wrap break-words">{displayContent}</p>
                </div>
            </div>
        </div>
    );
};
