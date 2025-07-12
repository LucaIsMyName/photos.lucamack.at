import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { galleries } from "../galleries";
import { pages } from "../pages";
import type { Gallery, Page } from "../types";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon, ImageIcon, ChevronUp, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinkClasses = (isActive: boolean, isSmall = false) => `block py-1 px-4 text-left ${isSmall ? "text-xs" : "text-base"} truncate ${isActive ? `${theme === "light" ? "text-red-600" : "text-red-300"}` : "font-normal"}`;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = (direction: "up" | "down") => {
    const navElement = navRef.current;
    if (navElement) {
      const scrollAmount = navElement.clientHeight * 0.8;
      navElement.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      const navElement = navRef.current;
      if (navElement) {
        const { scrollTop, scrollHeight, clientHeight } = navElement;
        // A buffer of 1px is added to account for potential subpixel rendering issues
        const isAtTop = scrollTop <= 0;
        const isAtBottom = scrollTop >= scrollHeight - clientHeight - 1;
        setShowTopGradient(!isAtTop);
        setShowBottomGradient(!isAtBottom);
      }
    };

    const navElement = navRef.current;
    if (navElement) {
      checkScroll();
      navElement.addEventListener("scroll", checkScroll);
      const resizeObserver = new ResizeObserver(checkScroll);
      resizeObserver.observe(navElement);

      return () => {
        navElement.removeEventListener("scroll", checkScroll);
        resizeObserver.unobserve(navElement);
      };
    }
  }, [galleries]);

  const themeToggle = (
    <div className="p-2">
      <button
        onClick={toggleTheme}
        className="w-full flex items-center justify-start p-2 cursor-pointer"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <header className={`md:hidden pt-4 px-4 flex justify-between items-center sticky top-0 z-10 ${theme === "light" ? "bg-white text-black" : "dark:bg-black dark:text-white"}`}>
        <NavLink
          to="/"
          className="text-md font-bold">
          <ImageIcon size={24} />
        </NavLink>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-0"
          aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-50 flex flex-col ${theme === "light" ? "bg-white" : "dark bg-black"}`}>
          <div className="flex-shrink-0 flex justify-between items-center p-4">
            <NavLink
              to="/"
              className="text-md"
              onClick={handleLinkClick}>
              <ImageIcon size={24} />
            </NavLink>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className=""
              aria-label="Close menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto pb-4 no-scrollbar">
            <nav>
              {galleries.map((gallery: Gallery) => (
                <NavLink
                  key={gallery.slug}
                  to={`/gallery/${gallery.slug}`}
                  className={({ isActive }) => navLinkClasses(isActive)}
                  onClick={handleLinkClick}>
                  {gallery.title || gallery.name}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4">
              {pages.map((page: Page) => (
                <NavLink
                  key={page.slug}
                  to={`/page/${page.slug}`}
                  className={({ isActive }) => navLinkClasses(isActive, true)}
                  onClick={handleLinkClick}>
                  {page.title}
                </NavLink>
              ))}
              <NavLink
                to="/map"
                className={({ isActive }) => navLinkClasses(isActive, true)}
                onClick={handleLinkClick}>
                Karte
              </NavLink>
              <NavLink
                to="/list"
                className={({ isActive }) => navLinkClasses(isActive, true)}
                onClick={handleLinkClick}>
                List
              </NavLink>
            </div>
            {themeToggle}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex mt-4 md:flex-col md:w-[var(--sidebar-width)] flex-shrink-0 h-[calc(100vh-1rem)]">
        <div className="flex-shrink-0">
          <NavLink
            to="/"
            className={({ isActive }) => navLinkClasses(isActive) + " flex items-center gap-2"}
            end>
            <ImageIcon size={24} />
          </NavLink>
        </div>

        <div className="relative flex-grow my-4 overflow-hidden">
          <nav
            ref={navRef}
            className="h-full overflow-y-auto no-scrollbar">
            {galleries.map((gallery: Gallery) => (
              <NavLink
                key={gallery.slug}
                to={`/gallery/${gallery.slug}`}
                className={({ isActive }) => navLinkClasses(isActive)}>
                {gallery.title || gallery.name}
              </NavLink>
            ))}
          </nav>
          {/* Top Gradient & Scroll Indicator */}
          <div className={`absolute top-0 left-0 right-0 h-8 bg-gradient-to-b ${theme === "light" ? "from-white" : "from-black"} to-transparent pointer-events-none transition-opacity duration-300 ${showTopGradient ? "opacity-100" : "opacity-0"}`}>
            <div
              onClick={() => handleScroll("up")}
              className={`absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 pointer-events-auto`}>
              <ChevronUp size={20} />
            </div>
          </div>

          {/* Bottom Gradient & Scroll Indicator */}
          <div className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t ${theme === "light" ? "from-white" : "from-black"} to-transparent pointer-events-none transition-opacity duration-300 ${showBottomGradient ? "opacity-100" : "opacity-0"}`}>
            <div
              onClick={() => handleScroll("down")}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 pointer-events-auto`}>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <NavLink
            to="/map"
            className={({ isActive }) => navLinkClasses(isActive, true)}>
            Karte
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive }) => navLinkClasses(isActive, true)}>
            List
          </NavLink>
          {pages.map((page: Page) => (
            <NavLink
              key={page.slug}
              to={`/page/${page.slug}`}
              className={({ isActive }) => navLinkClasses(isActive, true)}>
              {page.title}
            </NavLink>
          ))}
          {themeToggle}
        </div>
      </aside>
    </>
  );
};

export default Navigation;
