import { useState, useMemo } from "react";
import Map, { Marker, Popup, type MarkerEvent } from 'react-map-gl/mapbox';

import "mapbox-gl/dist/mapbox-gl.css";
import { galleries } from "../galleries";
import type { Gallery, Image as ImageType } from "../types";
import { Link } from "react-router-dom";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

interface GeotaggedImage {
  gallery: Gallery;
  image: ImageType;
}

const MapPage = () => {
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

  return (
    <div className="h-full w-full">
      <title>Luca Mack | Photo Map</title>
      <meta
        name="description"
        content="A map of all geotagged photos."
      />
      <Map
        initialViewState={{
          longitude: 10,
          latitude: 50,
          zoom: 4,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}>
        {geotaggedImages.map((item, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={item.image.longitude!}
            latitude={item.image.latitude!}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent?.stopPropagation();
              setPopupInfo(item);
            }}
          />
        ))}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.image.longitude)}
            latitude={Number(popupInfo.image.latitude)}
            onClose={() => setPopupInfo(null)}>
            <div>
              <Link to={`/gallery/${popupInfo.gallery.slug}`}>
                <img
                  width="100"
                  src={`/content/${popupInfo.gallery.slug}/${popupInfo.image.filename}`}
                  alt={popupInfo.gallery.title}
                />
                <p>{popupInfo.gallery.title}</p>
              </Link>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapPage;
