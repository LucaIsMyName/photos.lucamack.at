import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import MapGL, { Marker } from "react-map-gl/mapbox";
import { CONFIG } from "../../config";
import { cn } from "../../utils/cn";
import Image from "../layout/Image";
import { getImageUrl } from "../../utils/image";
import { useImage } from "../../hooks/useImage";
import { useEffect } from "react";
import { parseCreateDate } from "../../utils/date";
import CopyButton from "../ui/CopyButton";
import Href from "../ui/Href";
import { galleries } from "../../galleries";
import { useMemo } from "react";
import type { RelatedImage } from "../../types";
import { slugify } from "../../utils/slugify";

const ImagePage = () => {
  const { theme } = useTheme();
  const foundImage = useImage();

  useEffect(() => {
    if (foundImage) {
      const { image, gallery } = foundImage;
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "image-structured-data";

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: image.filename,
        description: image.alt || `A photo from the gallery: ${gallery.title}`,
        contentUrl: `${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), "original")}`,
        author: {
          "@type": "Person",
          name: CONFIG.meta.title,
        },
        ...(image.latitude &&
          image.longitude && {
            location: {
              "@type": "Place",
              geo: {
                "@type": "GeoCoordinates",
                latitude: image.latitude,
                longitude: image.longitude,
              },
              ...(image.googleMapsUrl && { sameAs: image.googleMapsUrl }),
            },
          }),
      };

      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        const existingScript = document.getElementById("image-structured-data");
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [foundImage]);
  if (!foundImage) {
    return (
      <>
        <div className={cn(`py-6 text-left`, CONFIG.theme.headline.one)}>Foto nicht gefunden.</div>
        <Href to={`/gallery/${window.location.pathname.split("/")[2]}`}>Zurück zur Galerie</Href>
      </>
    );
  }

  const { image, gallery } = foundImage;

  const relatedImages: RelatedImage[] = useMemo(() => {
    if (!foundImage) return [];

    const { image: currentImage, gallery: currentGallery } = foundImage;

    // 1. First priority: Get nearest images by longitude/latitude
    let nearbyImages: RelatedImage[] = [];
    if (currentImage.latitude && currentImage.longitude) {
      const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
      };

      nearbyImages = galleries
        .flatMap((g) => g.images.map((img) => ({ ...img, gallerySlug: g.slug })))
        .filter((img) => img.filename !== currentImage.filename && img.latitude && img.longitude)
        .map((img) => ({
          ...img,
          distance: getDistance(currentImage.latitude!, currentImage.longitude!, img.latitude!, img.longitude!),
        }))
        .sort((a, b) => a.distance - b.distance);
    }

    // No early return - we always want to include a random image
    // if (nearbyImages.length >= 6) {
    //   return nearbyImages.slice(0, 6);
    // }

    // 2. Fallback: Get other images from the same gallery
    let fromSameGallery = currentGallery.images.filter((img) => img.filename !== currentImage.filename).map((img) => ({ ...img, gallerySlug: currentGallery.slug }));

    // 3. Get one random image from a DIFFERENT gallery
    // This ensures more variety
    const imagesFromOtherGalleries = galleries
      .filter((g) => g.slug !== currentGallery.slug) // Only images from different galleries
      .flatMap((g) => g.images.map((img) => ({ ...img, gallerySlug: g.slug })))
      .filter((img) => img.filename !== currentImage.filename);

    // Fallback to all images if no other galleries are available
    const randomPool = imagesFromOtherGalleries.length > 0 ? imagesFromOtherGalleries : galleries.flatMap((g) => g.images.map((img) => ({ ...img, gallerySlug: g.slug }))).filter((img) => img.filename !== currentImage.filename);

    // Get a truly random image
    let randomImage: RelatedImage | null = null;
    if (randomPool.length > 0) {
      // Force a different random image each time by using timestamp as seed
      const timestamp = new Date().getTime();
      const randomIndex = Math.floor(((timestamp % randomPool.length) + randomPool.length) % randomPool.length);
      randomImage = {
        ...randomPool[randomIndex],
        // Add a flag to identify this as the random image
        isRandomPick: true,
      } as RelatedImage;

      // Log to verify random image is selected
      console.log("RANDOM IMAGE SELECTED:", randomImage.filename, "from gallery:", randomImage.gallerySlug);
    }

    // 4. Combine and ensure 6 images (5 from logic + 1 random)
    const combined = [...nearbyImages, ...fromSameGallery];
    // Remove any image that matches our random pick to avoid duplicates
    const filteredCombined = randomImage ? combined.filter((img) => img.filename !== randomImage.filename) : combined;

    const unique = Array.from(new Map(filteredCombined.map((item) => [item.filename, item])).values());

    // Take only 5 from the combined results
    const result = unique.slice(0, 5);

    // Always add the random image if we have one
    if (randomImage) {
      result.push(randomImage);
    }

    return result;
  }, [foundImage]);

  return (
    <div className="w-full max-w-[var(--content-width)] p-4 md:p-8 flex flex-col items-center">
      <title>{`${image.filename.replace("_", " ").replace(".jpg", "").trim()} | ${gallery.title} | ${CONFIG.meta.title}`}</title>
      <meta
        name="title"
        content={`${image.filename.replace("_", " ").replace(".jpg", "").trim()} | ${gallery.title} | ${CONFIG.meta.title}`}
      />
      <meta
        name="description"
        content={`${gallery.title} - ${image.filename.replace(".jpg", "")}`}
      />
      <meta
        name="image"
        content={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`}
      />
      <meta
        name="og:image"
        content={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`}
      />
      <meta
        name="og:title"
        content={`${image.filename} | ${gallery.title} | ${CONFIG.meta.title}`}
      />
      <meta
        name="og:description"
        content={`${image.alt || gallery.title}`}
      />
      <meta
        name="og:url"
        content={`${window.location.origin}/gallery/${gallery.slug}/image/${slugify(image.filename)}`}
      />
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <div className="flex items-center h-auto md:h-[85vh]">
          <Image
            src={getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")))}
            alt={image.filename.replaceAll("_", " ").replace(".jpg", "").trim()}
            width={image.width}
            height={image.height}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="max-h-full h-full max-w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-0 w-full">
          <h1 className="text-base md:text-3xl mb-4">{image.filename.replaceAll("_", " ").replace(".jpg", "").trim()}</h1>

          <div className="flex justify-between items-center gap-4 my-4 border-t border-neutral-500/50 border-dotted pt-8">
            <Link
              className={cn(`flex items-center gap-2  ${theme === "dark" ? "" : ""}`)}
              to={`/gallery/${gallery.slug}`}>
              <img
                src={getImageUrl(gallery.slug, encodeURI(gallery.images[0].filename.replaceAll(" ", "_")), 380)}
                alt={gallery.title}
                className="w-7 h-7 object-cover"
              />
              <Href className="text-[11px] truncate">{gallery.title}</Href>
            </Link>

            <CopyButton
              className="min-h-4 sm:flex-row-reverse"
              iconToRight={false}
              textToCopy={window.location.href}>
              <span className="text-[11px] text-nowrap hidden sm:block truncate">Kopieren</span>
            </CopyButton>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-8 mt-4 border-t border-neutral-500/50 pt-4 md:pt-8 border-dotted">
            <div className="flex-1">
              <h3 className="text-base mb-2">URLs</h3>
              <div className="grid grid-cols-1 md:grid-cols-[100px,1fr] gap-x-4 gap-y-3 text-sm">
                <div className="text-[10px] tracking-wider font-mono">Original</div>
                <div className="flex items-center gap-2 font-mono">
                  <Href
                    href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), "original")}
                    hasDecoration={false}
                    className={cn("truncate font-mono text-xs max-w-[calc(100%-40px)]")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), "original")}`}
                  </Href>
                  <CopyButton
                    className=""
                    textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), "original")}`}
                  />
                </div>

                <div className="text-[10px] tracking-wider font-mono">1440 px</div>
                <div className="flex items-center gap-2 font-mono">
                  <Href
                    href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 1440)}
                    hasDecoration={false}
                    className={cn("truncate font-mono text-xs max-w-[calc(100%-40px)]")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 1440)}`}
                  </Href>
                  <CopyButton textToCopy={window.location.href} />
                </div>

                <div className="text-[10px] tracking-wider font-mono">640 px</div>
                <div className="flex items-center gap-2 font-mono">
                  <Href
                    href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 640)}
                    hasDecoration={false}
                    className={cn("truncate font-mono text-xs max-w-[calc(100%-40px)]")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`}
                  </Href>
                  <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`} />
                </div>
                <div className="text-[10px] tracking-wider font-mono">380 px</div>
                <div className="flex items-center gap-2 font-mono">
                  <Href
                    href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 380)}
                    hasDecoration={false}
                    className={cn("truncate font-mono text-xs max-w-[calc(100%-40px)]")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 380)}`}
                  </Href>
                  <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 380)}`} />
                </div>

                {image.createDate && (
                  <>
                    <h3 className="text-base mt-4">Datum & Uhrzeit</h3>
                    <Link
                      to={`/app/timeline?scrollTo=${parseCreateDate(image.createDate)!.toISOString().split("T")[0]}`}
                      className={cn("text-xs underline underline-offset-4", theme === "dark" ? "hover:text-red-300 decoration-red-300" : "hover:text-red-600 decoration-red-600")}>
                      {new Date(parseCreateDate(image.createDate)!).toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Link>
                  </>
                )}
              </div>
            </div>

            {image.latitude && image.longitude && (
              <div className="flex-1 mb-8 md:mb-4">
                <h2 className="text-base mb-2">Standort & Karte</h2>
                <p className="text-xs mb-2 font-mono text-[11px]">{`${image.latitude.toFixed(4)}, ${image.longitude.toFixed(4)}`}</p>
                <div className="border aspect-square w-full overflow-hidden">
                  <MapGL
                    key={image.filename} // Add key to force re-render
                    initialViewState={{
                      latitude: image.latitude,
                      longitude: image.longitude,
                      zoom: 12,
                    }}
                    style={{ width: "100%", height: "100%" }}
                    mapStyle={theme === "dark" ? CONFIG.mapbox.style.dark : CONFIG.mapbox.style.light}
                    mapboxAccessToken={CONFIG.mapbox.accessToken}
                    scrollZoom={true}
                    dragPan={false}>
                    <Marker
                      longitude={image.longitude}
                      latitude={image.latitude}>
                      <div>
                        <div className={cn(`w-4 h-4 border border-white`, theme === "dark" ? "bg-red-300" : "bg-red-600")} />
                      </div>
                    </Marker>
                  </MapGL>
                </div>
                <div className="flex flex-wrap space-y-2 space-x-4 gap-0 mt-2">
                  <Link
                    to={`/app/map?image=${slugify(image.filename.replace(/\.[^/.]+$/, ""))}&gallery=${gallery.slug}`}
                    className={cn("text-sm inline-block underline underline-offset-4 inline-block ", theme === "dark" ? "text-white decoration-red-300 hover:text-red-300 hover:decoration-red-300" : "text-black decoration-red-500 hover:text-red-600")}>
                    Auf der Karte anzeigen
                  </Link>
                  {/* <Href className="text-sm" href={`https://www.openstreetmap.org/search?query=${image.latitude},${image.longitude}`}>OpenStreetMap</Href> */}
                  <Href
                    className="text-sm"
                    href={`https://www.google.com/maps/search/?api=1&query=${image.latitude},${image.longitude}`}>
                    Google Maps
                  </Href>
                  <Href
                    className="text-sm"
                    href={`http://maps.apple.com/?q=${image.latitude},${image.longitude}`}>
                    Apple Maps
                  </Href>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {relatedImages.length > 0 && (
        <div className="w-full pb-8 md:pb-0 max-w-4xl mt-8 pt-8 border-t border-neutral-500/50 border-dotted">
          <h2 className="text-base mb-4">Andere Fotos</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {relatedImages.map((relatedImage) => (
              <Link
                key={relatedImage.filename}
                to={`/gallery/${relatedImage.gallerySlug}/image/${slugify(relatedImage.filename.replace(/\.[^/.]+$/, ""))}`}
                className="relative">
                <img
                  src={getImageUrl(relatedImage.gallerySlug, relatedImage.filename.replaceAll(" ", "_"), 380)}
                  alt={relatedImage.filename.replaceAll("_", " ").replace(".jpg", "").trim()}
                  width={380}
                  height={380}
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className={cn("aspect-square object-cover w-full h-full", relatedImage.isRandomPick && "")}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePage;
