import { useState, useEffect } from 'react';
import HeicImage from './HeicImage';

const responsiveSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem = ({ src, alt }: GalleryItemProps) => {
  const [orientation, setOrientation] = useState<'landscape' | 'portrait' | 'square' | null>(null);
  const [padding, setPadding] = useState('p-4');

  useEffect(() => {
    const paddings = ['p-2', 'p-4', 'p-6', 'p-8', 'p-10', 'p-12'];
    setPadding(paddings[Math.floor(Math.random() * paddings.length)]);
  }, []);

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
        <HeicImage
          src={src}
          alt={alt}
          onImageLoad={handleImageLoad}
          srcSet={srcSet}
          sizes={sizes}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default GalleryItem;
