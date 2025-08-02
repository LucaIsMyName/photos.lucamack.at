import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  iconToRight?: boolean;
}

const CopyButton = ({ textToCopy, className, children, ariaLabel, iconToRight = false }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const iconBaseClasses = cn("min-w-[16px] w-[16px] h-[16px] min-h-[16px]", theme === "dark" ? "text-red-300" : "text-red-600");

  return (
    <button
      onClick={handleCopy}
      className={cn(`text-xs p-1 bg-transparent flex ${iconToRight ? `flex-row-reverse` : ""} items-center gap-2`, className)}
      aria-label={ariaLabel || "Kopieren"}>
      {isCopied ? (
        <Check
          size={16}
          strokeWidth={2}
          className={iconBaseClasses}
        />
      ) : (
        <Copy
          className={iconBaseClasses}
          size={16}
        />
      )}
      <span>{children}</span>
    </button>
  );
};

export default CopyButton;
