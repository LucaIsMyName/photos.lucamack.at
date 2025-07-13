import { useState, useRef, useEffect, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

interface HorizontalScrollerProps {
  children: ReactNode;
  className?: string;
}

const HorizontalScroller = ({ children, className = "" }: HorizontalScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);
  const { theme } = useTheme();

  const handleScroll = (direction: "left" | "right") => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollAmount = scrollElement.clientWidth * 0.8;
      scrollElement.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
        const isAtLeft = scrollLeft <= 0;
        const isAtRight = scrollLeft >= scrollWidth - clientWidth - 1;
        setShowLeftGradient(!isAtLeft);
        setShowRightGradient(!isAtRight);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      checkScroll();
      scrollElement.addEventListener("scroll", checkScroll);
      const resizeObserver = new ResizeObserver(checkScroll);
      resizeObserver.observe(scrollElement);

      return () => {
        scrollElement.removeEventListener("scroll", checkScroll);
        resizeObserver.unobserve(scrollElement);
      };
    }
  }, [children]);

  return (
    <div className={`relative flex items-center w-full`}>
      <div
        ref={scrollRef}
        className={`flex items-center  w-full overflow-x-auto no-scrollbar py-2 ${className}`}>
        {children}
      </div>

      {/* Left Gradient & Scroll Indicator */}
      <div className={`absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r ${theme === "light" ? "from-white" : "from-black"} to-transparent pointer-events-none transition-opacity duration-300 ${showLeftGradient ? "opacity-100" : "opacity-0"}`}>
        <div
          onClick={() => handleScroll("left")}
          className={`absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer ${theme === "dark" ? "text-white" : "text-black"} pointer-events-auto`}>
          <ChevronLeft size={20} />
        </div>
      </div>

      {/* Right Gradient & Scroll Indicator */}
      <div className={`absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l ${theme === "light" ? "from-white" : "from-black"} to-transparent pointer-events-none transition-opacity duration-300 ${showRightGradient ? "opacity-100" : "opacity-0"}`}>
        <div
          onClick={() => handleScroll("right")}
          className={`absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer ${theme === "dark" ? "text-white" : "text-black"} pointer-events-auto`}>
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroller;
