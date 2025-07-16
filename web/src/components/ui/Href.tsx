import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";

interface HrefProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  onClick?: (e: any) => void;
}

const Href = ({ href, children, onClick, className, target = "_blank", rel = "noopener noreferrer", download, ...props }: HrefProps) => {
  const { theme } = useTheme();
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      {...props}
      className={cn("underline underline-offset-4 ", theme === "dark" ? "text-white hover:text-red-600 decoration-red-600" : "text-black hover:text-red-600 decoration-red-600", className)}>
      {children}
    </a>
  );
};

export default Href;
