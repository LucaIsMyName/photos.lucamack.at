import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import SeoHead from '../ui/SeoHead';
import ApiKeyManager from '../intelligence/ApiKeyManager';
import ChatInterface from '../intelligence/ChatInterface';
import { QueryProcessor } from '../../services/queryProcessor';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  results?: any[];
}

const Intelligence: React.FC = () => {
  const { theme } = useTheme();
  const [apiKey, setApiKey] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load API key from localStorage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('google-vision-api-key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const handleApiKeyChange = (key: string) => {
    setApiKey(key);
    if (key) {
      localStorage.setItem('google-vision-api-key', key);
    } else {
      localStorage.removeItem('google-vision-api-key');
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!apiKey) {
      alert('Please enter your Google Vision API key first.');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const queryProcessor = new QueryProcessor(apiKey);
      const result = await queryProcessor.processQuery(content);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: result.message,
        timestamp: new Date(),
        results: result.items,
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error processing message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Sorry, there was an error processing your request. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Intelligence - AI Photo Assistant"
        description="Chat with AI about your photo collection. Ask questions about images, locations, dates, and content."
      />
      
      <div className={`min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Photo Intelligence
            </h1>
            <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Chat with AI about your photo collection. Ask questions about images, locations, dates, and content.
            </p>
          </div>

          {!apiKey ? (
            <ApiKeyManager onApiKeyChange={handleApiKeyChange} />
          ) : (
            <div className="space-y-6">
              <div className={`p-4 rounded-lg ${theme === 'light' ? 'bg-green-50 border border-green-200' : 'bg-green-900/20 border border-green-800'}`}>
                <p className={`text-sm ${theme === 'light' ? 'text-green-700' : 'text-green-300'}`}>
                  ✓ API Key configured. You can now chat with AI about your photos.
                  <button
                    onClick={() => handleApiKeyChange('')}
                    className={`ml-2 underline ${theme === 'light' ? 'text-green-600 hover:text-green-800' : 'text-green-400 hover:text-green-200'}`}
                  >
                    Change key
                  </button>
                </p>
              </div>

              <ChatInterface
                messages={messages}
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Intelligence;
