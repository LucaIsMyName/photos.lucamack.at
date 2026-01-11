import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ResultsDisplay from './ResultsDisplay';

interface Message {
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  results?: any[];
}

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  apiKey: string;
  onApiKeyChange: (key: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage, isLoading, apiKey, onApiKeyChange }) => {
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


  const exampleQueries = [
    "Show me photos from last week",
    "I want to see pictures with trees and buildings", 
    "Can you find 5 random images with people?",
    "What photos do I have from Vienna?",
    "Show me beautiful landscape photos from this year"
  ];

  const handleSuggestionClick = (query: string) => {
    setInputValue(query);
    onSendMessage(query);
  };

  return (
    <div className={`flex flex-col h-full w-full ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* API Key Management Button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => {
            const newKey = prompt('Enter new Google Vision API key:', apiKey);
            if (newKey !== null) {
              if (newKey.trim()) {
                localStorage.setItem('google-vision-api-key', newKey.trim());
                onApiKeyChange(newKey.trim());
              } else {
                localStorage.removeItem('google-vision-api-key');
                onApiKeyChange('');
              }
            }
          }}
          aria-label="Change API Key"
          className={`px-3 py-1 text-xs border ${
            theme === 'dark' 
              ? 'border-white text-white hover:bg-white hover:text-black' 
              : 'border-black text-black hover:bg-black hover:text-white'
          } transition-colors`}
        >
          Change API Key
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={messagesEndRef}>
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
              {exampleQueries.map((query, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(query)}
                  aria-label={`Use example query: ${query}`}
                  className={`p-3 text-sm text-left border transition-colors ${
                    theme === 'dark'
                      ? 'border-white text-white hover:bg-white hover:text-black'
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 ${
              message.type === 'user'
                ? theme === 'dark' ? 'bg-red-600 text-white' : 'bg-red-600 text-white'
                : theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              <p className="text-sm">{message.content}</p>
              {message.results && message.results.length > 0 && (
                <div className="mt-3">
                  <ResultsDisplay images={message.results} message="" />
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={`border-t p-4 ${
        theme === 'dark' ? 'border-white' : 'border-black'
      }`}>
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            placeholder="Ask about your photos..."
            disabled={isLoading}
            className={`flex-1 px-3 py-2 border focus:outline-none ${
              theme === 'dark'
                ? 'border-white bg-black text-white focus:border-red-500'
                : 'border-black bg-white text-black focus:border-red-500'
            }`}
          />
          <button
            onClick={(e) => handleSubmit(e)}
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
            className={`px-4 py-2 transition-colors ${
              !inputValue.trim() || isLoading
                ? theme === 'dark' ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-400'
                : theme === 'dark' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
