import { Routes, Route, useLocation } from "react-router-dom";
import { useRef } from "react";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import PageComponent from "./components/pages/PageComponent";
import MapPage from "./components/pages/Map";
import ListPage from "./components/pages/List";
import TimelinePage from "./components/pages/Timeline";
import MakePostcardPage from "./components/pages/MakePostcardPage";
import StatisticsPage from "./components/pages/StatisticsPage";
import { useTheme } from "./contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const { theme } = useTheme();
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  const onExitComplete = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  };

  return (
    <div className={`bg-black font-geist h-screen w-screen flex flex-col md:flex-row gap-4 md:gap-8 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      <Navigation />
      <main
        ref={mainRef}
        className={`flex-1 overflow-y-auto ${theme === "light" ? "bg-white" : "bg-black"}`}>
        <AnimatePresence
          mode="wait"
          onExitComplete={onExitComplete}>
          <Routes
            location={location}
            key={location.pathname}>
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
              path="/map"
              element={<MapPage />}
            />
            <Route
              path="/list"
              element={<ListPage />}
            />
            <Route
              path="/timeline"
              element={<TimelinePage />}
            />
            <Route
              path="/postcard"
              element={<MakePostcardPage />}
            />
            <Route
              path="/statistics"
              element={<StatisticsPage />}
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
