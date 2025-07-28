import { useParams } from "react-router-dom";
import { galleries } from "../../galleries";
import { marked } from "marked";
import type { Gallery as GalleryType } from "../../types";
import GalleryItem from "../ui/GalleryItem";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CONFIG } from "../../config";
import { getImageUrl } from "../../utils/image";
import CopyButton from "../ui/CopyButton";
import NotFoundPage from "./NotFoundPage";

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
          contentUrl: `${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), "original")}`,
          author: {
            "@type": "Person",
            name: CONFIG.meta.title,
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
    return (
      <>
        <title>Fotoserien nicht gefunden | {CONFIG.meta.title}</title>
        <meta
          name="description"
          content="Fotoserien nicht gefunden"
        />
        <NotFoundPage />
      </>
    );
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
        content={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(gallery.images[Math.floor(Math.random() * gallery.images.length)].filename.replaceAll(" ", "_")), 1440)}`}
      />
      <meta
        name="og:image"
        content={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(gallery.images[Math.floor(Math.random() * gallery.images.length)].filename.replaceAll(" ", "_")), 1440)}`}
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
        name="og:type"
        content="website"
      />
      <div className="px-4  md:pl-8 md:px-0">
        <div className="flex flex-col items-start">
          <h1 className={`${CONFIG.theme.headline.one} w-full max-w-[calc(var(--content-width)/(21/13))] text-wrap-balance md:pt-8 pt-6 pb-4  `}>{gallery.title || gallery.name}</h1>

          {gallery.description && (
            <div
              className="w-full max-w-[calc(var(--content-width)/(21/13))] text-wrap-balance text-sm md:text-lg leading-8 my-4 pb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: marked(gallery.description) }}
            />
          )}
        </div>

        {shuffledImages.length > 0 ? (
          <div className="md:max-w-[calc(var(--content-width))] lg:pr-4 flex flex-wrap justify-center items-center gap-8 md:gap-0 pb-4">
            {shuffledImages.map((image) => (
              <GalleryItem
                key={image.filename}
                alt={`${image.filename.replaceAll("_", " ").replace(".jpg", "").trim()}`}
                gallerySlug={gallery.slug!}
                imageFilename={image.filename}
              />
            ))}
          </div>
        ) : (
          <p className="text-left">Keine Fotos in der Serie gefunden</p>
        )}
        <div className="md:max-w-[calc(var(--content-width))] w-full gap-4 my-8 py-8 flex flex-col justify-between items-center text-sm">
          {gallery.timeframe || gallery.imageCount ? (
            <div className="text-left flex justify-center gap-4 w-full">
              {gallery.timeframe ? <p>{gallery.timeframe} </p> : <p>N/A</p>} | {gallery.imageCount ? <p>{gallery.imageCount} Fotos</p> : <p>N/A</p>}
            </div>
          ) : null}
          <div className="flex justify-center">
            <CopyButton textToCopy={window.location.href}><span className="font-mono">Link Kopieren</span></CopyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
