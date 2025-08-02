import { Search } from "lucide-react";
import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";

interface CmdkButtonProps {
  iconToRight?: boolean;
  hasKeyboardShortcut?: boolean;
  iconSize?: number;
  className?: string;
  ariaLabel?: string;
  onOpen: () => void;
}

const CmdkButton = ({ iconToRight = false, hasKeyboardShortcut = true, iconSize = 16, className, ariaLabel, onOpen }: CmdkButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onOpen}
      className={cn(`flex items-center gap-2 px-3 py-1.5 text-sm`, `${iconToRight ? "flex-row-reverse" : ""}`, className)}
      aria-label={ariaLabel || "Suche nach Fotos, Serien, Apps und Seiten öffnen"}>
      <Search size={iconSize} />
      {hasKeyboardShortcut && (
        <kbd className={`ml-auto inline-flex select-none items-center gap-1 font-mono text-xs font-medium opacity-30 ${theme === "light" ? "" : ""}`}>
          <span className="text-[1.5em]">⌘</span>+ K
        </kbd>
      )}
    </button>
  );
};

export default CmdkButton;
