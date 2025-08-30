import { useParams, Link } from "react-router-dom";
import { galleries } from "../../galleries";
import { marked } from "marked";
import type { Gallery as GalleryType } from "../../types";
import { useEffect, useMemo } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocation } from "react-router-dom";
import { CONFIG } from "../../config";
import { parseCreateDate } from "../../utils/date";
import { getImageUrl } from "../../utils/image";
import GalleryItem from "../layout/gallery-page/GalleryItem";
import CopyButton from "../ui/CopyButton";
import NotFoundPage from "./NotFound";
import SeoHead from "../ui/SeoHead";
import { Copyright } from "lucide-react";
import Href from "../ui/Href";
import { cn } from "../../utils/cn";

const Gallery = () => {
  const { theme } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const gallery: GalleryType | undefined | any = galleries.find((g) => g.slug === slug);
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

      // Create enhanced structured data for each image in the gallery
      const structuredData = gallery.images
        .filter((image: any) => image.latitude && image.longitude)
        .map((image: any) => ({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: image.filename.replaceAll("_", " ").replace(".jpg", "").trim(),
          description: `A photo from the gallery: ${gallery.title}`,
          contentUrl: `${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), "original")}`,
          width: "1920", // Default width - could be dynamic if available
          height: "1080", // Default height - could be dynamic if available
          datePublished: image.createDate ? parseCreateDate(image.createDate)?.toISOString().split("T")[0] || new Date().toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
          dateCreated: image.createDate ? parseCreateDate(image.createDate)?.toISOString().split("T")[0] || new Date().toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
          author: {
            "@type": "Person",
            name: CONFIG.author,
            url: CONFIG.url,
          },
          copyrightHolder: {
            "@type": "Person",
            name: CONFIG.author,
          },
          license: "https://creativecommons.org/licenses/by-nc/4.0/",
          geo: {
            "@type": "GeoCoordinates",
            latitude: image.latitude,
            longitude: image.longitude,
          },
          ...(image.googleMapsUrl && { sameAs: image.googleMapsUrl }),
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
        <SeoHead
          title="Fotoserie nicht gefunden"
          description="Fotoserie nicht gefunden"
          imageUrl={getImageUrl(galleries[0].slug, galleries[0].images[Math.floor(Math.random() * galleries[0].images.length)].filename)}
        />
        <NotFoundPage />
      </>
    );
  }

  return (
    <div>
      <SeoHead
        title={`Fotoserie: ${gallery.title || gallery.name} | ${CONFIG.author}`}
        description={gallery.description || `Fotoserie: ${gallery.title || gallery.name}.`}
        imageUrl={window.location.origin + getImageUrl(gallery.slug, gallery.images[Math.floor(Math.random() * gallery.images.length)].filename)}
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
            <div className="w-full">
              <span className={`w-full text-xs font-mono ${theme === "dark" ? "text-white" : "text-black"} text-center w-full`}>
                {gallery.timeframe ? <p>{gallery.timeframe} </p> : <p>N/A</p>} {gallery.imageCount ? <p>{gallery.imageCount} Fotos</p> : <p>N/A</p>}
              </span>
            </div>
          ) : null}
          <div className="flex flex-col md:flex-row md:gap-6 gap-0 justify-center items-center space-y-4 md:space-y-0">
            <CopyButton textToCopy={window.location.href}>
              <span className={`font-mono ${theme === "dark" ? "text-white" : "text-black"}`}>Link Kopieren</span>
            </CopyButton>
            <div className="flex items-center gap-2">
              <Copyright
                size={16}
                className={cn(theme === "dark" ? "text-neutral-400" : "text-neutral-500")}
              />
              <span className={`text-xs font-mono ${theme === "dark" ? "text-white" : "text-black"}`}>
                <Href to="/page/imprint">{CONFIG.author}</Href>
              </span>
            </div>
          </div>
          {gallery.tags && gallery.tags.length > 0 && (
            <div className="w-full  my-6">
              <div className="flex justify-center items-center flex-wrap gap-2">
                {gallery.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    to={`/app/tags?tag=${encodeURIComponent(tag)}`}
                    className={`px-3 py-1 border border-neutral-500/20 text-[9.5px] cursor-pointer transition-colors hover:bg-black hover:text-white ${
                      theme === 'light'
                        ? 'font-mono text-gray-700'
                        : 'font-mono text-gray-300'
                    }`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
