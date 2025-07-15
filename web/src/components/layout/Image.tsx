import { useState, useEffect } from "react";
// import heic2any from "heic2any";
import { useInView } from "react-intersection-observer";
import { getSizedImagePath } from "../../utils/image";
import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";

interface ImageProps {
  id?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  onImageLoad?: (dimensions: { width: number; height: number }) => void;
  sizes?: string;
  loading?: "lazy" | "eager";
}

const responsiveSizes = [640, 1440];

const Image = ({ id = "", src, loading, alt, className, style, onImageLoad, sizes, width, height }: ImageProps) => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const filename = src.split("/").pop() || "";
  const gallerySlug = src.split("/")[3];

  const srcSet = responsiveSizes.map((size) => `/content/galleries/${gallerySlug}/${getSizedImagePath(filename, size as 640 | 1440)} ${size}w`).join(", ");

  useEffect(() => {
    if (!inView) {
      return;
    }

    let objectUrl: string | null = null;

    const loadImage = async () => {
      try {
        setImageUrl(src);
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
    const aspectRatioStyle = width && height ? { aspectRatio: `${width} / ${height}` } : { aspectRatio: "4 / 3" };
    return (
      <div
        ref={ref}
        style={aspectRatioStyle}
        className={cn(`w-full h-auto animate-pulse ${theme === "dark" ? "bg-black" : "bg-white"}`)}></div>
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
        width={width}
        height={height}
        loading={loading !== undefined ? loading : "lazy"}
        className={`${className} transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={style}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default Image;
