import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { galleries } from "../../galleries";
import type { Gallery, Image as ImageType } from "../../types";
import Image from "../layout/Image";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations";

const responsiveSizes = [640, 1440];

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

    const src = `/content/galleries/${randomImage.gallery.slug}/${randomImage.image.filename}`;
    const ext = src.substring(src.lastIndexOf("."));
    const baseSrc = src.substring(0, src.lastIndexOf("."));
    const srcSet = responsiveSizes.map((size) => `${baseSrc}-${size}w${ext} ${size}w`).join(", ");

    return {
      src,
      srcSet,
      alt: randomImage.gallery.title || randomImage.gallery.name,
      slug: randomImage.gallery.slug,
    };
  };

  const imageDetails = getImageDetails();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition as any}
      className="h-full w-full relative">
      <title>Luca Mack | Fotos</title>
      <meta
        name="title"
        content={`Luca Mack | Fotos`}
      />
      <meta
        name="description"
        content="A collection of photos by Luca Mack, showcasing moments from various galleries."
      />
      <div className="absolute inset-0 p-8 md:p-16">
        {imageDetails ? (
          <Link
            to={`/gallery/${imageDetails.slug}`}
            className="block w-full h-full">
            <Image
              src={imageDetails.src}
              alt={imageDetails.alt}
              width={1920} // Standard 16:9 width
              height={1080} // Standard 16:9 height
              srcSet={imageDetails.srcSet}
              sizes="100vw"
              loading="eager"
              className="object-contain w-full h-full"
            />
          </Link>
        ) : (
          <div className="text-center">Lade Foto...</div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
