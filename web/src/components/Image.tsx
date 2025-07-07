import { useState, useEffect } from "react";
import heic2any from "heic2any";
import { useInView } from "react-intersection-observer";

interface ImageProps {
  id?: string;
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onImageLoad?: (dimensions: { width: number; height: number }) => void;
  srcSet?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
}

const Image = ({ id = "", src, loading, alt, className, style, onImageLoad, srcSet, sizes }: ImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let objectUrl: string | null = null;

    const loadImage = async () => {
      try {
        if (src && src.toLowerCase().endsWith(".heic")) {
          const response = await fetch(src);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const blob = await response.blob();
          const conversionResult = await heic2any({
            blob,
            toType: "image/jpeg",
            quality: 0.9,
          });
          const convertedBlob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
          objectUrl = URL.createObjectURL(convertedBlob);
          setImageUrl(objectUrl);
        } else {
          setImageUrl(src);
        }
      } catch (err) {
        console.error("Image loading or conversion failed:", err);
        setError("Failed to load image.");
      }
    };

    loadImage();

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [src, inView]);

  if (error) {
    return (
      <div
        ref={ref}
        className="w-full aspect-[4/3] flex items-center justify-center bg-gray-200 text-red-500 font-medium">
        {error}
      </div>
    );
  }

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onImageLoad) {
      onImageLoad({ width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight });
    }
  };

  if (!imageUrl) {
    return (
      <div
        ref={ref}
        className="w-full h-full bg-gray-200 dark:bg-neutral-800 animate-pulse"></div>
    );
  }

  return (
    <div
      ref={ref}
      className="w-full h-full">
      <img
        id={id}
        src={imageUrl}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading !== undefined ? loading : "lazy"}
        className={`${className} transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={style}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default Image;
