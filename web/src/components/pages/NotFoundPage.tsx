import { Link } from "react-router-dom";
import { CONFIG } from "../../config";
import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";

const NotFound = () => {
  const { theme } = useTheme();
  return (
    <div className="py-4 md:py-8 px-4 md:px-0 flex flex-col items-start justify-start text-center">
      <title>404 | Luca Mack</title>
      <meta
        name="description"
        content="Seite nicht gefunden"
      />
      <meta
        name="title"
        content="404 | Luca Mack"
      />
      <div className="flex flex-col items-start">
        <h1 className={cn(`${CONFIG.theme.headline.one}`, theme === "dark" ? "text-white" : "text-black")}>404</h1>
        <p className="text-lg mt-4">Seite nicht gefunden</p>
        <Link
          to="/"
          className="mt-4 px-4 py-2 text-base  border">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
