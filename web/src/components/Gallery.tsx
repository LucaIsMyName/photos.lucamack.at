import { useParams } from "react-router-dom";
import { galleries } from "../galleries";
import { marked } from "marked";
import type { Gallery as GalleryType } from "../types";
import GalleryItem from "./GalleryItem";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations";
import { useState, useEffect } from "react";

const Gallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const gallery: GalleryType | undefined = galleries.find((g) => g.slug === slug);
  const [shuffledImages, setShuffledImages] = useState<GalleryType["images"]>([]);

  /**
   * Shuffles the images when the component is mounted
   * and the gallery is available
   */
  useEffect(() => {
    if (gallery) {
      const shuffled = [...gallery.images].sort(() => Math.random() - 0.5);
      setShuffledImages(shuffled);
    }
  }, [gallery]);

  /**
   * If the gallery is not found, show a message
   */
  if (!gallery) {
    return <div className="py-10 text-left font-bold">Gallery not found.</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition as any}>
      <title>{`Luca Mack | ${gallery.title || gallery.name}`}</title>
      <meta
        name="description"
        content={gallery.description || `Fotoserie: ${gallery.title || gallery.name} gallery.`}
      />
      <div className="px-4 md:px-0">
        <div className="flex flex-col items-start">
          <h1 className="w-full max-w-[560px] text-wrap-balance text-2xl md:text-5xl md:pt-8 pt-4 pb-4 font-bold ">{gallery.title || gallery.name}</h1>

          {gallery.description && (
            <div
              className="w-full max-w-[calc(var(--content-width)/2)] text-wrap-balance text-sm md:text-lg leading-8 my-4 pb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: marked(gallery.description) }}
            />
          )}
        </div>

        {shuffledImages.length > 0 ? (
          <div className="max-w-[var(--content-width)] md:pr-4 flex flex-wrap justify-center items-center gap-8 md:gap-0 pb-4">
            {shuffledImages.map((image) => (
              <GalleryItem
                key={image.filename}
                src={`/content/galleries/${gallery.slug}/${image.filename}`}
                alt={`${gallery.title || gallery.name} - ${image.filename}`}
                latitude={image.latitude}
                longitude={image.longitude}
              />
            ))}
          </div>
        ) : (
          <p className="text-left">This gallery has no images yet.</p>
        )}

        <div className="max-w-[calc(1024px)] flex w-full mb-4 pb-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-left flex justify-center gap-4 w-full">
            {gallery.timeframe && <p>{gallery.timeframe}</p>} - {gallery.imageCount && <p>{gallery.imageCount} Fotos</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
