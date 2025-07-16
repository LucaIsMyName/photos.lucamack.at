import { useParams } from "react-router-dom";
import { galleries } from "../../galleries";
import { marked } from "marked";
import type { Gallery as GalleryType } from "../../types";
import GalleryItem from "../layout/GalleryItem";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CONFIG } from "../../config";
import { getImageUrl } from "../../utils/image";

const GalleryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const gallery: GalleryType | undefined = galleries.find((g) => g.slug === slug);
  const location = useLocation();

  const shuffledImages = useMemo(() => {
    if (!gallery?.images) return [];
    return [...gallery.images].sort(() => Math.random() - 0.5);
  }, [gallery]);

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
          contentUrl: `${CONFIG.url}${getImageUrl(gallery.slug, image.filename, "original")}`,
          author: {
            "@type": "Person",
            name: CONFIG.meta.title
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
    return <div className={`${CONFIG.theme.headline.one} py-6 text-left`}>{CONFIG.systemMessages.noGalleryFound}</div>;
  }

  return (
    <div>
      <title>{`Fotoserie: ${gallery.title || gallery.name} | ${CONFIG.meta.title}`}</title>
      <meta
        name="description"
        content={gallery.description || `Fotoserie: ${gallery.title || gallery.name}.`}
      />
      <meta
        name="title"
        content={`Fotoserie: ${gallery.title || gallery.name}`}
      />
      <meta
        name="image"
        content={`${CONFIG.url}${getImageUrl(gallery.slug, gallery.images[Math.floor(Math.random() * gallery.images.length)].filename, 640)}`}
      />
      <meta
        name="og:image"
        content={`${CONFIG.url}${getImageUrl(gallery.slug, gallery.images[Math.floor(Math.random() * gallery.images.length)].filename, 640)}`}
      />
      <meta
        name="og:title"
        content={`Fotoserie: ${gallery.title || gallery.name}`}
      />
      <meta
        name="og:description"
        content={gallery.description || `Fotoserie: ${gallery.title || gallery.name}.`}
      />
      <meta
        name="og:url"
        content={`${CONFIG.url}${getImageUrl(gallery.slug, gallery.images[Math.floor(Math.random() * gallery.images.length)].filename, 640)}`}
      />
      <div className="px-4 md:px-0">
        <div className="flex flex-col items-start">
          <h1 className={`${CONFIG.theme.headline.one} w-full max-w-[560px] text-wrap-balance md:pt-8 pt-6 pb-4  `}>{gallery.title || gallery.name}</h1>

          {gallery.description && (
            <div
              className="w-full max-w-[calc(var(--content-width)/2)] text-wrap-balance text-sm md:text-lg leading-8 my-4 pb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: marked(gallery.description) }}
            />
          )}
        </div>

        {shuffledImages.length > 0 ? (
          <div className="max-w-[var(--content-width)] lg:pr-4 flex flex-wrap justify-center items-center gap-8 md:gap-0 pb-4">
            {shuffledImages.map((image) => (
              <GalleryItem
                key={image.filename}
                alt={image.alt || `${gallery.title || gallery.name} - ${image.filename}`}
                gallerySlug={gallery.slug!}
                imageFilename={image.filename}
              />
            ))}
          </div>
        ) : (
          <p className="text-left">{CONFIG.systemMessages.noImagesFound}</p>
        )}
        {gallery.timeframe || gallery.imageCount ? (
          <div className="max-w-[calc(1024px)] flex w-full  my-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-left flex justify-center gap-4 w-full">
              {gallery.timeframe && <p>{gallery.timeframe}</p>} - {gallery.imageCount && <p>{gallery.imageCount} Fotos</p>}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GalleryPage;
