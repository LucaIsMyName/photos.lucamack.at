import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

const CopyButton = ({ textToCopy, className }: CopyButtonProps) => {
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

  return (
    <button
      onClick={handleCopy}
      className={cn("p-1 bg-transparent", className)}
      aria-label="Copy to clipboard">
      {isCopied ? <Check size={16} strokeWidth={2} className={cn(theme === "dark" ? "text-red-300" : "text-red-600")} /> : <Copy className={cn(theme === "dark" ? "text-red-300" : "text-red-600")} size={16} />}
    </button>
  );
};

export default CopyButton;
