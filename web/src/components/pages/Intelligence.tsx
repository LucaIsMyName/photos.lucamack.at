import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ApiKeyManager from '../intelligence/ApiKeyManager';
import ChatInterface from '../intelligence/ChatInterface';
import { QueryProcessor } from '../../services/queryProcessor';
import SeoHead from '../ui/SeoHead';
import { CONFIG } from '../../config';

interface Message {
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
        type: 'ai',
        content: 'Sorry, there was an error processing your request. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-full h-full md:h-screen relative overflow-hidden ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <SeoHead
        title={`AI Photo Intelligence | ${CONFIG.meta.title}`}
        description="AI-powered photo search and analysis"
      />
      
      {!apiKey ? (
        <div className="flex items-center justify-center h-full">
          <ApiKeyManager onApiKeySet={setApiKey} />
        </div>
      ) : (
        <ChatInterface 
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          apiKey={apiKey}
          onApiKeyChange={handleApiKeyChange}
        />
      )}
    </div>
  );
};

export default Intelligence;
