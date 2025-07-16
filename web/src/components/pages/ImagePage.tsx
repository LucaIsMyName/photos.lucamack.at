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
        contentUrl: `${CONFIG.url}${getImageUrl(gallery.slug, image.filename, "original")}`,
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
    return <div className="py-10 text-left">Bild nicht gefunden.</div>;
  }

  const { image, gallery } = foundImage;

  return (
    <div className="w-full max-w-[var(--content-width)] p-4 md:p-8 flex flex-col items-center">
      <title>{`${image.filename} | ${gallery.title} | ${CONFIG.meta.title}`}</title>
      <meta
        name="title"
        content={`${image.filename} | ${gallery.title} | ${CONFIG.meta.title}`}
      />
      <meta
        name="description"
        content={`${image.alt || gallery.title}`}
      />
      <meta
        name="image"
        content={`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 640)}`}
      />
      <meta
        name="og:image"
        content={`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 640)}`}
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
        content={`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 640)}`}
      />
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <div className="flex items-center h-auto md:h-[80vh]">
          <Image
            src={getImageUrl(gallery.slug, image.filename)}
            alt={image.alt || gallery.title}
            width={image.width}
            height={image.height}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="max-h-full h-full max-w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h1 className={cn(`truncate`, CONFIG.theme.headline.one)}>{image.filename}</h1>
          <h2 className="text-xl">
            <span className="">Galerie: </span>
            <Link
              className={cn(`underline  decoration-1 ${theme === "dark" ? "decoration-red-300 hover:text-red-300" : "decoration-red-600 hover:text-red-600"} underline-offset-4`)}
              to={`/gallery/${gallery.slug}`}>
              {gallery.title}
            </Link>
          </h2>

          <div className="flex flex-col lg:flex-row-reverse gap-8 mt-4 border-t border-neutral-500/50 pt-4 md:pt-8 border-dotted">
            <div className="flex-1">
              <h3 className="text-xl mb-2">Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-[100px,1fr] gap-x-4 gap-y-2 text-sm">
                <div className="text-[10px] uppercase tracking-wider">Original</div>
                <div className="flex items-center gap-2 font-mono">
                  <Href
                    href={getImageUrl(gallery.slug, image.filename, "original")}
                    hasDecoration={false}
                    className={cn("truncate font-mono")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, "original")}`}
                  </Href>
                  <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, "original")}`} />
                </div>

                <div className="text-[10px] uppercase tracking-wider">1440w</div>
                <div className="flex items-center gap-2 font-mono">
                  <Href
                    href={getImageUrl(gallery.slug, image.filename, 1440)}
                    hasDecoration={false}
                    className={cn("truncate font-mono")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 1440)}`}
                  </Href>
                  <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 1440)}`} />
                </div>

                <div className="text-[10px] uppercase tracking-wider">640w</div>
                <div className="flex items-center gap-2 font-mono">
                  <Href
                    href={getImageUrl(gallery.slug, image.filename, 640)}
                    hasDecoration={false}
                    className={cn("truncate font-mono")}>
                    {`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 640)}`}
                  </Href>
                  <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 640)}`} />
                </div>

                {image.createDate && (
                  <>
                    <h3 className="text-xl mt-4">Datum & Uhrzeit</h3>
                    <Link
                      to={`/app/timeline?scrollTo=${parseCreateDate(image.createDate)!.toISOString().split("T")[0]}`}
                      className={cn("underline underline-offset-4", theme === "dark" ? "hover:text-red-300 decoration-red-300" : "hover:text-red-600 decoration-red-600")}>
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
                <h2 className="text-xl mb-2">Location</h2>
                <p className="text-sm mb-2">{`${image.latitude.toFixed(4)}, ${image.longitude.toFixed(4)}`}</p>
                <div className="border aspect-square md:aspect-[3/2] w-full overflow-hidden">
                  <MapGL
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
                    to={`/app/map?gallery=${gallery.slug}&image=${image.filename}`}
                    className={cn("inline-block underline underline-offset-4 inline-block ", theme === "dark" ? "text-white decoration-red-300 hover:text-red-300 hover:decoration-red-300" : "text-black decoration-red-500 hover:text-red-600")}>
                    In Karte anzeigen
                  </Link>
                  <Href href={`https://www.google.com/maps/search/?api=1&query=${image.latitude},${image.longitude}`}>Google Maps</Href>
                  <Href href={`http://maps.apple.com/?ll=${image.latitude},${image.longitude}`}>Apple Maps</Href>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
