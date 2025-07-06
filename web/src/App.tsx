import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Gallery from './components/Gallery';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`font-geist h-screen w-screen overflow-hidden flex flex-col md:flex-row gap-4 md:gap-8 ${theme === 'light' ? 'bg-gray-0 text-gray-800' : 'bg-neutral-900 text-gray-200'}`}>
      <Navigation />
      <main className={`flex-1 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery/:slug" element={<Gallery />} />
          </Routes>
      </main>
    </div>
  );
}

export default App;
