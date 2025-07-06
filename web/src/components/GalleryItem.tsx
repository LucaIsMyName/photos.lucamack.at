import { useState, useEffect } from 'react';
import Image from './Image';

const responsiveSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

interface GalleryItemProps {
  src: string;
  alt: string;
  latitude?: number | null;
  longitude?: number | null;
}

const GalleryItem = ({ src, alt, latitude, longitude }: GalleryItemProps) => {
  const [orientation, setOrientation] = useState<'landscape' | 'portrait' | 'square' | null>(null);
  const [padding, setPadding] = useState('p-4');
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    const paddings = ['p-2', 'p-4', 'p-6', 'p-8', 'p-10', 'p-12'];
    setPadding(paddings[Math.floor(Math.random() * paddings.length)]);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && latitude && longitude) {
      const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      setMapUrl(
        isAppleDevice
          ? `http://maps.apple.com/?q=${latitude},${longitude}`
          : `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
      );
    }
  }, [latitude, longitude]);

  const handleImageLoad = (dimensions: { width: number; height: number }) => {
    if (dimensions.width > dimensions.height) {
      setOrientation('landscape');
    } else if (dimensions.height > dimensions.width) {
      setOrientation('portrait');
    } else {
      setOrientation('square');
    }
  };

  const getFlexClasses = () => {
    const base = 'w-full'; // Always full-width on mobile
    if (!orientation) return `${base} md:w-1/2`; // Default to portrait to prevent layout jumps

    switch (orientation) {
      case 'landscape':
        return `${base} md:w-full`;
      case 'portrait':
      case 'square':
      default:
        return `${base} md:w-1/2`;
    }
  };

  const ext = src.substring(src.lastIndexOf('.'));
  const baseSrc = src.substring(0, src.lastIndexOf('.'));

  const srcSet = responsiveSizes
    .map(size => `${baseSrc}-${size}w${ext} ${size}w`)
    .join(', ');

  const sizes = orientation === 'landscape' ? '100vw' : '(min-width: 768px) 50vw, 100vw';

  return (
    <div className={getFlexClasses()}>
      <div className={padding}>
        {latitude && longitude ? (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={src}
              alt={alt}
              onImageLoad={handleImageLoad}
              srcSet={srcSet}
              sizes={sizes}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </a>
        ) : (
          <Image
            src={src}
            alt={alt}
            onImageLoad={handleImageLoad}
            srcSet={srcSet}
            sizes={sizes}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
