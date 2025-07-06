import { useState, useEffect } from 'react';
import heic2any from 'heic2any';

interface HeicImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const HeicImage = ({ src, alt, className, style }: HeicImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let objectUrl: string | null = null;

    const convertImage = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const conversionResult = await heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 0.9,
        });
        
        const convertedBlob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
        objectUrl = URL.createObjectURL(convertedBlob);
        setImageUrl(objectUrl);

      } catch (err) {
        console.error('HEIC to JPEG conversion failed:', err);
        setError('Failed to load image.');
      }
    };

    if (src && src.toLowerCase().endsWith('.heic')) {
      convertImage();
    } else {
      setImageUrl(src);
    }

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [src]);

  if (error) {
    return <div className="w-full h-full flex items-center justify-center bg-gray-200 text-red-500 font-medium">{error}</div>;
  }

  if (!imageUrl) {
    return <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">Loading...</div>;
  }

  return <img src={imageUrl} alt={alt} className={className} style={style} />;
};

export default HeicImage;
