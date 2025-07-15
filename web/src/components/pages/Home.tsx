import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { galleries } from "../../galleries";
import type { Gallery, Image as ImageType } from "../../types";
import Image from "../layout/Image";
import { cn } from "../../utils/cn";
import { getImageUrl } from "../../utils/image";

const Home = () => {
  const [randomImage, setRandomImage] = useState<{ gallery: Gallery; image: ImageType } | null>(null);

  useEffect(() => {
    const galleriesWithImages = galleries.filter((g) => g.images && g.images.length > 0);
    if (galleriesWithImages.length > 0) {
      const randomGallery = galleriesWithImages[Math.floor(Math.random() * galleriesWithImages.length)];
      const randomImageObject = randomGallery.images[Math.floor(Math.random() * randomGallery.images.length)];
      setRandomImage({ gallery: randomGallery, image: randomImageObject });
    }
  }, []);

  const getImageDetails = () => {
    if (!randomImage) {
      return null;
    }

        const src = getImageUrl(randomImage.gallery.slug, randomImage.image.filename);
    return {
      src,
      alt: randomImage.image.alt || "",
      width: randomImage.image.width,
      height: randomImage.image.height,
      slug: randomImage.gallery.slug,
    };
  };

  const imageDetails = getImageDetails();

  return (
    <div className="h-full w-full relative">
      <title>Fotos | Luca Mack</title>
      <meta
        name="title"
        content={`Fotos | Luca Mack`}
      />
      <meta
        name="description"
        content="A collection of photos by Luca Mack, showcasing moments from various galleries."
      />
      <div className={cn("absolute inset-0 p-8 md:p-16")}>
        {imageDetails ? (
          <Link
            to={`/gallery/${imageDetails.slug}`}
            className="block w-full h-full">
            <Image
              src={imageDetails.src}
              alt={imageDetails.alt}
              width={imageDetails.width || 1920}
              height={imageDetails.height || 1080}
              sizes="100vw"
              loading="eager"
              className={cn("object-contain w-full h-full")}
            />
          </Link>
        ) : (
          <div className="text-center">Lade Foto...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
