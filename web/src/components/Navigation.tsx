import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { galleries } from '../galleries';
import type { Gallery } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinkClasses = (isActive: boolean) =>
    `block py-1 px-4 text-left text-base ${isActive ? 'font-bold' : 'font-normal'}`;


  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navContent = (
    <nav className="flex-grow overflow-y-auto">
      {galleries.map((gallery: Gallery) => (
        <NavLink
          key={gallery.slug}
          to={`/gallery/${gallery.slug}`}
          className={({ isActive }) => navLinkClasses(isActive)}
          onClick={handleLinkClick}
        >
          {gallery.title || gallery.name}
        </NavLink>
      ))}
    </nav>
  );

  const themeToggle = (
    <div className="p-4">
      <button 
        onClick={toggleTheme} 
        className="w-full flex items-center justify-start p-2"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <header className={`md:hidden p-4 flex justify-between items-center sticky top-0 z-10 ${theme === 'light' ? 'bg-white text-black border-b-4 border-black' : 'dark bg-black text-white border-b-4 border-gray-800'}`}>
        <NavLink to="/" className="text-3xl font-bold">
          All
        </NavLink>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 ${theme === 'light' ? 'border-2 border-black' : 'border-2 border-white'}`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-50 flex flex-col ${theme === 'light' ? 'bg-white border-8 border-black' : 'dark bg-black border-8 border-gray-800'}`}>
          <div className={`flex justify-between items-center  ${theme === 'light' ? 'border-b-4 border-black' : 'border-b-4 border-gray-800'}`}>
            <NavLink to="/" className="text-3xl font-bold" onClick={handleLinkClick}>
              All
            </NavLink>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-2 ${theme === 'light' ? 'border-2 border-black' : 'border-2 border-white'}`}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {navContent}
          {themeToggle}
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex mt-4 md:flex-col md:w-64 lg:w-80 flex-shrink-0`}>
                <div className="">
          <NavLink to="/" className={({ isActive }) => navLinkClasses(isActive)} end>
            Alle
          </NavLink>
          <hr className='ml-4 my-4'></hr>
        </div>
        {navContent}
        {themeToggle}
      </aside>
    </>
  );
};

export default Navigation;
