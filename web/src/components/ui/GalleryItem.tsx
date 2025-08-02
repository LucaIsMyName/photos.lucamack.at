import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { getImageUrl } from "../../utils/image";
import { slugify } from "../../utils/slugify";

interface GalleryItemProps {
  alt: string;
  gallerySlug: string;
  imageFilename: string;
}

const GalleryItem = ({ alt, gallerySlug, imageFilename }: GalleryItemProps) => {
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
    if (!orientation) return `${base} md:w-1/2 flex-grow-1 max-w-[calc(var(--content-width)/1.5)]`;

    switch (orientation) {
      case "landscape":
        return `${base} md:w-full`;
      case "portrait":
      case "square":
      default:
        return `${base} md:w-1/2 flex-grow-1 max-w-[calc(var(--content-width)/1.5)]`;
    }
  };

  const sizes =
    orientation === "landscape"
      ? // Landscape images are full-width of the content area (max 1024px on large screens).
        `(min-width: 1024px) 1024px, 100vw`
      : // Portrait/square images are half-width on desktop (max 512px on large screens).
        `(min-width: 1024px) 512px, (min-width: 768px) 50vw, 100vw`;

  const imageName = imageFilename.replace(/\.[^/.]+$/, "");
  const imagePageLink = `/gallery/${gallerySlug}/image/${slugify(imageName)}`;
  return (
    <div
      id={`${slugify(imageName)}`}
      className={getFlexClasses()}>
      <div className="p-0 pr-0 lg:pr-4 sm:pb-4 md:pr-4 md:py-6">
        <Link
          title={`Link zum Foto: ${alt}`}
          to={imagePageLink}
          className="block">
          <Image
            src={getImageUrl(gallerySlug, imageFilename)}
            alt={alt}
            width={640}
            height={orientation === "landscape" ? 427 : orientation === "portrait" ? 960 : 640}
            onImageLoad={handleImageLoad}
            sizes={sizes}
            loading="lazy"
            className="w-full h-auto block"
          />
        </Link>
      </div>
    </div>
  );
};

export default GalleryItem;