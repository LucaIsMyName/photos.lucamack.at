import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const responsiveSizes = [640, 1440];

interface GalleryItemProps {
  src: string;
  alt: string;
  latitude?: number | null;
  longitude?: number | null;
  gallerySlug: string;
  imageFilename: string;
}

const GalleryItem = ({ src, alt, latitude, longitude, gallerySlug, imageFilename }: GalleryItemProps) => {
  const [orientation, setOrientation] = useState<"landscape" | "portrait" | "square" | null>(null);

  const handleImageLoad = (dimensions: { width: number; height: number }) => {
    if (dimensions.width > dimensions.height) {
      setOrientation("landscape");
    } else if (dimensions.height > dimensions.width) {
      setOrientation("portrait");
    } else {
      setOrientation("square");
    }
  };

  const getFlexClasses = () => {
    const base = "w-full"; // Always full-width on mobile
    if (!orientation) return `${base} md:w-1/2`; // Default to portrait to prevent layout jumps

    switch (orientation) {
      case "landscape":
        return `${base} md:w-full`;
      case "portrait":
      case "square":
      default:
        return `${base} md:w-1/2`;
    }
  };

  const ext = src.substring(src.lastIndexOf("."));
  const baseSrc = src.substring(0, src.lastIndexOf("."));

  const srcSet = responsiveSizes.map((size) => `${baseSrc.replace(" ", "_").trim()}-${size}w${ext} ${size}w`).join(", ");

  const sizes =
    orientation === "landscape"
      ? // Landscape images are full-width of the content area (max 1024px on large screens).
        `(min-width: 1024px) 1024px, 100vw`
      : // Portrait/square images are half-width on desktop (max 512px on large screens).
        `(min-width: 1024px) 512px, (min-width: 768px) 50vw, 100vw`;

  return (
    <div
      id={`image-${imageFilename.split(".")[0]}`}
      className={getFlexClasses()}>
      <div className="p-0 sm:pr-4 sm:pb-4 md:pb-12">
        {latitude && longitude ? (
          <Link
            to={`/map?gallery=${gallerySlug}&image=${imageFilename}`}
            className="block">
            <Image
              src={src}
              alt={alt}
              width={640} // Provide a base width
              height={orientation === "landscape" ? 427 : orientation === "portrait" ? 960 : 640} // Adjust height based on orientation
              onImageLoad={handleImageLoad}
              srcSet={srcSet}
              sizes={sizes}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </Link>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={640}
            height={orientation === "landscape" ? 427 : orientation === "portrait" ? 960 : 640} // Adjust height based on orientation
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
