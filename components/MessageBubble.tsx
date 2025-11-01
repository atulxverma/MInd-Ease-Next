import { format } from 'date-fns';
import { Bot, User } from 'lucide-react';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
  'data-testid'?: string;
}

export default function MessageBubble({ message, isUser, timestamp, 'data-testid': testId }: MessageBubbleProps) {
  return (
    <div
      className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
      data-testid={testId}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-teal-600' : 'bg-gray-300'
      }`}>
        {isUser ? (
          <User className="h-5 w-5 text-white" aria-hidden="true" />
        ) : (
          <Bot className="h-5 w-5 text-gray-700" aria-hidden="true" />
        )}
      </div>

      <div className={`flex-1 max-w-xs sm:max-w-md ${isUser ? 'flex flex-col items-end' : ''}`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-teal-600 text-white rounded-tr-sm'
            : 'bg-gray-100 text-gray-900 rounded-tl-sm'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1 px-1">
          {format(timestamp, 'h:mm a')}
        </span>
      </div>
    </div>
  );
}
