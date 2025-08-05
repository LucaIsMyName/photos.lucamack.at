import { CONFIG } from "../../../config";
import { cn } from "../../../utils/cn";
import MapGL, { Marker } from "react-map-gl/mapbox";
import { useTheme } from "../../../contexts/ThemeContext";
import SeoLink from "../../ui/SeoLink";
import Href from "../../ui/Href";
import { slugify } from "../../../utils/slugify";
import { type Gallery } from "../../../types";

const Map = ({ image, gallery }: { image: any; gallery: Gallery }) => {
  const { theme } = useTheme();
  return (
    <div className="flex-1 mb-8 md:mb-4">
      <h2 className="text-base mb-2">Standort & Karte</h2>
      <p className="text-xs mb-2 font-mono text-[11px]">{`${image.latitude.toFixed(4)}, ${image.longitude.toFixed(4)}`}</p>
      <div className="border border-neutral-500/20 aspect-square w-full overflow-hidden">
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
        <SeoLink
          to={`/app/map?image=${slugify(image.filename.replace(/\.[^/.]+$/, ""))}&gallery=${gallery.slug}`}
          noIndex={true}
          noFollow={true}
          className={cn("text-sm inline-block underline underline-offset-4 inline-block ", theme === "dark" ? "text-white decoration-red-300 hover:text-red-300 hover:decoration-red-300" : "text-black decoration-red-500 hover:text-red-600")}>
          Auf der Karte anzeigen
        </SeoLink>
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
  );
};

export default Map;
