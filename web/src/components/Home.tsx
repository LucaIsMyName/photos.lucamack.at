import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleries } from '../galleries';
import type { Gallery, Image } from '../types';
import HeicImage from './HeicImage';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animations';

const Home = () => {
  const [randomImage, setRandomImage] = useState<{ gallery: Gallery; image: Image } | null>(null);

  useEffect(() => {
    const galleriesWithImages = galleries.filter(g => g.images && g.images.length > 0);
    if (galleriesWithImages.length > 0) {
      const randomGallery = galleriesWithImages[Math.floor(Math.random() * galleriesWithImages.length)];
      const randomImageObject = randomGallery.images[Math.floor(Math.random() * randomGallery.images.length)];
      setRandomImage({ gallery: randomGallery, image: randomImageObject });
    }
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition as any}
      className="h-full w-full relative"
    >
      <div className="absolute inset-0 p-8 md:p-16">
        {randomImage ? (
          <Link to={`/gallery/${randomImage.gallery.slug}`} className="block w-full h-full">
            <HeicImage
              src={`/content/${randomImage.gallery.slug}/${randomImage.image.filename}`}
              alt={randomImage.gallery.title || randomImage.gallery.name}
              className="object-contain w-full h-full"
            />
          </Link>
        ) : (
          <div className="text-center">Loading a random moment...</div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
