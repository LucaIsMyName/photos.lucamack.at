import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { theme } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}>
      <defs>
        <clipPath id="logo-clip">
          <rect
            width="18"
            height="18"
            x="3"
            y="3"
            rx="2"
            ry="2"
          />
        </clipPath>
      </defs>

      <g clipPath="url(#logo-clip)">
        {/* Sky */}
        <rect
          width="18"
          height="18"
          x="3"
          y="3"
          rx="2"
          ry="2"
          className={theme === "light" ? "fill-sky-300" : "fill-sky-700"}
        />

        {/* Hills */}
        <path
          d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21h15V15z"
          className={theme === "light" ? "fill-green-600" : "fill-green-500"}
        />

        {/* Sun / Moon */}
        <circle
          // smaller or bigger depending on sun(big) or moon(small)
          r={theme === "light" ? 3 : 2.5}
          cx="9"
          cy="9"
          className={theme === "light" ? "fill-orange-200" : "fill-white"}
        />
      </g>

      {/* Stroke for the outer border */}
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        ry="2"
        fill="none"
        stroke={theme === "light" ? "black" : "white"}
        strokeWidth="1"
      />
    </svg>
  );
};

export default Logo;
