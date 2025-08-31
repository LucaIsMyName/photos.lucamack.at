import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ApiKeyManagerProps {
  onApiKeySet: (key: string) => void;
}

const ApiKeyManager: React.FC<ApiKeyManagerProps> = ({ onApiKeySet }) => {
  const { theme } = useTheme();
  const [apiKey, setApiKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  const handleSubmit = async () => {
    if (!apiKey.trim()) return;

    setIsValidating(true);
    
    // Basic validation - Google API keys start with AIza
    if (!apiKey.startsWith('AIza')) {
      alert('Invalid API key format. Google Vision API keys should start with "AIza"');
      setIsValidating(false);
      return;
    }

    // Store API key in localStorage
    localStorage.setItem('google-vision-api-key', apiKey.trim());
    
    setTimeout(() => {
      onApiKeySet(apiKey.trim());
      setIsValidating(false);
    }, 500);
  };

  return (
    <div className={`max-w-md mx-auto p-8 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    } border ${
      theme === 'dark' ? 'border-white' : 'border-black'
    }`}>
      <h2 className={`text-xl font-semibold mb-6 text-center ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}>
        Google Vision API Key Required
      </h2>
      
      <div className="mb-6">
        <label htmlFor="apiKey" className={`block text-sm font-medium mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          API Key
        </label>
        <input
          type="password"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Google Vision API key"
          className={`w-full px-3 py-2 border focus:outline-none ${
            theme === 'dark' 
              ? 'border-white bg-black text-white focus:border-red-500' 
              : 'border-black bg-white text-black focus:border-red-500'
          }`}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={!apiKey.trim() || isValidating}
        className={`w-full font-medium py-2 px-4 transition-colors ${
          !apiKey.trim() || isValidating
            ? theme === 'dark' ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-400'
            : theme === 'dark' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'
        }`}
      >
        {isValidating ? 'Validating...' : 'Set API Key'}
      </button>

      <div className={`mt-8 p-4 border ${
        theme === 'dark' ? 'border-white' : 'border-black'
      }`}>
        <h3 className={`text-sm font-medium mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          How to get your API key:
        </h3>
        <ol className={`text-sm space-y-1 list-decimal list-inside ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          <li>Go to <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="underline text-red-600">Google Cloud Console</a></li>
          <li>Create a new project or select an existing one</li>
          <li>Enable the "Cloud Vision API"</li>
          <li>Go to "Credentials" and create an API key</li>
          <li>Restrict the key to "Cloud Vision API" only</li>
        </ol>
        <p className={`text-xs mt-2 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Your API key is stored locally and never sent to our servers.
        </p>
      </div>
    </div>
  );
};

export default ApiKeyManager;
