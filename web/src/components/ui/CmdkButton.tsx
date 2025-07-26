import { Search } from "lucide-react";
import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";

interface CmdkButtonProps {
  iconToRight?: boolean;
  className?: string;
  ariaLabel?: string;
  onOpen: () => void;
}

const CmdkButton = ({ iconToRight = false, className, ariaLabel, onOpen }: CmdkButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onOpen}
      className={cn(`flex items-center gap-2 px-3 py-1.5 text-sm`, `${iconToRight ? "flex-row-reverse" : ""}`, className)}
      aria-label={ariaLabel || "Suche öffnen"}>
      <Search size={16} />
      <kbd className={`ml-auto font-mono hidden md:inline-flex h-4 select-none items-center gap-1 font-mono text-xs font-medium opacity-30 ${theme === "light" ? "" : ""}`}>
        <span className="text-base">⌘</span>+ K
      </kbd>
    </button>
  );
};

export default CmdkButton;
