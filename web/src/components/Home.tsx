import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleries } from '../galleries';
import type { Gallery } from '../types';
import HeicImage from './HeicImage';

const Home = () => {
  const [randomImage, setRandomImage] = useState<{ gallery: Gallery; image: string } | null>(null);

  useEffect(() => {
    const galleriesWithImages = galleries.filter(g => g.images && g.images.length > 0);
    if (galleriesWithImages.length > 0) {
      const randomGallery = galleriesWithImages[Math.floor(Math.random() * galleriesWithImages.length)];
      const randomImageFile = randomGallery.images[Math.floor(Math.random() * randomGallery.images.length)];
      setRandomImage({ gallery: randomGallery, image: randomImageFile });
    }
  }, []);

  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 p-8 md:p-16">
        {randomImage ? (
          <Link to={`/gallery/${randomImage.gallery.slug}`} className="block w-full h-full">
            <HeicImage
              src={`/content/${randomImage.gallery.slug}/${randomImage.image}`}
              alt={`Random image from ${randomImage.gallery.name}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </Link>
        ) : (
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">No images found.</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
