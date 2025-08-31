import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import ResultsDisplay from './ResultsDisplay';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  results?: any[];
}

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  isLoading: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage, isLoading }) => {
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    onSendMessage(inputValue.trim());
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('de-DE', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const exampleQueries = [
    "Zeige mir alle Bilder mit Bäumen",
    "Bilder vom 20. April 2025",
    "3 zufällige Fotos aus Wien",
    "Alle Bilder mit Regenbogen",
    "Fotos aus der 'öffis' Galerie"
  ];

  return (
    <div className={`flex flex-col h-[600px] rounded-lg border ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'}`}>
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <Bot className={`mx-auto mb-4 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`} size={48} />
            <h3 className={`text-lg font-medium mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              Frag mich etwas über deine Fotos!
            </h3>
            <p className={`text-sm mb-4 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
              Ich kann dir helfen, deine Fotosammlung zu durchsuchen und zu analysieren.
            </p>
            
            <div className="space-y-2">
              <p className={`text-xs font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                Beispiele:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {exampleQueries.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(query)}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      theme === 'light'
                        ? 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.type === 'ai' && (
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${theme === 'light' ? 'bg-blue-100' : 'bg-blue-900'}`}>
                <Bot className={`${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} size={16} />
              </div>
            )}
            
            <div className={`max-w-[80%] ${message.type === 'user' ? 'order-1' : ''}`}>
              <div
                className={`px-4 py-2 rounded-lg ${
                  message.type === 'user'
                    ? theme === 'light'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : theme === 'light'
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-gray-800 text-gray-100'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
              
              {/* Show results if this is an AI message with results */}
              {message.type === 'ai' && message.results && message.results.length > 0 && (
                <div className="mt-3">
                  <ResultsDisplay images={message.results} message="" />
                </div>
              )}
              <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                {formatTime(message.timestamp)}
              </p>
            </div>

            {message.type === 'user' && (
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
                <User className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} size={16} />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${theme === 'light' ? 'bg-blue-100' : 'bg-blue-900'}`}>
              <Bot className={`${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} size={16} />
            </div>
            <div className={`px-4 py-2 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
              <div className="flex items-center gap-2">
                <Loader2 className={`animate-spin ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} size={16} />
                <span className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  Analysiere deine Anfrage...
                </span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={`border-t p-4 ${theme === 'light' ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Frag mich etwas über deine Fotos..."
            className={`flex-1 px-4 py-2 rounded-lg border ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-black focus:border-blue-500'
                : 'bg-gray-700 border-gray-600 text-white focus:border-blue-400'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              theme === 'light'
                ? 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white'
                : 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white'
            } disabled:cursor-not-allowed`}
          >
            <Send size={18} />
          </button>
        </form>
        
        <p className={`text-xs mt-2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          Drücke Enter zum Senden, Shift+Enter für neue Zeile
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
