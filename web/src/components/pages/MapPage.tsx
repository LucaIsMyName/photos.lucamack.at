import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import MapGL, { Marker, Popup, type MapRef } from "react-map-gl/mapbox";
import useSupercluster from "use-supercluster";
import { Link, useSearchParams } from "react-router-dom";
import { Download, X, Layers, Eye } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";
import { galleries } from "../../galleries";
import { CONFIG } from "../../config";
import type { Gallery, Image as ImageType } from "../../types";
import type { PointFeature, ClusterProperties } from "supercluster";
import { useTheme } from "../../contexts/ThemeContext";
import { cn } from "../../utils/cn";
import { getImageUrl } from "../../utils/image";
import Href from "../ui/Href";
import { slugify } from "../../utils/slugify";

interface GeotaggedImage {
  gallery: Gallery;
  image: ImageType;
}

// Type guard to check if a point is a cluster
function isCluster(point: PointFeature<any>): point is PointFeature<ClusterProperties> {
  return point.properties.cluster === true;
}

const MapPage = () => {
  const mapRef = useRef<MapRef>(null);
  const { theme } = useTheme();
  const [popupInfo, setPopupInfo] = useState<GeotaggedImage | null>(null);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const legendToggleRef = useRef<HTMLButtonElement>(null);
  const [hiddenGalleries, setHiddenGalleries] = useState<Set<string>>(new Set());
  const [bounds, setBounds] = useState<[number, number, number, number] | undefined>();
  const [searchParams] = useSearchParams();
  const [viewState, setViewState] = useState({
    longitude: 16,
    latitude: 48,
    zoom: 3,
  });

  const geotaggedImages = useMemo(() => {
    const allImages: GeotaggedImage[] = [];
    galleries.forEach((gallery) => {
      if (!hiddenGalleries.has(gallery.slug)) {
        gallery.images?.forEach((image, index) => {
          if (image.latitude && image.longitude) {
            allImages.push({ image: { ...image, index }, gallery });
          }
        });
      }
    });
    return allImages;
  }, [hiddenGalleries]);

  const galleryColors = useMemo(() => {
    const colors = ["bg-rose-300", "bg-fuchsia-300", "bg-indigo-300", "bg-sky-300", "bg-emerald-300", "bg-amber-300", "bg-red-300", "bg-violet-300", "bg-cyan-300", "bg-lime-300", "bg-pink-300", "bg-blue-300", "bg-green-300", "bg-yellow-300", "bg-purple-300", "bg-teal-300"];
    const colorMap: Map<string, string> = new Map();
    galleries.forEach((gallery, index) => {
      colorMap.set(gallery.slug, colors[index % colors.length]);
    });
    return colorMap;
  }, []);

  const points: PointFeature<GeotaggedImage>[] = useMemo(() => {
    return geotaggedImages.map((item) => ({
      type: "Feature",
      properties: item,
      geometry: {
        type: "Point",
        coordinates: [item.image.longitude!, item.image.latitude!],
      },
    }));
  }, [geotaggedImages]);

  // Effect to update bounds after initial image load
  useEffect(() => {
    if (popupInfo && mapRef.current) {
      const map = mapRef.current.getMap();

      const onIdle = () => {
        if (mapRef.current) {
          const bounds = map.getBounds();
          setBounds(bounds?.toArray().flat() as [number, number, number, number]);
        }
        map.off("idle", onIdle);
      };

      map.on("idle", onIdle);
    }
  }, [popupInfo]);

  // Close legend when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (legendToggleRef.current && !legendToggleRef.current.contains(event.target as Node) && legendRef.current && !legendRef.current.contains(event.target as Node)) {
        setIsLegendOpen(false);
      }
    };

    if (isLegendOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLegendOpen]);

  // Prevent body scrolling when map is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewState.zoom,
    options: { radius: 75, maxZoom: 11 },
  });

  const handleMapLoad = useCallback(() => {
    if (!mapRef.current) return;

    const imageSlug = searchParams.get("image");
    const gallerySlug = searchParams.get("gallery");

    if (imageSlug && gallerySlug) {
      // Find the image and gallery
      let foundItem: GeotaggedImage | undefined;

      const gallery = galleries.find((g) => g.slug === gallerySlug);
      if (gallery) {
        const image = gallery.images?.find((img) => slugify(img.filename.replace(/\.[^/.]+$/, "")) === imageSlug);
        if (image && image.latitude && image.longitude) {
          foundItem = { image, gallery };
        }
      }

      if (foundItem && foundItem.image.latitude && foundItem.image.longitude) {
        setViewState({
          ...viewState,
          latitude: foundItem.image.latitude,
          longitude: foundItem.image.longitude,
          zoom: 15,
        });
        setPopupInfo(foundItem);
      }
    } else {
      if (geotaggedImages.length === 0) return;

      if (geotaggedImages.length === 1) {
        setViewState({
          longitude: geotaggedImages[0].image.longitude!,
          latitude: geotaggedImages[0].image.latitude!,
          zoom: 10,
        });
      } else {
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
      }
    }
  }, [geotaggedImages, searchParams]);

  const handleLegendToggle = useCallback((slug: string) => {
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
    <div className="w-full h-full md:h-screen relative overflow-hidden">
      <title>{`Foto Karte | ${CONFIG.meta.title}`}</title>
      <meta
        name="title"
        content={`Foto Karte | ${CONFIG.meta.title}`}
      />
      <meta
        name="description"
        content={`Eine interaktive Karte mit allen Fotos, die Geodaten enthalten.`}
      />
      <button
        ref={legendToggleRef}
        onClick={() => setIsLegendOpen(!isLegendOpen)}
        className={cn("border gap-2 z-50 absolute top-4 right-4 p-2 flex items-center", theme === "dark" ? "bg-black text-white" : "bg-white text-black")}
        aria-label="Legende Ein- oder Ausschalten">
        <span className="text-xs ml-1">Legende</span>
        <Layers size={16} />
      </button>

      {isLegendOpen && (
        <div
          ref={legendRef}
          className={cn("border z-[100000] absolute top-12 right-4 p-4 w-[calc(100%-2rem)] md:w-auto md:max-w-lg", theme === "dark" ? "bg-black text-white" : "bg-white text-black")}>
          <button
            onClick={() => setIsLegendOpen(false)}
            className="absolute top-2 right-2 p-1"
            aria-label="Legende schließen">
            <X className="h-4 w-4" />
          </button>
          <h3 className="font-bold text-lg mb-2">Legende</h3>
          <h4 className="text-[11px] mb-4 opacity-90">Galerien via Farbe, Klick auf Galerie um zu verstecken oder einzublenden</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm">
            {galleries.map((gallery) => (
              <li
                key={gallery.slug}
                className={`group flex items-center justify-between gap-2 cursor-pointer transition-opacity ${hiddenGalleries.has(gallery.slug) ? "opacity-50 hover:opacity-100" : ""}`}
                onClick={() => handleLegendToggle(gallery.slug)}>
                <div className="flex items-center gap-2 truncate">
                  <div className={cn(`w-3 h-3 min-w-3 min-h-3 flex-shrink-0 border ${galleryColors.get(gallery.slug)}`, theme === "dark" ? "border-white" : "border-black")} />
                  <span className="truncate text-xs">{gallery.title}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  {hiddenGalleries.has(gallery.slug) ? <Eye size={12} /> : <X size={12} />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <MapGL
        {...viewState}
        onMove={(evt) => {
          setViewState(evt.viewState);
          if (mapRef.current) {
            setBounds(mapRef.current.getMap().getBounds()?.toArray().flat() as [number, number, number, number]);
          }
        }}
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
        mapStyle={theme === "dark" ? CONFIG.mapbox.style.dark : CONFIG.mapbox.style.light}
        mapboxAccessToken={CONFIG.mapbox.accessToken}
        onLoad={handleMapLoad}>
        {clusters.map((point) => {
          const [longitude, latitude] = point.geometry.coordinates;

          if (isCluster(point)) {
            const { point_count: pointCount, cluster_id } = point.properties;
            return (
              <Marker
                key={` cluster-${cluster_id}`}
                latitude={latitude}
                longitude={longitude}>
                <div
                  className={`shadow-[-2px_0px_0px_#00000033] -rotate-45 ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} border flex items-center justify-center cursor-pointer`}
                  style={{
                    width: `${30 + (pointCount / points.length) * 40}px`,
                    height: `${30 + (pointCount / points.length) * 40}px`,
                  }}
                  onClick={() => {
                    if (!supercluster) return;
                    const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster_id), 20);
                    setViewState({
                      ...viewState,
                      longitude,
                      latitude,
                      zoom: expansionZoom,
                    });
                  }}>
                  <span className="rotate-45">{pointCount}</span>
                </div>
              </Marker>
            );
          }

          const item = point.properties as GeotaggedImage;

          return (
            <Marker
              key={`marker-${item.image.filename}`}
              longitude={item.image.longitude!}
              latitude={item.image.latitude!}
              anchor="center"
              onClick={(e) => {
                e.originalEvent?.stopPropagation();
                setPopupInfo(item);
              }}>
              <div className={cn(`shadow-[1px_1px_0px_#00000033] h-3 w-3 border ${galleryColors.get(item.gallery.slug) || "bg-gray-400"} ${theme === "dark" ? "border-white" : "border-gray-800"}`)} />
            </Marker>
          );
        })}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.image.longitude)}
            latitude={Number(popupInfo.image.latitude)}
            onClose={() => setPopupInfo(null)}
            closeButton={false}
            className="z-10 ">
            <div className={`relative bg-white text-black`}>
              <div className="relative group ">
                <Link to={`/gallery/${popupInfo.gallery.slug}/image/${slugify(popupInfo.image.filename.replace(/\.[^/.]+$/, ""))}`}>
                  <img
                    className="w-40 md:w-64 w-full h-auto"
                    src={getImageUrl(popupInfo.gallery.slug, popupInfo.image.filename.replaceAll(" ", "_"), 380)}
                    alt={popupInfo.image.alt || popupInfo.image.filename.replaceAll("_", " ").replace(".jpg", "")}
                    loading="lazy"
                  />
                </Link>
              </div>
              <section className={`flex items-start justify-between gap-2`}>
                <div className={cn(`font-geist p-2 pt-4 text-base truncate`)}>
                  <p className="text-sm truncate">{popupInfo.image.filename.replaceAll("_", " ")}</p>
                  <p className="text-xs truncate">{popupInfo.gallery.title}</p>
                </div>
                <Href
                  href={getImageUrl(popupInfo.gallery.slug, popupInfo.image.filename.replaceAll(" ", "_"), "original")}
                  download
                  onClick={(e: any) => e.stopPropagation()}
                  className={cn(`p-2 pt-4 px-3 mt-1 mr-2 text-black`)}
                  aria-label={`Download ${popupInfo.image.filename}`}>
                  <Download size={16} />
                </Href>
              </section>
            </div>
          </Popup>
        )}
      </MapGL>
    </div>
  );
};

export default MapPage;
