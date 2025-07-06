import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Gallery from './components/Gallery';
import { useTheme } from './contexts/ThemeContext';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div className={`bg-black font-geist h-screen w-screen flex flex-col md:flex-row gap-4 md:gap-8 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-black text-gray-200'}`}>
      <Navigation />
      <main className={`flex-1 overflow-y-auto ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery/:slug" element={<Gallery />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
