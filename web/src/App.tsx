import { Routes, Route, useLocation } from "react-router-dom";
import { useRef, lazy, Suspense, useEffect } from "react";
import Navigation from "./components/layout/Navigation";
import { useTheme } from "./contexts/ThemeContext";

// Lazy load page components for code splitting
const Home = lazy(() => import("./components/pages/HomePage"));
const Gallery = lazy(() => import("./components/pages/GalleryPage"));
const PageComponent = lazy(() => import("./components/pages/PageComponent"));
const MapPage = lazy(() => import("./components/pages/MapPage"));
const ListPage = lazy(() => import("./components/pages/ListPage"));
const TimelinePage = lazy(() => import("./components/pages/TimelinePage"));
const MakePostcardPage = lazy(() => import("./components/pages/MakePostcardPage"));
const StatisticsPage = lazy(() => import("./components/pages/StatisticsPage"));
const ImagePage = lazy(() => import("./components/pages/ImagePage"));
const NotFound = lazy(() => import("./components/pages/NotFoundPage"));

function App() {
  const { theme } = useTheme();
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [location]);

  return (
    <div className={`bg-black font-geist h-screen w-screen flex flex-col md:flex-row gap-4 md:gap-8 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      <Navigation />
      <main
        ref={mainRef}
        className={`flex-1 overflow-y-auto ${theme === "light" ? "bg-white" : "bg-black"}`}>
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
              path="/page/:slug"
              element={<PageComponent />}
            />
            <Route
              path="/app/map"
              element={<MapPage />}
            />
            <Route
              path="/app/list"
              element={<ListPage />}
            />
            <Route
              path="/app/timeline"
              element={<TimelinePage />}
            />
            <Route
              path="/app/postcard"
              element={<MakePostcardPage />}
            />
            <Route
              path="/app/statistics"
              element={<StatisticsPage />}
            />
            <Route
              path="/image/:imageName"
              element={<ImagePage />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
