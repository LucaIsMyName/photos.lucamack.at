import { useState, useMemo, useEffect, useRef } from "react";
import type { Feature, Polygon } from "geojson";
import { useTheme } from "../../contexts/ThemeContext";
import { cn } from "../../utils/cn";
import { getImageUrl } from "../../utils/image";
import MapGL, { Marker, Source, Layer, type MapRef } from "react-map-gl/mapbox";
import { Link, useSearchParams } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import { slugify } from "../../utils/slugify";
import { galleries } from "../../galleries";
import { CONFIG } from "../../config";
import type { Gallery, Image as ImageType } from "../../types";
import SeoHead from "../ui/SeoHead";
import * as Slider from "@radix-ui/react-slider";
import { MapPin, Palette, X } from "lucide-react";

// Define the color ranges with their RGB values
const colorRanges = [
  // Reds
  { name: "Red", minRgb: [150, 0, 0], maxRgb: [255, 100, 100], hex: "#ff0000" },
  { name: "Dark Red", minRgb: [100, 0, 0], maxRgb: [150, 50, 50], hex: "#8b0000" },
  { name: "Crimson", minRgb: [180, 0, 30], maxRgb: [220, 60, 80], hex: "#dc143c" },

  // Oranges
  { name: "Orange", minRgb: [200, 100, 0], maxRgb: [255, 200, 100], hex: "#ff8000" },
  { name: "HelLight Orange", minRgb: [230, 150, 50], maxRgb: [255, 220, 150], hex: "#ffa500" },
  { name: "Peach", minRgb: [230, 160, 120], maxRgb: [255, 210, 180], hex: "#ffcba4" },

  // Yellows
  { name: "Yellow", minRgb: [200, 200, 0], maxRgb: [255, 255, 100], hex: "#ffff00" },
  { name: "Gold", minRgb: [200, 170, 0], maxRgb: [255, 215, 50], hex: "#ffd700" },
  { name: "Khaki", minRgb: [180, 180, 120], maxRgb: [240, 230, 140], hex: "#f0e68c" },

  // Greens
  { name: "Green", minRgb: [0, 150, 0], maxRgb: [100, 255, 100], hex: "#00ff00" },
  { name: "Forrest Green", minRgb: [0, 100, 0], maxRgb: [34, 139, 34], hex: "#228b22" },
  { name: "Olive", minRgb: [80, 100, 0], maxRgb: [128, 128, 0], hex: "#808000" },
  { name: "Mint", minRgb: [150, 230, 180], maxRgb: [200, 255, 220], hex: "#98fb98" },

  // Blues
  { name: "Cyan", minRgb: [0, 200, 200], maxRgb: [100, 255, 255], hex: "#00ffff" },
  { name: "Sky Blue", minRgb: [100, 150, 230], maxRgb: [135, 206, 250], hex: "#87ceeb" },
  { name: "Blue", minRgb: [0, 0, 150], maxRgb: [100, 100, 255], hex: "#0000ff" },
  { name: "Navy", minRgb: [0, 0, 80], maxRgb: [0, 0, 128], hex: "#000080" },
  { name: "Teal", minRgb: [0, 100, 100], maxRgb: [0, 128, 128], hex: "#008080" },

  // Purples
  { name: "Purple", minRgb: [100, 0, 150], maxRgb: [200, 100, 255], hex: "#8000ff" },
  { name: "Lavender", minRgb: [180, 150, 220], maxRgb: [230, 190, 255], hex: "#e6e6fa" },
  { name: "Magenta", minRgb: [200, 0, 200], maxRgb: [255, 0, 255], hex: "#ff00ff" },
  { name: "Indigo", minRgb: [50, 0, 100], maxRgb: [75, 0, 130], hex: "#4b0082" },

  // Pinks
  { name: "Pink", minRgb: [200, 100, 150], maxRgb: [255, 200, 200], hex: "#ff80c0" },
  { name: "Hot Pink", minRgb: [220, 50, 150], maxRgb: [255, 105, 180], hex: "#ff69b4" },
  { name: "Rose", minRgb: [230, 150, 180], maxRgb: [255, 190, 200], hex: "#ffc0cb" },

  // Browns
  { name: "Brown", minRgb: [100, 50, 0], maxRgb: [150, 100, 50], hex: "#964b00" },
  { name: "Tan", minRgb: [180, 150, 100], maxRgb: [210, 180, 140], hex: "#d2b48c" },
  { name: "Beige", minRgb: [220, 200, 170], maxRgb: [245, 245, 220], hex: "#f5f5dc" },

  // Neutrals
  { name: "Black", minRgb: [0, 0, 0], maxRgb: [50, 50, 50], hex: "#000000" },
  { name: "Gray", minRgb: [100, 100, 100], maxRgb: [200, 200, 200], hex: "#808080" },
  { name: "Silver", minRgb: [170, 170, 170], maxRgb: [220, 220, 220], hex: "#c0c0c0" },
  { name: "White", minRgb: [200, 200, 200], maxRgb: [255, 255, 255], hex: "#ffffff" },
];

// Helper function to check if a color is within a range
const isColorInRange = (color: [number, number, number], minColor: [number, number, number], maxColor: [number, number, number], tolerance: number = 0): boolean => {
  return color[0] >= minColor[0] - tolerance && color[0] <= maxColor[0] + tolerance && color[1] >= minColor[1] - tolerance && color[1] <= maxColor[1] + tolerance && color[2] >= minColor[2] - tolerance && color[2] <= maxColor[2] + tolerance;
};

// Helper function to calculate distance between two coordinates
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

interface FilteredImage extends Omit<ImageType, "gallery"> {
  gallery: Gallery;
}

const Filter = () => {
  const { theme } = useTheme();
  const mapRef = useRef<MapRef>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filter states from URL params
  const initialColor = searchParams.get("color");
  const initialColorTolerance = searchParams.get("tolerance") ? parseInt(searchParams.get("tolerance")!) : 15;
  const initialLat = searchParams.get("lat") ? parseFloat(searchParams.get("lat")!) : null;
  const initialLng = searchParams.get("lng") ? parseFloat(searchParams.get("lng")!) : null;

  // Maximum radius in km
  const MAX_RADIUS = 200;

  // Convert between slider value (0-100) and actual radius (1-MAX_RADIUS km)
  // Using exponential growth for better control at smaller values
  const sliderToRadius = (sliderValue: number): number => {
    // Ensure slider value is between 0 and 100
    const normalizedValue = Math.max(0, Math.min(100, sliderValue)) / 100;
    // Exponential growth formula: y = a * e^(b*x) - a + 1
    // Where a is chosen so that when x=1, y=MAX_RADIUS
    const a = (MAX_RADIUS - 1) / (Math.E - 1);
    return Math.round(a * Math.exp(normalizedValue) - a + 1);
  };

  const radiusToSlider = (radius: number): number => {
    // Ensure radius is between 1 and MAX_RADIUS
    const normalizedRadius = Math.max(1, Math.min(MAX_RADIUS, radius));
    // Inverse of the exponential growth formula
    const a = (MAX_RADIUS - 1) / (Math.E - 1);
    return Math.round(Math.log((normalizedRadius - 1 + a) / a) * 100);
  };

  const initialRadius = searchParams.get("radius") ? parseInt(searchParams.get("radius")!) : 25;

  // Filter states
  const [selectedColor, setSelectedColor] = useState<string | null>(initialColor);
  const [colorTolerance, setColorTolerance] = useState<number>(initialColorTolerance);
  const [mapPin, setMapPin] = useState<{ lat: number; lng: number } | null>(initialLat && initialLng ? { lat: initialLat, lng: initialLng } : null);
  const [mapRadius, setMapRadius] = useState<number>(initialRadius); // km
  const [sliderValue, setSliderValue] = useState<number>(radiusToSlider(initialRadius)); // 0-100 slider value

  // View state for the map
  const [viewState, setViewState] = useState({
    longitude: 16,
    latitude: 48,
    zoom: 3,
  });

  // Results state
  const [filteredImages, setFilteredImages] = useState<FilteredImage[]>([]);

  // Create a GeoJSON circle for the map radius
  const radiusCircleGeoJSON = useMemo<Feature<Polygon> | null>(() => {
    if (!mapPin) return null;

    // Convert radius from km to meters
    const radiusInMeters = mapRadius * 1000;

    // Create a circle using turf.js approximation
    // We'll create a simple polygon with points around the center
    const points = 64; // Number of points to approximate the circle
    const coordinates: [number, number][] = [];

    for (let i = 0; i < points; i++) {
      const angle = (i / points) * 2 * Math.PI;
      // Convert radius to approximate degrees (very rough approximation)
      // More accurate would be to use turf.js destination function
      const latOffset = (radiusInMeters / 111000) * Math.sin(angle);
      const lngOffset = (radiusInMeters / (111000 * Math.cos(mapPin.lat * (Math.PI / 180)))) * Math.cos(angle);

      coordinates.push([mapPin.lng + lngOffset, mapPin.lat + latOffset]);
    }

    // Close the polygon
    coordinates.push(coordinates[0]);

    return {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [coordinates],
      },
      properties: {},
    };
  }, [mapPin, mapRadius]);

  // Update URL when filter states change
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedColor) {
      params.set("color", selectedColor);
      params.set("tolerance", colorTolerance.toString());
    }

    if (mapPin) {
      params.set("lat", mapPin.lat.toString());
      params.set("lng", mapPin.lng.toString());
      params.set("radius", mapRadius.toString());
    }

    // Only update if there are actual filters applied
    if (params.toString()) {
      setSearchParams(params, { replace: true });
    } else if (searchParams.toString()) {
      // Clear URL params if no filters are applied but URL has params
      setSearchParams({}, { replace: true });
    }
  }, [selectedColor, colorTolerance, mapPin, mapRadius, setSearchParams, searchParams]);

  // Collect all images with their gallery information
  const allImages = useMemo(() => {
    const images: FilteredImage[] = [];
    galleries.forEach((gallery) => {
      gallery.images?.forEach((image) => {
        images.push({ ...image, gallery } as unknown as FilteredImage);
      });
    });
    return images;
  }, []);

  // Apply filters when any filter criteria changes
  useEffect(() => {
    let results = [...allImages];

    // Apply color filter if selected
    if (selectedColor) {
      const selectedRange = colorRanges.find((range) => range.name === selectedColor);
      if (selectedRange) {
        results = results.filter((image) => {
          if (!image.colorData?.dominantColors) return false;

          // Check if any dominant color falls within the selected range
          return image.colorData.dominantColors.some((color) => {
            // Ensure rgb is a tuple with exactly 3 elements
            const rgb: [number, number, number] = [Number(color.rgb[0]), Number(color.rgb[1]), Number(color.rgb[2])];

            return isColorInRange(rgb, selectedRange.minRgb as [number, number, number], selectedRange.maxRgb as [number, number, number], colorTolerance);
          });
        });
      }
    }

    // Apply map location filter if pin is set
    if (mapPin) {
      results = results.filter((image) => {
        if (!image.latitude || !image.longitude) return false;

        const distance = calculateDistance(mapPin.lat, mapPin.lng, image.latitude, image.longitude);

        return distance <= mapRadius;
      });
    }

    // Show all matching images (no limit)

    setFilteredImages(results);
  }, [selectedColor, colorTolerance, mapPin, mapRadius, allImages]);

  // Handle map click to set pin location
  const handleMapClick = (event: any) => {
    setMapPin({
      lat: event.lngLat.lat,
      lng: event.lngLat.lng,
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedColor(null);
    setColorTolerance(30);
    setMapPin(null);
    setMapRadius(5);
    setSliderValue(radiusToSlider(5));
  };

  return (
    <div className="min-h-screen w-full">
      <SeoHead
        title={`Farb & Ort-Filter | ${CONFIG.author}`}
        description="Filtere Fotos anhand von Farbe und / oder Standort"
      />

      <div className={`py-4 md:py-8 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <h1 className={cn(CONFIG.theme.headline.one, `${theme === "dark" ? "text-white" : "text-black"} mb-6`)}>Filter</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[clamp(200px,22.5vw,400px)_1fr] gap-6">
          {/* Filters sidebar - sticky on desktop */}
          <div className="space-y-6 lg:sticky lg:top-4 lg:self-start">
            {/* Color filter */}
            <div className={`p-4 ${CONFIG.theme.border.default}`}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Palette size={12} />
                  <h2 className="text-[11px] font-mono">Farbfilter</h2>
                </div>

                {selectedColor && (
                  <button
                    onClick={() => setSelectedColor(null)}
                    className="text-xs opacity-70 hover:opacity-100"
                    aria-label="Clear color filter">
                    <X size={12} />
                  </button>
                )}
              </div>
              <p className="text-[11px] opacity-50 mb-4 leading-[1] mt-2">Wähle eine Farbe und Toleranz um die Fotos danach zu Filtern</p>
              <div className="grid grid-cols-11 md:grid-cols-12 gap-1 mb-4">
                {colorRanges.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(selectedColor === color.name ? null : color.name)}
                    className={`w-full aspect-square border ${selectedColor === color.name ? "ring-1 ring-offset-1 " + (theme === "dark" ? "ring-white" : "ring-black") : ""}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name + " (" + color.hex + ")"}
                    aria-label={`Filter auf ${color.name + " (" + color.hex + ")"}`}
                  />
                ))}
              </div>

              <div className="mt-4">
                <label className={`text-[11px] font-mono mb-1 block ${!selectedColor ? "opacity-50" : ""}`}>Toleranz {selectedColor ? `(${colorTolerance}%)` : ""}</label>
                <StyledSlider
                  value={[colorTolerance]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(value) => setColorTolerance(value[0])}
                  disabled={!selectedColor}
                />
                <div className={`flex font-mono text-[11px] justify-between text-xs mt-1 ${!selectedColor ? "opacity-50" : ""}`}>
                  <span>Exakt</span>
                  <span>Ungenau</span>
                </div>
              </div>
            </div>

            {/* Map location filter */}
            <div className={`p-4 ${CONFIG.theme.border.default}`}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <MapPin size={12} />
                  <h2 className="text-[11px] font-mono">Ortfilter</h2>
                </div>
                {mapPin && (
                  <button
                    onClick={() => setMapPin(null)}
                    className="text-xs opacity-70 hover:opacity-100"
                    aria-label="Clear location filter">
                    <X size={12} />
                  </button>
                )}
              </div>
              <p className="text-[11px] opacity-50 mb-4 leading-[1] mt-2">Markiere einen Punkt auf der Karte und setze den Radius um die Fotos danach zu Filtern</p>
              <div className="h-[200px] mb-4 overflow-hidden !cursor-crosshair">
                <MapGL
                  {...viewState}
                  ref={mapRef}
                  onMove={(evt) => setViewState(evt.viewState)}
                  onClick={handleMapClick}
                  style={{ width: "100%", height: "100%" }}
                  mapStyle={theme === "dark" ? CONFIG.mapbox.style.dark : CONFIG.mapbox.style.light}
                  mapboxAccessToken={CONFIG.mapbox.accessToken}>
                  {mapPin && (
                    <>
                      {/* Marker for the center point */}
                      <Marker
                        longitude={mapPin.lng}
                        latitude={mapPin.lat}
                        anchor="bottom">
                        <div className="text-red-500 sr-only">
                          <div className={cn(`w-2 h-2 rotate-45 ${CONFIG.theme.border.default}`, theme === "dark" ? "bg-red-300" : "bg-red-600")}></div>
                        </div>
                      </Marker>

                      {/* Circle showing the radius */}
                      {radiusCircleGeoJSON && (
                        <Source
                          id="radius-circle"
                          type="geojson"
                          data={radiusCircleGeoJSON as Feature}>
                          <Layer
                            id="radius-circle-fill"
                            type="fill"
                            paint={{
                              "fill-color": theme === "dark" ? "#ff000033" : "#ff000022",
                              "fill-opacity": 0.5,
                            }}
                          />
                          <Layer
                            id="radius-circle-outline"
                            type="line"
                            paint={{
                              "line-color": theme === "dark" ? "#ff5555" : "#ff0000",
                              "line-width": 3,
                              "line-opacity": 0.7,
                            }}
                          />
                        </Source>
                      )}
                    </>
                  )}
                </MapGL>
              </div>

              <div className="mt-4">
                <label className={`text-[11px] font-mono mb-1 block ${!mapPin ? "opacity-50" : ""}`}>Radius {mapPin ? `(${mapRadius}km)` : ""}</label>
                <StyledSlider
                  value={[sliderValue]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => {
                    const newSliderValue = value[0];
                    setSliderValue(newSliderValue);
                    setMapRadius(sliderToRadius(newSliderValue));
                  }}
                  disabled={!mapPin}
                />
                <div className={` font-mono text-[11px] flex justify-between text-xs mt-1 ${!mapPin ? "opacity-50" : ""}`}>
                  <span>1km</span>
                  <span>{MAX_RADIUS}km</span>
                </div>
              </div>
            </div>

            {/* Filter controls */}
            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] font-mono">
                {filteredImages.length} {filteredImages.length === 1 ? "Foto" : "Fotos"} gefunden
              </span>
              <button
                onClick={clearFilters}
                className={`px-4 py-2 font-mono text-[11px] ${CONFIG.theme.border.default} ${theme === "dark" ? "" : ""}`}>
                Alle Filter löschen
              </button>
            </div>
          </div>

          {/* Results Grid */}
          <div>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {filteredImages.map((image) => (
                <Link
                  key={`${image.gallery.slug}-${image.filename}`}
                  to={`/gallery/${image.gallery.slug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}
                  className={`block overflow-hidden `}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={getImageUrl(image.gallery.slug, image.filename.replaceAll(" ", "_"), 380)}
                      alt={image.alt || image.filename.replaceAll("_", " ").replace(/\.[^/.]+$/, "")}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 sr-only">
                    <h3 className="text-sm truncate">{image.filename.replaceAll("_", " ").replace(/\.[^/.]+$/, "")}</h3>
                    <p className="text-xs opacity-70 truncate mt-1">{image.gallery.title}</p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="">
                <p className="text-lg mb-2">Keine Fotos für die Filter gefunden</p>
                <p className="text-sm opacity-70">Versuche die Filter kritierien zu verändern</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Styled slider component
const StyledSlider = (props: Slider.SliderProps) => {
  const { theme } = useTheme();
  const { disabled } = props;

  return (
    <Slider.Root
      className={`relative flex items-center select-none touch-none w-full h-5 ${disabled ? "opacity-50" : ""}`}
      {...props}>
      <Slider.Track className={`${disabled ? "" : "cursor-pointer"} relative grow h-[3px] ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"}`}>
        <Slider.Range className={`absolute h-full ${theme === "dark" ? "bg-white" : "bg-black"}`} />
      </Slider.Track>
      <Slider.Thumb
        className={cn(disabled ? "cursor-default" : "cursor-grab active:cursor-grabbing", "block w-4 h-4 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2", theme === "dark" ? "bg-white border-white focus:ring-offset-black focus:ring-red-300" : "bg-black border-black focus:ring-offset-white focus:ring-red-600")}
        aria-label="Adjust value"
      />
    </Slider.Root>
  );
};

export default Filter;
