import { useParams } from "react-router-dom";
import { galleries } from "../galleries";
import { marked } from "marked";
import type { Gallery as GalleryType } from "../types";
import GalleryItem from "./GalleryItem";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CONFIG } from "../config";

const Gallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const gallery: GalleryType | undefined = galleries.find((g) => g.slug === slug);
  const location = useLocation();

  useEffect(() => {
    // Scroll to image logic
    const params = new URLSearchParams(location.search);
    let imageName = params.get("image");
    if (!imageName && location.hash) {
      const hash = location.hash.substring(1);
      imageName = hash.startsWith("image-") ? hash.replace("image-", "") : hash;
    }
    if (imageName) {
      const imageId = `image-${imageName.split(".")[0]}`;
      setTimeout(() => {
        const element = document.getElementById(imageId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);
    }

    // JSON-LD structured data logic
    if (gallery && gallery.images) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "gallery-structured-data";

      const structuredData = gallery.images
        .filter((image) => image.latitude && image.longitude && image.googleMapsUrl)
        .map((image) => ({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: image.filename,
          description: image.alt || `A photo from the gallery: ${gallery.title}`,
          contentUrl: `${CONFIG.url}/content/galleries/${gallery.slug}/${image.filename}`,
          author: {
            "@type": "Person",
            name: "Luca Mack",
          },
          location: {
            "@type": "Place",
            geo: {
              "@type": "GeoCoordinates",
              latitude: image.latitude,
              longitude: image.longitude,
            },
            sameAs: image.googleMapsUrl,
          },
        }));

      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        const existingScript = document.getElementById("gallery-structured-data");
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [location, gallery]);

  /**
   * If the gallery is not found, show a message
   */
  if (!gallery) {
    return <div className="py-10 text-left ">{CONFIG.systemMessages.noGalleryFound}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition as any}>
      <title>{`Fotoserie: ${gallery.title || gallery.name} | Luca Mack`}</title>
      <meta
        name="description"
        content={gallery.description || `Fotoserie: ${gallery.title || gallery.name}.`}
      />
      <div className="px-4 md:px-0">
        <div className="flex flex-col items-start">
          <h1 className="w-full max-w-[560px] text-wrap-balance text-2xl md:text-5xl md:pt-8 pt-4 pb-4  ">{gallery.title || gallery.name}</h1>

          {gallery.description && (
            <div
              className="w-full max-w-[calc(var(--content-width)/2)] text-wrap-balance text-sm md:text-lg leading-8 my-4 pb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: marked(gallery.description) }}
            />
          )}
        </div>

        {gallery.images.length > 0 ? (
          <div className="max-w-[var(--content-width)] md:pr-4 flex flex-wrap justify-center items-center gap-8 md:gap-0 pb-4">
            {gallery.images.map((image) => (
              <GalleryItem
                key={image.filename}
                src={`/content/galleries/${gallery.slug}/${image.filename}`}
                alt={image.alt || `${gallery.title || gallery.name} - ${image.filename}`}
                latitude={image.latitude}
                longitude={image.longitude}
                gallerySlug={gallery.slug!}
                imageFilename={image.filename}
              />
            ))}
          </div>
        ) : (
          <p className="text-left">{CONFIG.systemMessages.noImagesFound}</p>
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
