import { X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast, type Toast as ToastType } from '../../contexts/ToastContext';
import { cn } from '../../utils/cn';

interface ToastProps {
  toast: ToastType;
}

const ToastItem = ({ toast }: ToastProps) => {
  const { theme } = useTheme();
  const { removeToast } = useToast();

  const getToastStyles = () => {
    const baseStyles = 'border p-4 rounded-sm shadow-lg flex items-center justify-between gap-4 min-w-[300px] max-w-[500px]';
    
    if (toast.type === 'error') {
      return cn(
        baseStyles,
        theme === 'dark'
          ? 'bg-red-900/90 border-red-700 text-white'
          : 'bg-red-50 border-red-600 text-red-900'
      );
    }
    
    if (toast.type === 'success') {
      return cn(
        baseStyles,
        theme === 'dark'
          ? 'bg-green-900/90 border-green-700 text-white'
          : 'bg-green-50 border-green-600 text-green-900'
      );
    }
    
    // info (default)
    return cn(
      baseStyles,
      theme === 'dark'
        ? 'bg-white text-black border-white'
        : 'bg-black text-white border-black'
    );
  };

  return (
    <div className={getToastStyles()}>
      <p className="text-sm flex-1">{toast.message}</p>
      <button
        onClick={() => removeToast(toast.id)}
        className={cn(
          'flex-shrink-0 p-1 rounded-sm hover:opacity-70 transition-opacity',
          theme === 'dark' ? 'text-white' : 'text-black'
        )}
        aria-label="Dismiss notification"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default function Toast() {
  const { toasts } = useToast();
  const { theme } = useTheme();

  if (toasts.length === 0) return null;

  return (
    <div
      className={cn(
        'fixed top-4 right-4 z-[999999] flex flex-col gap-2',
        theme === 'dark' ? 'bg-transparent' : 'bg-transparent'
      )}
      role="region"
      aria-label="Notifications"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}