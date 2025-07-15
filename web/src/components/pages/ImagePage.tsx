import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import MapGL, { Marker } from "react-map-gl/mapbox";
import { CONFIG } from "../../config";
import { cn } from "../../utils/cn";
import Image from "../layout/Image";
import { getImageUrl } from "../../utils/image";
import { useImage } from "../../hooks/useImage";
import { useEffect } from "react";

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
          name: "Luca Mack",
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
      <title>{`${image.filename} | ${gallery.title} | Luca Mack`}</title>
      <meta
        name="title"
        content={`${image.filename} | ${gallery.title} | Luca Mack`}
      />
      <meta
        name="description"
        content={`${image.alt || gallery.title}`}
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
          <h1 className="text-3xl">{image.filename}</h1>
          <h2 className="text-xl">
            <span className="">Galerie: </span>
            <Link
              className={cn(`underline decoration-1 ${theme === "dark" ? "decoration-white" : "decoration-black"} underline-offset-4`)}
              to={`/gallery/${gallery.slug}`}>
              {gallery.title}
            </Link>
          </h2>

          <div className="mt-4">
            <h3 className="text-xl mb-2">Image URLs</h3>
            <div className="grid grid-cols-1 md:grid-cols-[100px,1fr] gap-x-4 gap-y-2 text-sm">
              <div className="text-[10px] uppercase tracking-wider">Original</div>
              <div className="font-mono truncate">
                <a
                  href={getImageUrl(gallery.slug, image.filename, "original")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(theme === "dark" ? "hover:text-red-300" : "hover:text-red-600")}>
                  <span className="">{`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, "original")}`}</span>
                </a>
              </div>

              <div className="text-[10px] uppercase tracking-wider">1440w</div>
              <div className="font-mono truncate">
                <a
                  href={getImageUrl(gallery.slug, image.filename, 1440)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(theme === "dark" ? "hover:text-red-300" : "hover:text-red-600")}>
                  <span className="">{`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 1440)}`}</span>
                </a>
              </div>

              <div className="text-[10px] uppercase tracking-wider">640w</div>
              <div className="font-mono truncate">
                <a
                  href={getImageUrl(gallery.slug, image.filename, 640)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(theme === "dark" ? "hover:text-red-300" : "hover:text-red-600")}>
                  <span className="">{`${CONFIG.url}${getImageUrl(gallery.slug, image.filename, 640)}`}</span>
                </a>
              </div>
            </div>
          </div>

          {image.latitude && image.longitude && (
            <div className="mt-4">
              <h2 className="text-xl mb-2">Location</h2>
              <p className="text-sm mb-2">{`${image.latitude.toFixed(4)}, ${image.longitude.toFixed(4)}`}</p>
              <div className="border h-64 w-full md:max-w-[calc(var(--content-width)/2)] overflow-hidden">
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
              <div className="flex gap-4 mt-2">
                <Link
                  to={`/map?gallery=${gallery.slug}&image=${image.filename}`}
                  className={cn("underline underline-offset-4 inline-block ", theme === "dark" ? "text-white decoration-red-300" : "text-black decoration-red-500")}>
                  In Karte anzeigen
                </Link>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${image.latitude},${image.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("underline underline-offset-4 inline-block ", theme === "dark" ? "text-white decoration-red-300" : "text-black decoration-red-500")}>
                  Google Maps
                </a>
                <a
                  href={`http://maps.apple.com/?ll=${image.latitude},${image.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("underline underline-offset-4 inline-block ", theme === "dark" ? "text-white decoration-red-300" : "text-black decoration-red-500")}>
                  Apple Maps
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
