import { useState } from "react";
import { NavLink } from "react-router-dom";
import { galleries } from "../galleries";
import { pages } from "../pages";
import type { Gallery, Page } from "../types";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon, ImageIcon } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinkClasses = (isActive: boolean) => `block py-1 px-4 text-left text-base ${isActive ? "font-bold" : "font-normal"}`;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navContent = (
    <nav className={`flex-grow overflow-y-auto ${theme === "light" ? "bg-white" : "bg-black"}`}>
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
  );

  const themeToggle = (
    <div className="p-2">
      <button
        onClick={toggleTheme}
        className="w-full flex items-center justify-start p-2"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <header className={`md:hidden  pt-4 px-4 flex justify-between items-center sticky top-0 z-10 ${theme === "light" ? "bg-white text-black" : "dark bg-black text-white "}`}>
        <NavLink
          to="/"
          className="text-md  font-bold ">
          <ImageIcon size={24} />
        </NavLink>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-0 ${theme === "light" ? "" : ""}`}
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
        <div className={`md:hidden fixed inset-0 z-50 flex flex-col ${theme === "light" ? "bg-white " : "dark bg-black "}`}>
          <div className={`flex justify-between items-center  ${theme === "light" ? "bg-white" : ""}`}>
            <NavLink
              to="/"
              className="px-4 pt-4 text-md"
              onClick={handleLinkClick}>
              <ImageIcon size={24} />
            </NavLink>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 pt-4 ${theme === "light" ? "" : ""}`}
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
          <div className="pt-4">{navContent}</div>
          <div className="mt-4">
            {pages.map((page: Page) => (
              <NavLink
                key={page.slug}
                to={`/page/${page.slug}`}
                className={({ isActive }) => navLinkClasses(isActive)}
                onClick={handleLinkClick}
              >
                {page.title}
              </NavLink>
            ))}
            <NavLink
              to="/map"
              className={({ isActive }) => navLinkClasses(isActive)}
              onClick={handleLinkClick}
            >
              Map
            </NavLink>
          </div>
          {themeToggle}
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex mt-4 md:flex-col md:w-64 lg:w-80 flex-shrink-0`}>
        <div className="">
          <NavLink
            to="/"
            className={({ isActive }) => navLinkClasses(isActive) + ' flex items-center gap-2'}
            end>
            {/** 3 different icons in a row */}
            <ImageIcon size={24} />
          </NavLink>
        </div>
        {navContent}
        <div className="mt-4">
          {pages.map((page: Page) => (
            <NavLink
              key={page.slug}
              to={`/page/${page.slug}`}
              className={({ isActive }) => navLinkClasses(isActive)}
              onClick={handleLinkClick}
            >
              {page.title}
            </NavLink>
          ))}
          <NavLink
            to="/map"
            className={({ isActive }) => navLinkClasses(isActive)}
            onClick={handleLinkClick}
          >
            Map
          </NavLink>
        </div>
        {themeToggle}
      </aside>
    </>
  );
};

export default Navigation;
