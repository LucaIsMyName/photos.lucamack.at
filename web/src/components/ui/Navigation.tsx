import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { galleries } from "../../galleries";
import { pages } from "../../pages";
import type { Gallery, Page } from "../../types";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon, X, Menu, ChevronUp, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import CmdkButton from "./CmdkButton";

interface NavigationProps {
  onOpenCommandPalette?: () => void;
  setMobileMenuOpen?: (isOpen: boolean) => void;
  mobileMenuOpen?: boolean;
}

const Navigation = ({ onOpenCommandPalette, setMobileMenuOpen: externalSetMobileMenuOpen, mobileMenuOpen }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpenInternal] = useState(false);
  
  // Use this function to update the mobile menu state
  const setIsMobileMenuOpen = (isOpen: boolean) => {
    setIsMobileMenuOpenInternal(isOpen);
    if (externalSetMobileMenuOpen) {
      externalSetMobileMenuOpen(isOpen);
    }
  };
  
  // Sync with external mobile menu state if provided
  useEffect(() => {
    if (mobileMenuOpen !== undefined) {
      setIsMobileMenuOpenInternal(mobileMenuOpen);
    }
  }, [mobileMenuOpen]);
  const navRef = useRef<HTMLElement>(null);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinkClasses = (isActive: boolean, isSmall = false, hasSpacingX = true) => `block w-min py-1 ${hasSpacingX ? "px-4" : ""}  text-left ${isSmall ? "text-xs" : "text-base"} truncate ${isActive ? `underline underline-offset-4 ${theme === "light" ? "text-red-600 decoration-black" : "text-red-300 decoration-white"}` : "font-normal"}`;

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
    <div className="flex items-center justify-between gap-2">
      {onOpenCommandPalette && (
        <div className="p-1">
          <CmdkButton onOpen={onOpenCommandPalette} />
        </div>
      )}
      <div className="p-2">
        <button
          onClick={toggleTheme}
          className="cursor-pointer flex items-center justify-start p-2"
          aria-label={`Farmodus auf ${theme === "light" ? "Dunkel" : "Hell"} wechseln`}>
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <header className={`md:hidden py-4 px-4 flex justify-between items-center sticky top-0 z-10 ${theme === "light" ? "bg-white text-black" : "dark:bg-black dark:text-white"}`}>
        <NavLink
          to="/"
          title="Startseite"
          className="text-md font-bold">
          <Logo
            className=""
            width={24}
            height={24}
          />
        </NavLink>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer p-0"
          aria-label="Navigation öffnen">
          <Menu
            size={24}
            strokeWidth={1.5}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-[1000000] flex flex-col ${theme === "light" ? "bg-white" : "dark bg-black"}`}>
          <div className="flex-shrink-0 flex justify-between items-center p-4">
            <NavLink
              to="/"
              title="Startseite"
              className="text-md"
              onClick={handleLinkClick}>
              <Logo
                width={24}
                height={24}
              />
            </NavLink>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer p-0"
              aria-label="Navigation schließen">
              <X
                size={24}
                strokeWidth={1.5}
              />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto pb-4 no-scrollbar">
            <nav>
              {galleries.map((gallery: Gallery) => (
                <NavLink
                  key={gallery.slug}
                  title={`Fotoserie: ${gallery.title || gallery.name}`}
                  to={`/gallery/${gallery.slug}`}
                  className={({ isActive }) => navLinkClasses(isActive)}
                  onClick={handleLinkClick}>
                  {gallery.title || gallery.name}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4">
              <section className="flex gap-0 mb-4 px-4 gap-4">
                <NavLink
                  to="/app/map"
                  title="Alle Fotos auf einer Karte anzeigen"
                  className={({ isActive }) => navLinkClasses(isActive, false, false)}
                  onClick={handleLinkClick}>
                  Karte
                </NavLink>

                <NavLink
                  to="/app/list"
                  title="Alle Fotos als Liste anzeigen"
                  className={({ isActive }) => navLinkClasses(isActive, false, false)}
                  onClick={handleLinkClick}>
                  Liste
                </NavLink>

                <NavLink
                  to="/app/timeline"
                  title="Alle Fotos als Timeline anzeigen"
                  className={({ isActive }) => navLinkClasses(isActive, false, false)}
                  onClick={handleLinkClick}>
                  Timeline
                </NavLink>
              </section>
              {pages.map((page: Page) => (
                <NavLink
                  key={page.slug}
                  to={`/page/${page.slug}`}
                  title={page.title}
                  className={({ isActive }) => navLinkClasses(isActive, true)}
                  onClick={handleLinkClick}>
                  {page.title}
                </NavLink>
              ))}
            </div>
            <div className=" mr-2">{themeToggle}</div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex pt-4 md:flex-col md:w-[var(--sidebar-width)] flex-shrink-0 h-[calc(100vh)]`}>
        <div className="flex-shrink-0">
          <NavLink
            to="/"
            title="Startseite"
            className={({ isActive }) => navLinkClasses(isActive) + " flex items-center gap-2"}
            end>
            <Logo
              width={24}
              height={24}
            />
          </NavLink>
        </div>

        <div className="relative flex-grow my-4 overflow-hidden">
          <nav
            ref={navRef}
            className="h-full overflow-y-auto no-scrollbar">
            {galleries.map((gallery: Gallery) => (
              <NavLink
                title={`Fotoserie: ${gallery.title || gallery.name}`}
                key={gallery.slug}
                to={`/gallery/${gallery.slug}`}
                className={({ isActive }) => navLinkClasses(isActive)}>
                {gallery.title || gallery.name}
              </NavLink>
            ))}
          </nav>
          {/* Top Gradient & Scroll Indicator */}
          <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${theme === "light" ? "from-white" : "from-black"} to-transparent pointer-events-none transition-opacity duration-300 ${showTopGradient ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div
              onClick={() => handleScroll("up")}
              className={`absolute top-0 left-7 -translate-x-1/2 cursor-pointer ${showTopGradient ? "pointer-events-auto" : "pointer-events-none"}`}>
              <ChevronUp size={20} />
            </div>
          </div>

          {/* Bottom Gradient & Scroll Indicator */}
          <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${theme === "light" ? "from-white" : "from-black"} to-transparent pointer-events-none transition-opacity duration-300 ${showBottomGradient ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div
              onClick={() => handleScroll("down")}
              className={`absolute bottom-0 left-7 -translate-x-1/2 cursor-pointer ${showBottomGradient ? "pointer-events-auto" : "pointer-events-none"}`}>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <section className="flex gap-4 px-4 mb-2 sm:mb-6">
            <NavLink
              to="/app/map"
              title="Alle Fotos auf einer Karte anzeigen"
              className={({ isActive }) => navLinkClasses(isActive, true, false)}
              onClick={handleLinkClick}>
              Karte
            </NavLink>

            <NavLink
              to="/app/list"
              title="Alle Fotos als Such- und Filterbare Liste"
              className={({ isActive }) => navLinkClasses(isActive, true, false)}
              onClick={handleLinkClick}>
              Liste
            </NavLink>

            <NavLink
              to="/app/timeline"
              title="Alle Fotos als Timeline anzeigen"
              className={({ isActive }) => navLinkClasses(isActive, true, false)}
              onClick={handleLinkClick}>
              Timeline
            </NavLink>
          </section>
          {pages.map((page: Page) => (
            <NavLink
              key={page.slug}
              to={`/page/${page.slug}`}
              title={page.title}
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
