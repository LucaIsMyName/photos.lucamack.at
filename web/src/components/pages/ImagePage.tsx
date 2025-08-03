import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import MapGL, { Marker } from "react-map-gl/mapbox";
import { CONFIG } from "../../config";
import { cn } from "../../utils/cn";
import Image from "../ui/Image";
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
import NotFoundPage from "./NotFoundPage";

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
        ...(image.latitude &&
          image.longitude && {
            geo: {
              "@type": "GeoCoordinates",
              latitude: image.latitude,
              longitude: image.longitude,
            },
          }),
        ...(image.googleMapsUrl && { sameAs: image.googleMapsUrl }),
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
        <NotFoundPage title="Foto nicht gefunden" />
      </>
    );
  }

  const { image, gallery } = foundImage;

  const relatedImages: RelatedImage[] = useMemo(() => {
    if (!foundImage) return [];

    const { image: currentImage, gallery: currentGallery } = foundImage;

    // Helper function to get distance between two points
    const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 6371; // Radius of the earth in km
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    // Track selected images to avoid duplicates
    const selectedImageFilenames = new Set<string>();
    selectedImageFilenames.add(currentImage.filename);

    // Result array to store our 6 images
    const result: RelatedImage[] = [];

    // Create a pool of all available images (excluding current)
    const allImagesPool = galleries.flatMap((g) => g.images.map((img) => ({ ...img, gallerySlug: g.slug }))).filter((img) => img.filename !== currentImage.filename);

    // 1. Get 2 nearest images by distance (any gallery)
    if (currentImage.latitude && currentImage.longitude) {
      const nearbyImages = allImagesPool
        .filter((img) => !selectedImageFilenames.has(img.filename) && img.latitude && img.longitude)
        .map((img) => ({
          ...img,
          distance: getDistance(currentImage.latitude!, currentImage.longitude!, img.latitude!, img.longitude!),
          isNearestPick: true,
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2);

      // Add to results and track selected images
      nearbyImages.forEach((img) => {
        // Fix the rgb type to match the expected [number, number, number] tuple
        if (img.colorData?.dominantColors) {
          img.colorData.dominantColors = img.colorData.dominantColors.map((color) => ({
            ...color,
            rgb: color.rgb.slice(0, 3) as [number, number, number],
          }));
        }
        result.push(img as any);
        selectedImageFilenames.add(img.filename);
      });
    }

    // 2. Get 2 images from the same gallery (any distance)
    const sameGalleryImages = currentGallery.images
      .filter((img: any) => !selectedImageFilenames.has(img.filename))
      .map(
        (img: any) =>
          ({
            ...img,
            gallerySlug: currentGallery.slug,
            isSameGalleryPick: true,
          } as RelatedImage)
      );

    // If we have more than 2 images from the same gallery, select 2 random ones
    if (sameGalleryImages.length > 2) {
      // Shuffle the array
      for (let i = sameGalleryImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sameGalleryImages[i], sameGalleryImages[j]] = [sameGalleryImages[j], sameGalleryImages[i]];
      }
    }

    // Take up to 2 images from the same gallery
    const selectedSameGallery = sameGalleryImages.slice(0, 2);
    selectedSameGallery.forEach((img: any) => {
      // Fix the rgb type to match the expected [number, number, number] tuple
      if (img.colorData?.dominantColors) {
        img.colorData.dominantColors = img.colorData.dominantColors.map((color: any) => ({
          ...color,
          rgb: color.rgb.slice(0, 3) as [number, number, number],
        }));
      }
      result.push(img);
      selectedImageFilenames.add(img.filename);
    });

    // 3. Get 2 random images from any gallery (excluding already selected)
    const randomPool = allImagesPool.filter((img) => !selectedImageFilenames.has(img.filename));

    // If we have random images available
    if (randomPool.length > 0) {
      // Shuffle the array
      for (let i = randomPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomPool[i], randomPool[j]] = [randomPool[j], randomPool[i]];
      }

      // Take up to 2 random images
      const randomImages = randomPool.slice(0, 2).map(
        (img) =>
          ({
            ...img,
            isRandomPick: true,
          } as RelatedImage)
      );

      randomImages.forEach((img) => {
        // Fix the rgb type to match the expected [number, number, number] tuple
        if (img.colorData?.dominantColors) {
          img.colorData.dominantColors = img.colorData.dominantColors.map((color) => ({
            ...color,
            rgb: color.rgb.slice(0, 3) as [number, number, number],
          }));
        }
        result.push(img);
        selectedImageFilenames.add(img.filename);
      });
    }

    // 4. Fill remaining slots with additional random images if needed
    // We want exactly 6 images total
    if (result.length < 6) {
      const remainingNeeded = 6 - result.length;

      // Get more random images to fill the remaining slots
      const additionalRandomPool = allImagesPool.filter((img) => !selectedImageFilenames.has(img.filename));

      if (additionalRandomPool.length > 0) {
        // Shuffle the array
        for (let i = additionalRandomPool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [additionalRandomPool[i], additionalRandomPool[j]] = [additionalRandomPool[j], additionalRandomPool[i]];
        }

        // Take as many as needed to reach 6 total
        const additionalRandomImages = additionalRandomPool.slice(0, remainingNeeded).map(
          (img) =>
            ({
              ...img,
              isRandomPick: true,
              isAdditionalRandomPick: true, // Mark these as additional random picks
            } as RelatedImage)
        );

        additionalRandomImages.forEach((img) => {
          result.push(img);
          selectedImageFilenames.add(img.filename);
        });
      }
    }

    // 5. Shuffle the final result array
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }, [foundImage]);

  return (
    <div className="w-full md:max-w-[var(--content-width)] p-4 md:py-8 md:px-0  md:px-8  flex flex-col items-center">
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
        content={`${image.filename.replaceAll("_", " ").replace(".jpg", "").trim()}`}
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
          <h1 className="text-base md:text-3xl mb-4 text-balance">{image.filename.replaceAll("_", " ").replace(".jpg", "").trim()}</h1>

          <div className={`flex w-full justify-between items-center gap-4 my-4 ${CONFIG.theme.border.top} pt-8`}>
            <div className="flex justify-start items-center gap-1 text-[11px] leading-[20px]">
              <div className={cn(`flex-1 flex justify-between  w-full items-center gap-4  ${theme === "dark" ? "" : ""}`)}>
                <Link to={`/gallery/${gallery.slug}`}>
                  <img
                    src={getImageUrl(gallery.slug, encodeURI(gallery.images[0].filename.replaceAll(" ", "_")), 160)}
                    alt={gallery.title}
                    className="w-16 h-16 object-cover"
                  />
                </Link>
                <div>
                  <div>
                    <Href
                      to={`/gallery/${gallery.slug}`}
                      className="text-base truncate"
                      hasDecoration={false}>
                      {gallery.title}
                    </Href>
                  </div>
                  {image.createDate && parseCreateDate(image.createDate) && (
                    <Href
                      to={`/app/timeline?scrollTo=${parseCreateDate(image.createDate)?.toISOString().split("T")[0]}`}
                      className={cn("text-[11px] font-mono truncate")}>
                      {parseCreateDate(image.createDate) &&
                        new Date(parseCreateDate(image.createDate)!).toLocaleDateString("de-DE", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                    </Href>
                  )}
                </div>
              </div>
            </div>
            <CopyButton
              className=" min-h-4 min-w-4 sm:flex-row-reverse"
              iconToRight={false}
              textToCopy={window.location.href}>
              <span className="text-[11px] text-nowrap hidden sm:block truncate font-mono">URL Kopieren</span>
            </CopyButton>
          </div>

          <div className={`flex flex-col lg:flex-row-reverse gap-8 mt-4 ${CONFIG.theme.border.top} pt-4 md:pt-8`}>
            <div className="flex-1">
              <h3 className="text-base mb-2">URLs</h3>
              <div className="grid grid-cols-1 md:grid-cols-[100px,1fr] gap-x-4 gap-y-3 text-sm">
                <div className={`text-[10px] tracking-wider font-mono pt-4 ${CONFIG.theme.border.top}`}>Original</div>
                <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
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
                <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
                  <Href
                    href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 1440)}
                    hasDecoration={false}
                    className={cn("truncate font-mono text-xs max-w-[calc(100%-40px)]")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 1440)}`}
                  </Href>
                  <CopyButton textToCopy={window.location.href} />
                </div>

                <div className="text-[10px] tracking-wider font-mono">640 px</div>
                <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
                  <Href
                    href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 640)}
                    hasDecoration={false}
                    className={cn("truncate font-mono text-xs max-w-[calc(100%-40px)]")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`}
                  </Href>
                  <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`} />
                </div>
                <div className="text-[10px] tracking-wider font-mono">380 px</div>
                <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
                  <Href
                    href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 380)}
                    hasDecoration={false}
                    className={cn("truncate font-mono text-xs max-w-[calc(100%-40px)]")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 380)}`}
                  </Href>
                  <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 380)}`} />
                </div>
                <div className="text-[10px] tracking-wider font-mono">160 px</div>
                <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
                  <Href
                    href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 160)}
                    hasDecoration={false}
                    className={cn("truncate font-mono text-xs max-w-[calc(100%-40px)]")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 160)}`}
                  </Href>
                  <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 160)}`} />
                </div>
              </div>
            </div>

            {image.latitude && image.longitude && (
              <div className="flex-1 mb-8 md:mb-4">
                <h2 className="text-base mb-2">Standort & Karte</h2>
                <p className="text-xs mb-2 font-mono text-[11px]">{`${image.latitude.toFixed(4)}, ${image.longitude.toFixed(4)}`}</p>
                <div className=" aspect-square w-full overflow-hidden">
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

      {/* Color Palette Section */}
      {image.colorData?.dominantColors && image.colorData.dominantColors.length > 0 && (
        <div className="w-full pb-0 md:pb-0 max-w-4xl mt-8 pt-8 border-t border-neutral-500/50 border-dotted">
          <h2 className="text-base mb-4">Farbpalette</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            {image.colorData.dominantColors.map((color: any, index: any) => {
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  title={`${color.hex} (${Math.round(color.percentage * 100)}%)`}
                  onClick={() => {
                    navigator.clipboard.writeText(color.hex);
                    // Optional: Add a visual feedback for copy
                    const el = document.createElement("div");
                    document.body.appendChild(el);
                    setTimeout(() => document.body.removeChild(el), 1000);
                  }}>
                  <div
                    className="w-10 md:w-20 h-10 md:h-20 border border-neutral-500/20"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-xs uppercase hidden md:block font-mono absolute inset-0 p-1 opacity-0 group-hover:opacity-100 text-white transition-opacity">{color.hex}</div>
                </div>
              );
            })}
          </div>
          {image.colorData.colorfulness !== undefined && (
            <p className="text-[11px] mb-0 font-mono">
              Farbwert: <span className="">{image.colorData.colorfulness.toFixed(2)}%</span>
            </p>
          )}
        </div>
      )}

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
                  width={160}
                  height={160}
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
