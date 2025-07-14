import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import MapGL, { Marker, Popup, type MapRef } from "react-map-gl/mapbox";
import { Link, useSearchParams } from "react-router-dom";
import { Download, MapPin } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";

import { galleries } from "../../galleries";
import type { Gallery, Image as ImageType } from "../../types";
import { useTheme } from "../../contexts/ThemeContext";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

interface GeotaggedImage {
  gallery: Gallery;
  image: ImageType;
}

const MapPage = () => {
  const mapRef = useRef<MapRef>(null);
  const { theme } = useTheme();
  const [popupInfo, setPopupInfo] = useState<GeotaggedImage | null>(null);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [hiddenGalleries, setHiddenGalleries] = useState<Set<string>>(new Set());
  const [searchParams] = useSearchParams();

  const geotaggedImages = useMemo(() => {
    const allImages: GeotaggedImage[] = [];
    galleries.forEach((gallery) => {
      gallery.images?.forEach((image, index) => {
        if (image.latitude && image.longitude) {
          allImages.push({ image: { ...image, index }, gallery });
        }
      });
    });
    return allImages;
  }, []);

  const galleryColors = useMemo(() => {
    const colors = ["bg-rose-300", "bg-fuchsia-300", "bg-indigo-300", "bg-sky-300", "bg-emerald-300", "bg-amber-300", "bg-red-300", "bg-violet-300", "bg-cyan-300", "bg-lime-300", "bg-pink-300", "bg-blue-300", "bg-green-300", "bg-yellow-300", "bg-purple-300", "bg-teal-300"];
    const colorMap: Map<string, string> = new Map();
    galleries.forEach((gallery, index) => {
      colorMap.set(gallery.slug, colors[index % colors.length]);
    });
    return colorMap;
  }, []);

  const handleMapLoad = () => {
    if (!mapRef.current) return;

    const gallerySlug = searchParams.get("gallery");
    const imageFilename = searchParams.get("image");

    if (gallerySlug && imageFilename) {
      const targetImage = geotaggedImages.find((item) => item.gallery.slug === gallerySlug && item.image.filename === imageFilename);

      if (targetImage) {
        setPopupInfo(targetImage);
        mapRef.current.flyTo({ center: [targetImage.image.longitude!, targetImage.image.latitude!], zoom: 14 });
        return;
      }
    }

    if (geotaggedImages.length === 0) return;

    if (geotaggedImages.length === 1) {
      mapRef.current.flyTo({ center: [geotaggedImages[0].image.longitude!, geotaggedImages[0].image.latitude!], zoom: 10 });
      return;
    }

    const longitudes = geotaggedImages.map((p) => p.image.longitude!);
    const latitudes = geotaggedImages.map((p) => p.image.latitude!);

    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);
    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);

    mapRef.current.fitBounds(
      [
        [minLng, minLat],
        [maxLng, maxLat],
      ],
      { padding: 80, duration: 1000 }
    );
  };

  useEffect(() => {
    // This effect is now just for re-fitting bounds if the images change dynamically, which is unlikely in this app.
    // The main logic is in handleMapLoad.
  }, [geotaggedImages]);

  const toggleGalleryVisibility = useCallback((slug: string) => {
    setHiddenGalleries((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(slug)) {
        newSet.delete(slug);
      } else {
        newSet.add(slug);
      }
      return newSet;
    });
  }, []);

  return (
    <div className="h-full w-full relative">
      <title>Luca Mack | Foto Karte</title>
      <meta
        name="title"
        content={`Luca Mack | Foto Karte`}
      />
      <meta
        name="description"
        content="Karte aller geotagten Fotos."
      />

      <button
        onClick={() => setIsLegendOpen(!isLegendOpen)}
        className={`flex gap-2 items-center cursor-pointer absolute bottom-4 right-4 z-10 p-2 border shadow-[2px_2px_0px_#00000033] transition-colors ${theme === "dark" ? "bg-black text-white " : "bg-white text-black"}`}
        aria-label="Toggle map legend">
        <span className="cursor-pointer text-xs uppercase tracking-wider ml-3">Legende</span>
        <MapPin size={20} />
      </button>

      {isLegendOpen && (
        <div className={`absolute bottom-16 right-4 z-50 px-3 pb-3 py-2 border shadow-[2px_2px_0px_#00000033] w-full max-w-[calc(100%-2rem)] md:max-w-xl ${theme === "dark" ? "bg-black/90 backdrop-blur-sm text-white" : "bg-white/90 backdrop-blur-sm text-black"}`}>
          <h3 className="font-bold text-lg mb-2">Legende</h3>
          <h4 className="text-xs mb-4">Galerien via Farbe, Klick auf Galerie um zu verstecken oder einzublenden</h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm">
            {galleries.map((gallery) => (
              <li
                key={gallery.slug}
                className={`flex items-center cursor-pointer transition-opacity hover:opacity-60 ${hiddenGalleries.has(gallery.slug) ? "opacity-50" : "opacity-100"}`}
                onClick={() => toggleGalleryVisibility(gallery.slug)}>
                <span className={`w-4 h-4 mr-1.5 border flex-shrink-0 ${theme === "dark" ? "border-gray-200" : "border-gray-800"} ${galleryColors.get(gallery.slug)}`}></span>
                <span className="truncate text-xs">{gallery.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <MapGL
        ref={mapRef}
        initialViewState={{
          longitude: 16,
          latitude: 48,
          zoom: 3,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={theme === "dark" ? "mapbox://styles/luma1992/cmcrpf414029501qx4b4fa2jx" : "mapbox://styles/luma1992/cmcrp4svj045g01r17lvz89bx"}
        mapboxAccessToken={MAPBOX_TOKEN}
        onLoad={handleMapLoad}>
        {geotaggedImages
          .filter((item) => !hiddenGalleries.has(item.gallery.slug))
          .map((item, index) => (
            <Marker
              key={`marker-${index}`}
              longitude={item.image.longitude!}
              latitude={item.image.latitude!}
              anchor="center"
              onClick={(e) => {
                e.originalEvent?.stopPropagation();
                setPopupInfo(item);
              }}>
              <div className={`h-3 w-3 border ${galleryColors.get(item.gallery.slug) || "bg-gray-400"} ${theme === "dark" ? "border-white" : "border-gray-800"}`} />
            </Marker>
          ))}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.image.longitude)}
            latitude={Number(popupInfo.image.latitude)}
            onClose={() => setPopupInfo(null)}
            closeButton={false}
            className="z-10">
            <div className={`relative  ${theme === "dark" ? "text-black" : "bg-white text-black"}`}>
              <div className="relative group ">
                <Link to={`/gallery/${popupInfo.gallery.slug}`}>
                  <img
                    className="w-40 md:w-64 h-auto"
                    src={`/content/galleries/${popupInfo.gallery.slug}/${popupInfo.image.filename.replace(/\.(jpg|jpeg|png|heic)$/i, "-640w.jpg")}`}
                    alt={popupInfo.image.alt || popupInfo.gallery.title}
                    loading="lazy"
                  />
                </Link>
              </div>
              <section className={`flex items-center justify-between gap-2 ${theme === "dark" ? "text-white bg-black bg-opacity-70" : "text-black bg-white bg-opacity-70"}`}>
                <p className={`font-geist p-2 text-base truncate ${theme === "dark" ? "text-white bg-black bg-opacity-70" : "text-black bg-white bg-opacity-70"}`}>
                  {popupInfo.gallery.title}
                  {typeof popupInfo.image.index === "number" && ` #${popupInfo.image.index + 1}`}
                </p>
                <a
                  href={`/content/galleries/${popupInfo.gallery.slug}/${popupInfo.image.filename}`}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className={`p-2 px-3 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
                  aria-label={`Download ${popupInfo.image.filename}`}>
                  <Download size={16} />
                </a>
              </section>
            </div>
          </Popup>
        )}
      </MapGL>
    </div>
  );
};

export default MapPage;
