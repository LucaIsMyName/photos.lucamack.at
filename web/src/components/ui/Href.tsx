import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

interface HrefProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  onClick?: (e: any) => void;
  hasDecoration?: boolean;
  to?: string | undefined;
  asChild?: boolean;
}

const Href = ({ asChild = false, href, to, hasDecoration = true, children, onClick, className, target = "_blank", rel = "noopener noreferrer", download, ...props }: HrefProps) => {
  const { theme } = useTheme();

  const baseClasses = cn(hasDecoration ? "underline underline-offset-4 " : "", theme === "dark" ? "text-white hover:decoration-white decoration-red-300" : "text-black hover:decoration-black decoration-red-600", className);

  if (to !== undefined && href === undefined) {
    return (
      <Link
        to={to}
        rel={rel}
        onClick={onClick}
        {...props}
        className={baseClasses}>
        {children}
      </Link>
    );
  }
  if (asChild || (href === undefined && to === undefined)) {
    return (
      <div
        onClick={onClick}
        {...props}
        className={baseClasses}>
        {children}
      </div>
    );
  }
  if (href === undefined && to !== undefined) {
    return (
      <Link
        to={to}
        rel={rel}
        onClick={onClick}
        {...props}
        className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      {...props}
      className={baseClasses}>
      {children}
    </a>
  );
};

export default Href;
