import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Eye, EyeOff, Key, ExternalLink } from 'lucide-react';

interface ApiKeyManagerProps {
  onApiKeyChange: (key: string) => void;
}

const ApiKeyManager: React.FC<ApiKeyManagerProps> = ({ onApiKeyChange }) => {
  const { theme } = useTheme();
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) return;

    setIsValidating(true);
    
    // Basic validation - Google API keys start with AIza
    if (!apiKey.startsWith('AIza')) {
      alert('Invalid API key format. Google Vision API keys should start with "AIza"');
      setIsValidating(false);
      return;
    }

    // TODO: Add actual API key validation by making a test request
    setTimeout(() => {
      onApiKeyChange(apiKey.trim());
      setIsValidating(false);
    }, 500);
  };

  return (
    <div className={`max-w-2xl mx-auto p-6 rounded-lg border ${theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-900 border-gray-700'}`}>
      <div className="text-center mb-6">
        <Key className={`mx-auto mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} size={48} />
        <h2 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          Google Vision API Key Required
        </h2>
        <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          To analyze your photos with AI, please enter your Google Cloud Vision API key.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            API Key
          </label>
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className={`w-full px-4 py-3 pr-12 rounded-lg border ${
                theme === 'light' 
                  ? 'bg-white border-gray-300 text-black focus:border-blue-500' 
                  : 'bg-gray-800 border-gray-600 text-white focus:border-blue-400'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              required
            />
            <button
              type="button"
              onClick={() => setShowKey(!showKey)}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                theme === 'light' ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {showKey ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!apiKey.trim() || isValidating}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            theme === 'light'
              ? 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white'
              : 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white'
          } disabled:cursor-not-allowed`}
        >
          {isValidating ? 'Validating...' : 'Save API Key'}
        </button>
      </form>

      <div className={`mt-6 p-4 rounded-lg ${theme === 'light' ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-800'}`}>
        <h3 className={`font-medium mb-2 ${theme === 'light' ? 'text-blue-800' : 'text-blue-300'}`}>
          Don't have an API key?
        </h3>
        <p className={`text-sm mb-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`}>
          Get your free Google Cloud Vision API key with 1,000 free requests per month:
        </p>
        <ol className={`text-sm space-y-1 mb-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`}>
          <li>1. Go to Google Cloud Console</li>
          <li>2. Create a new project</li>
          <li>3. Enable Vision API</li>
          <li>4. Create credentials → API Key</li>
          <li>5. Restrict key to Vision API only</li>
        </ol>
        <a
          href="https://console.cloud.google.com/apis/credentials"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-medium ${
            theme === 'light' ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-blue-200'
          }`}
        >
          Open Google Cloud Console
          <ExternalLink size={14} />
        </a>
      </div>

      <div className={`mt-4 p-3 rounded-lg ${theme === 'light' ? 'bg-yellow-50 border border-yellow-200' : 'bg-yellow-900/20 border border-yellow-800'}`}>
        <p className={`text-xs ${theme === 'light' ? 'text-yellow-700' : 'text-yellow-400'}`}>
          🔒 Your API key is stored locally in your browser and never sent to our servers.
        </p>
      </div>
    </div>
  );
};

export default ApiKeyManager;
