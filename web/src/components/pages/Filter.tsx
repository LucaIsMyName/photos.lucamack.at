import { useState, useMemo, useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { cn } from "../../utils/cn";
import { getImageUrl } from "../../utils/image";
import MapGL, { Marker, type MapRef } from "react-map-gl/mapbox";
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
  { name: "Red", minRgb: [150, 0, 0], maxRgb: [255, 100, 100], hex: "#ff0000" },
  { name: "Orange", minRgb: [200, 100, 0], maxRgb: [255, 200, 100], hex: "#ff8000" },
  { name: "Yellow", minRgb: [200, 200, 0], maxRgb: [255, 255, 100], hex: "#ffff00" },
  { name: "Green", minRgb: [0, 150, 0], maxRgb: [100, 255, 100], hex: "#00ff00" },
  { name: "Cyan", minRgb: [0, 200, 200], maxRgb: [100, 255, 255], hex: "#00ffff" },
  { name: "Blue", minRgb: [0, 0, 150], maxRgb: [100, 100, 255], hex: "#0000ff" },
  { name: "Purple", minRgb: [100, 0, 150], maxRgb: [200, 100, 255], hex: "#8000ff" },
  { name: "Pink", minRgb: [200, 100, 150], maxRgb: [255, 200, 200], hex: "#ff80c0" },
  { name: "Brown", minRgb: [100, 50, 0], maxRgb: [150, 100, 50], hex: "#964b00" },
  { name: "Black", minRgb: [0, 0, 0], maxRgb: [50, 50, 50], hex: "#000000" },
  { name: "Gray", minRgb: [100, 100, 100], maxRgb: [200, 200, 200], hex: "#808080" },
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
  const initialColor = searchParams.get('color');
  const initialColorTolerance = searchParams.get('tolerance') ? parseInt(searchParams.get('tolerance')!) : 15;
  const initialLat = searchParams.get('lat') ? parseFloat(searchParams.get('lat')!) : null;
  const initialLng = searchParams.get('lng') ? parseFloat(searchParams.get('lng')!) : null;
  const initialRadius = searchParams.get('radius') ? parseInt(searchParams.get('radius')!) : 25;

  // Filter states
  const [selectedColor, setSelectedColor] = useState<string | null>(initialColor);
  const [colorTolerance, setColorTolerance] = useState<number>(initialColorTolerance);
  const [mapPin, setMapPin] = useState<{ lat: number; lng: number } | null>(
    initialLat && initialLng ? { lat: initialLat, lng: initialLng } : null
  );
  const [mapRadius, setMapRadius] = useState<number>(initialRadius); // km

  // View state for the map
  const [viewState, setViewState] = useState({
    longitude: 16,
    latitude: 48,
    zoom: 3,
  });

  // Results state
  const [filteredImages, setFilteredImages] = useState<FilteredImage[]>([]);
  
  // Update URL when filter states change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedColor) {
      params.set('color', selectedColor);
      params.set('tolerance', colorTolerance.toString());
    }
    
    if (mapPin) {
      params.set('lat', mapPin.lat.toString());
      params.set('lng', mapPin.lng.toString());
      params.set('radius', mapRadius.toString());
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
  };

  return (
    <div className="min-h-screen w-full">
      <SeoHead
        title="Farb & Ort-Filter | photos.lucamack.at"
        description="Filter images by color and location"
      />

      <div className={`p-4 md:p-8 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <h1 className={cn(CONFIG.theme.headline.one, `${theme === "dark" ? "text-white" : "text-black"} mb-6`)}>Farb & Ort-Filter</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[clamp(200px,22.5vw,400px)_1fr] gap-6">
          {/* Filters sidebar - sticky on desktop */}
          <div className="space-y-6 md:sticky md:top-8 md:self-start">
            {/* Color filter */}
            <div className={`p-4 ${CONFIG.theme.border.default}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Palette size={12} />
                  <h2 className="text-[11px] font-mono">Farbfilter</h2>
                </div>
                {selectedColor && (
                  <button 
                    onClick={() => setSelectedColor(null)} 
                    className="text-xs opacity-70 hover:opacity-100"
                    aria-label="Clear color filter"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-9 gap-1 mb-4">
                {colorRanges.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(selectedColor === color.name ? null : color.name)}
                    className={`w-full aspect-square border ${selectedColor === color.name ? "ring-1 ring-offset-1 " + (theme === "dark" ? "ring-white" : "ring-black") : ""}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Filter by ${color.name}`}
                  />
                ))}
              </div>

              <div className="mt-4">
                <label className={`text-sm mb-1 block ${!selectedColor ? 'opacity-50' : ''}`}>
                  Toleranz {selectedColor ? `(${colorTolerance}%)` : ''}
                </label>
                <StyledSlider
                  value={[colorTolerance]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(value) => setColorTolerance(value[0])}
                  disabled={!selectedColor}
                />
                <div className={`flex justify-between text-xs mt-1 ${!selectedColor ? 'opacity-50' : ''}`}>
                  <span>Exakt</span>
                  <span>Ungenau</span>
                </div>
              </div>
            </div>

            {/* Map location filter */}
            <div className={`p-4 ${CONFIG.theme.border.default}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={12} />
                  <h2 className="text-[11px] font-mono">Ortfilter</h2>
                </div>
                {mapPin && (
                  <button 
                    onClick={() => setMapPin(null)} 
                    className="text-xs opacity-70 hover:opacity-100"
                    aria-label="Clear location filter"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              <div className="h-[200px] mb-4 overflow-hidden">
                <MapGL
                  {...viewState}
                  ref={mapRef}
                  onMove={(evt) => setViewState(evt.viewState)}
                  onClick={handleMapClick}
                  style={{ width: "100%", height: "100%" }}
                  mapStyle={theme === "dark" ? CONFIG.mapbox.style.dark : CONFIG.mapbox.style.light}
                  mapboxAccessToken={CONFIG.mapbox.accessToken}>
                  {mapPin && (
                    <Marker
                      longitude={mapPin.lng}
                      latitude={mapPin.lat}
                      anchor="bottom">
                      <div className="text-red-500">
                        <div className={cn(`w-2 h-2 rotate-45 ${CONFIG.theme.border.default}`, theme === "dark" ? "bg-red-300" : "bg-red-600")}></div>
                      </div>
                    </Marker>
                  )}
                </MapGL>
              </div>

              <div className="mt-4">
                <label className={`text-sm mb-1 block ${!mapPin ? 'opacity-50' : ''}`}>
                  Radius {mapPin ? `(${mapRadius}km)` : ''}
                </label>
                <StyledSlider
                  value={[mapRadius]}
                  min={1}
                  max={100}
                  step={1}
                  onValueChange={(value) => setMapRadius(value[0])}
                  disabled={!mapPin}
                />
                <div className={`flex justify-between text-xs mt-1 ${!mapPin ? 'opacity-50' : ''}`}>
                  <span>1km</span>
                  <span>100km</span>
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
                className={`px-4 py-2 text-sm ${CONFIG.theme.border.default} ${theme === "dark" ? "" : ""}`}>
                Alle Filter löschen
              </button>
            </div>
          </div>

          {/* Results Grid */}
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <Link
                  key={`${image.gallery.slug}-${image.filename}`}
                  to={`/gallery/${image.gallery.slug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}
                  className={`block overflow-hidden ${CONFIG.theme.border.default}`}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={getImageUrl(image.gallery.slug, image.filename.replaceAll(" ", "_"), 380)}
                      alt={image.alt || image.filename.replaceAll("_", " ").replace(/\.[^/.]+$/, "")}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
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
      className={`relative flex items-center select-none touch-none w-full h-5 ${disabled ? 'opacity-50' : ''}`}
      {...props}>
      <Slider.Track className={`${disabled ? '' : 'cursor-pointer'} relative grow h-[3px] ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"}`}>
        <Slider.Range className={`absolute h-full ${theme === "dark" ? "bg-white" : "bg-black"}`} />
      </Slider.Track>
      <Slider.Thumb
        className={cn(
          disabled ? "cursor-default" : "cursor-grab active:cursor-grabbing", 
          "block w-4 h-4 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2", 
          theme === "dark" ? "bg-white border-white focus:ring-offset-black focus:ring-red-300" : "bg-black border-black focus:ring-offset-white focus:ring-red-600"
        )}
        aria-label="Adjust value"
      />
    </Slider.Root>
  );
};

export default Filter;
