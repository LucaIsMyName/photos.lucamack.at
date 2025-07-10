import { useState, useMemo, useEffect, useRef } from "react";
import Map, { Marker, Popup, type MapRef } from "react-map-gl/mapbox";

import "mapbox-gl/dist/mapbox-gl.css";
import { galleries } from "../galleries";
import type { Gallery, Image as ImageType } from "../types";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

interface GeotaggedImage {
  gallery: Gallery;
  image: ImageType;
}

const MapPage = () => {
  const mapRef = useRef<MapRef>(null);
  const { theme } = useTheme();
  const [popupInfo, setPopupInfo] = useState<GeotaggedImage | null>(null);

  const geotaggedImages = useMemo(() => {
    const images: GeotaggedImage[] = [];
    galleries.forEach((gallery) => {
      gallery.images?.forEach((image) => {
        if (image.latitude && image.longitude) {
          images.push({ gallery, image });
        }
      });
    });
    return images;
  }, []);

  useEffect(() => {
    if (geotaggedImages.length === 0 || !mapRef.current) {
      return;
    }

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
  }, [geotaggedImages]);

  return (
    <div className="h-full w-full">
      <title>Luca Mack | Photo Map</title>
      <meta
        name="description"
        content="A map of all geotagged photos."
      />
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 0,
          latitude: 20,
          zoom: 1,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={theme === "light" ? "mapbox://styles/luma1992/cmcrp4svj045g01r17lvz89bx" : "mapbox://styles/luma1992/cmcrpf414029501qx4b4fa2jx"}
        mapboxAccessToken={MAPBOX_TOKEN}>
        {geotaggedImages.map((item, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={item.image.longitude!}
            latitude={item.image.latitude!}
            anchor="center"
            onClick={(e) => {
              e.originalEvent?.stopPropagation();
              setPopupInfo(item);
            }}>
            <div className={`h-3 w-3 rounded-full border-2 ${theme === "light" ? "border-red-900 bg-red-600" : "border-gray-950 bg-red-300"}`} />
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
            <div className={`bg-white text-black`}>
              <Link to={`/gallery/${popupInfo.gallery.slug}`}>
                <img
                  className="w-32"
                  src={`/content/galleries/${popupInfo.gallery.slug}/${popupInfo.image.filename.replace(/\.(jpg|jpeg|png|heic)$/i, "-640w.jpg")}`}
                  alt={popupInfo.gallery.title}
                />
                <p className="font-geist pt-2 text-center text-sm font-semibold">{popupInfo.gallery.title}</p>
              </Link>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapPage;
