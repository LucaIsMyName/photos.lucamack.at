import { useParams } from "react-router-dom";
import { galleries } from "../galleries";
import { marked } from "marked";
import type { Gallery as GalleryType } from "../types";
import GalleryItem from "./GalleryItem";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations";


const Gallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const gallery: GalleryType | undefined = galleries.find((g) => g.slug === slug);

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
      <meta name="description" content={gallery.description || `A collection of photos from the ${gallery.title || gallery.name} gallery.`} />
      <div className="px-4 md:px-0">
        <div className="flex flex-col items-start">
          <h1 className="w-full max-w-[560px] text-2xl md:text-5xl pt-6 font-bold ">{gallery.title || gallery.name}</h1>

          {gallery.description && (
            <div
              className="w-full max-w-[560px] text-lg leading-8 my-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: marked(gallery.description) }}
            />
          )}
        </div>

        {gallery.images.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center pb-4">
            {gallery.images.map((image) => (
              <GalleryItem
                key={image.filename}
                src={`/content/${gallery.slug}/${image.filename}`}
                alt={`${gallery.title || gallery.name} - ${image.filename}`}
                latitude={image.latitude}
                longitude={image.longitude}
              />
            ))}
          </div>
        ) : (
          <p className="text-left">This gallery has no images yet.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Gallery;
