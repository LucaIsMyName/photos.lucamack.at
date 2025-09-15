import { useEffect } from 'react';

export const useFavicon = (theme: 'light' | 'dark') => {
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    
    if (favicon) {
      const faviconPath = theme === 'light' ? '/logo-light.svg' : '/logo-dark.svg';
      favicon.href = faviconPath;
    } else {
      // Create favicon link if it doesn't exist
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/svg+xml';
      newFavicon.href = theme === 'light' ? '/logo-light.svg' : '/logo-dark.svg';
      document.head.appendChild(newFavicon);
    }
  }, [theme]);
};
