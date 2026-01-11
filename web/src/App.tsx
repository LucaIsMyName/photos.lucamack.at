import { Routes, Route, useLocation } from "react-router-dom";
import { useRef, lazy, Suspense, useEffect, useState } from "react";
import Navigation from "./components/layout/global/Navigation";
import { useTheme } from "./contexts/ThemeContext";
import CommandPalette from "./components/layout/global/CommandPalette";
import { useFavicon } from "./hooks/useFavicon";
import Toast from "./components/ui/Toast";
// import { scan } from "react-scan";

// scan();

// Lazy load page components for code splitting
const Home = lazy(() => import("./components/pages/Home"));
const Gallery = lazy(() => import("./components/pages/Gallery"));
const Page = lazy(() => import("./components/pages/Page"));
const AllImagesMap = lazy(() => import("./components/pages/AllImagesMap"));
const List = lazy(() => import("./components/pages/List"));
const Timeline = lazy(() => import("./components/pages/Timeline"));
const MakePostcard = lazy(() => import("./components/pages/MakePostcard"));
const Statistics = lazy(() => import("./components/pages/Statistics"));
const Filter = lazy(() => import("./components/pages/Filter"));
const Tags = lazy(() => import("./components/pages/Tags"));
const Intelligence = lazy(() => import("./components/pages/Intelligence"));
const ImageDetails = lazy(() => import("./components/pages/ImageDetails"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

function App() {
  const { theme } = useTheme();
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update favicon based on theme
  useFavicon(theme);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [location]);

  // Handle keyboard shortcut to open command palette
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // Close mobile menu when opening command palette
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
        setCommandPaletteOpen((prevState) => !prevState);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isMobileMenuOpen]);

  // Function to handle opening the command palette
  const handleOpenCommandPalette = () => {
    // Close mobile menu when opening command palette
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    setCommandPaletteOpen(true);
  };

  return (
    <div className={`bg-black font-sans overflow-hidden overflow-y-hidden overflow-x-hidden h-screen w-screen flex flex-col md:flex-row gap-0 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      <Navigation
        onOpenCommandPalette={handleOpenCommandPalette}
        setMobileMenuOpen={setIsMobileMenuOpen}
        mobileMenuOpen={isMobileMenuOpen}
      />
      <CommandPalette
        open={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        setMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main
        ref={mainRef}
        className={`max-h-screen overflow-x-hidden flex-1 overflow-y-auto ${theme === "light" ? "bg-white" : "bg-black"}`}>
        <Suspense fallback={<div className="p-4 pt-8">Laden ...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/gallery/:slug"
              element={<Gallery />}
            />
            <Route
              path="/gallery/:gallerySlug/image/:slug"
              element={<ImageDetails />}
            />
            <Route
              path="/page/:slug"
              element={<Page />}
            />
            <Route
              path="/app/map"
              element={<AllImagesMap />}
            />
            <Route
              path="/app/list"
              element={<List />}
            />
            <Route
              path="/app/timeline"
              element={<Timeline />}
            />
            <Route
              path="/app/postcard"
              element={<MakePostcard />}
            />
            <Route
              path="/app/statistics"
              element={<Statistics />}
            />
            <Route
              path="/app/filter"
              element={<Filter />}
            />
            <Route
              path="/app/tags"
              element={<Tags />}
            />
            <Route
              path="/app/intelligence"
              element={<Intelligence />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
        <Toast />
      </main>
    </div>
  );
}

export default App;
