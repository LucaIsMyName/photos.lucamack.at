import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { getImageUrl } from "../../utils/image";
import { cn } from "../../utils/cn";
import "mapbox-gl/dist/mapbox-gl.css";
import { galleries } from "../../galleries";
import { useTheme } from "../../contexts/ThemeContext";
import { CONFIG } from "../../config";
import { groupImagesByCountry } from "../../utils/geocoding";
import { slugify } from "../../utils/slugify";
import { parseCreateDate } from "../../utils/date";
import MapGL, { Marker, type MapRef } from "react-map-gl/mapbox";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from "recharts";
import type { Image } from "../../types";
import SeoHead from "../ui/SeoHead";
import PhotoCard from "../layout/statistics-page/PhotoCard";

type ImageType = Image & { gallery: string; latitude: number; longitude: number };
type CountryData = { name: string; value: number }[];

const Statistics = () => {
  const { theme } = useTheme();
  const [countryData, setCountryData] = useState<CountryData>([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const mapRef = useRef<MapRef>(null);

  const allImages = useMemo(() => {
    return galleries.flatMap((gallery) =>
      gallery.images.map((image) => ({
        ...image,
        gallery: gallery.slug,
      }))
    );
  }, []);

  const allImagesWithGps = useMemo(() => {
    return allImages.filter((image) => image.latitude != null && image.longitude != null) as ((typeof allImages)[0] & { latitude: number; longitude: number })[];
  }, [allImages]);

  useEffect(() => {
    const fetchCountryData = async () => {
      setIsLoadingCountries(true);
      const countryStats = await groupImagesByCountry(allImagesWithGps);
      const formattedData = Object.entries(countryStats)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value);
      setCountryData(formattedData);
      setIsLoadingCountries(false);
    };

    if (allImagesWithGps.length > 0) {
      fetchCountryData();
    }
  }, [allImagesWithGps]);

  const handleMapLoad = useCallback(() => {
    if (!mapRef.current || allImagesWithGps.length === 0) return;

    if (allImagesWithGps.length === 1) {
      // If only one image, center on it with a reasonable zoom
      mapRef.current.flyTo({
        center: [allImagesWithGps[0].longitude, allImagesWithGps[0].latitude],
        zoom: 10,
        duration: 1000,
      });
    } else {
      // Calculate bounds to fit all images
      const longitudes = allImagesWithGps.map((img) => img.longitude);
      const latitudes = allImagesWithGps.map((img) => img.latitude);

      const minLng = Math.min(...longitudes);
      const maxLng = Math.max(...longitudes);
      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);

      // Fit bounds with padding
      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 80, duration: 1000 }
      );
    }
  }, [allImagesWithGps]);

  const stats = useMemo<{
    weekdayData: { name: string; Fotos: number }[];
    hourData: { name: string; Fotos: number }[];
    extremePhotos: {
      north?: ImageType;
      south?: ImageType;
      east?: ImageType;
      west?: ImageType;
    };
    galleryData: { name: string; value: number }[];
    seasonData: { name: string; Fotos: number }[];
    monthData: { name: string; Fotos: number }[];
    averageCoords: { latitude: number; longitude: number };
    dayWithMostPhotos: { date: Date; count: number } | null;
    dailyActivityData: { date: string; Fotos: number }[];
    // Color analysis data
    colorPalette: { color: string; count: number }[];
    colorfulPhotos: ((typeof allImages)[0] & { colorfulness: number })[];
    monochromaticPhotos: ((typeof allImages)[0] & { colorfulness: number })[];
    seasonalColors: { season: string; colors: string[] }[];
  }>(() => {
    const galleryCounts: { [key: string]: number } = {};
    galleries.forEach((gallery) => {
      galleryCounts[gallery.title] = gallery.images.length;
    });

    const galleryData = Object.entries(galleryCounts).map(([name, value]) => ({ name, value }));

    let averageCoords = { latitude: 0, longitude: 0 };
    if (allImagesWithGps.length > 0) {
      const totalLat = allImagesWithGps.reduce((sum, img) => sum + img.latitude, 0);
      const totalLon = allImagesWithGps.reduce((sum, img) => sum + img.longitude, 0);
      averageCoords = {
        latitude: totalLat / allImagesWithGps.length,
        longitude: totalLon / allImagesWithGps.length,
      };
    }

    let extremePhotos: {
      north?: (typeof allImagesWithGps)[0];
      south?: (typeof allImagesWithGps)[0];
      east?: (typeof allImagesWithGps)[0];
      west?: (typeof allImagesWithGps)[0];
    } = {};

    if (allImagesWithGps.length > 0) {
      // Fix the rgb type to match the expected [number, number, number] tuple
      const fixedImage = { ...allImagesWithGps[0] };
      if (fixedImage.colorData?.dominantColors) {
        fixedImage.colorData.dominantColors = fixedImage.colorData.dominantColors.map((color) => ({
          ...color,
          rgb: color.rgb.slice(0, 3) as [number, number, number],
        }));
      }

      extremePhotos.north = fixedImage as any;
      extremePhotos.south = fixedImage as any;
      extremePhotos.east = fixedImage as any;
      extremePhotos.west = fixedImage as any;

      for (const image of allImagesWithGps) {
        // Create a fixed copy of the image with proper rgb type
        const fixedImage = { ...image };
        if (fixedImage.colorData?.dominantColors) {
          fixedImage.colorData.dominantColors = fixedImage.colorData.dominantColors.map((color) => ({
            ...color,
            rgb: color.rgb.slice(0, 3) as [number, number, number],
          }));
        }

        if (image.latitude > extremePhotos.north!.latitude) {
          extremePhotos.north = fixedImage as any;
        }
        if (image.latitude < extremePhotos.south!.latitude) {
          extremePhotos.south = fixedImage as any;
        }
        if (image.longitude > extremePhotos.east!.longitude) {
          extremePhotos.east = fixedImage as any;
        }
        if (image.longitude < extremePhotos.west!.longitude) {
          extremePhotos.west = fixedImage as any;
        }
      }
    }
    const weekdayCounts = Array(7).fill(0); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hourCounts = Array(24).fill(0); // 0-23

    allImages.forEach((image) => {
      if (!image.createDate) return;
      const date = parseCreateDate(image.createDate);
      if (!date) return;
      weekdayCounts[date.getDay()]++;
      hourCounts[date.getHours()]++;
    });

    const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

    const weekdayData = weekdayCounts.map((count, index) => ({
      name: weekdays[index],
      Fotos: count,
    }));

    const hourData = hourCounts.map((count, index) => ({
      name: `${index.toString().padStart(2, "0")}:00`,
      Fotos: count,
    }));

    const seasonCounts = { Frühling: 0, Sommer: 0, Herbst: 0, Winter: 0 };

    allImages.forEach((image) => {
      if (!image.createDate) return;
      const date = parseCreateDate(image.createDate);
      if (!date) return;

      const month = date.getMonth() + 1; // getMonth() is 0-indexed
      if (month >= 3 && month <= 5) {
        seasonCounts["Frühling"]++;
      } else if (month >= 6 && month <= 8) {
        seasonCounts["Sommer"]++;
      } else if (month >= 9 && month <= 11) {
        seasonCounts["Herbst"]++;
      } else {
        // Dec, Jan, Feb
        seasonCounts["Winter"]++;
      }
    });

    const seasonData = Object.entries(seasonCounts).map(([name, count]) => ({
      name,
      Fotos: count,
    }));

    const monthCounts = Array(12).fill(0);
    allImages.forEach((image) => {
      if (!image.createDate) return;
      const date = parseCreateDate(image.createDate);
      if (!date) return;
      monthCounts[date.getMonth()]++;
    });

    const monthNames = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    const monthData = monthCounts.map((count, index) => ({
      name: monthNames[index],
      Fotos: count,
    }));

    // Calculate the day with most photos
    const dayPhotoCounts = new Map<string, { count: number; date: Date }>();

    allImages.forEach((image) => {
      if (!image.createDate) return;
      const date = parseCreateDate(image.createDate);
      if (!date) return;

      // Format as YYYY-MM-DD to group by day
      const dayKey = date.toISOString().split("T")[0];

      if (dayPhotoCounts.has(dayKey)) {
        dayPhotoCounts.get(dayKey)!.count++;
      } else {
        dayPhotoCounts.set(dayKey, { count: 1, date });
      }
    });

    // Find the day with the most photos
    let dayWithMostPhotos: { date: Date; count: number } | null = null;

    dayPhotoCounts.forEach((data) => {
      if (!dayWithMostPhotos || data.count > dayWithMostPhotos.count) {
        dayWithMostPhotos = data;
      }
    });

    // Create daily activity data for line chart
    // First, find min and max dates
    let minDate: Date | null = null;
    let maxDate: Date | null = null;

    dayPhotoCounts.forEach((data) => {
      if (!minDate || data.date < minDate) minDate = data.date;
      if (!maxDate || data.date > maxDate) maxDate = data.date;
    });

    // Create array of all days between min and max
    const dailyActivityData: { date: string; Fotos: number }[] = [];

    if (minDate && maxDate) {
      const currentDate = new Date(minDate);
      const endDate = new Date(maxDate);
      while (currentDate <= endDate) {
        const dayKey = currentDate.toISOString().split("T")[0];
        const count = dayPhotoCounts.get(dayKey)?.count || 0;

        dailyActivityData.push({
          date: dayKey,
          Fotos: count,
        });

        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    // Color palette across all images
    const colorMap: Record<string, number> = {};
    allImages.forEach((image) => {
      // Use type assertion to handle colorData property
      const imageWithColor = image as ImageType | (any & { colorData?: { dominantColors: { hex: string; percentage: number }[]; colorfulness: number } });
      if (imageWithColor.colorData?.dominantColors) {
        imageWithColor.colorData.dominantColors.forEach((color: { hex: string; percentage: number }) => {
          colorMap[color.hex] = (colorMap[color.hex] || 0) + color.percentage;
        });
      }
    });

    const colorPalette = Object.entries(colorMap)
      .map(([color, count]) => ({ color, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20); // Top 20 colors

    // Most colorful and monochromatic photos
    const imagesWithColorfulness = allImages
      .filter((img) => {
        const imgWithColor = img as ImageType | (any & { colorData?: { colorfulness: number } });
        return imgWithColor.colorData?.colorfulness !== undefined;
      })
      .map((img) => {
        const imgWithColor = img as ImageType | (any & { colorData?: { colorfulness: number } });
        return { ...img, colorfulness: imgWithColor.colorData!.colorfulness };
      });

    const colorfulPhotos = [...imagesWithColorfulness].sort((a, b) => b.colorfulness - a.colorfulness).slice(0, 10);

    const monochromaticPhotos = [...imagesWithColorfulness].sort((a, b) => a.colorfulness - b.colorfulness).slice(0, 10);

    // Seasonal color trends
    const seasonalColors: { season: string; colors: string[] }[] = [
      { season: "Frühling", colors: [] },
      { season: "Sommer", colors: [] },
      { season: "Herbst", colors: [] },
      { season: "Winter", colors: [] },
    ];

    // Group colors by season
    allImages.forEach((image) => {
      const imageWithColor = image as any & { colorData?: { dominantColors?: { hex: string }[] } };
      if (!image.createDate || !imageWithColor.colorData?.dominantColors?.length) return;

      const date = parseCreateDate(image.createDate);
      if (!date) return;

      const month = date.getMonth() + 1;
      let seasonIndex = 0;

      if (month >= 3 && month <= 5) {
        seasonIndex = 0; // Spring
      } else if (month >= 6 && month <= 8) {
        seasonIndex = 1; // Summer
      } else if (month >= 9 && month <= 11) {
        seasonIndex = 2; // Fall
      } else {
        seasonIndex = 3; // Winter
      }

      // Add dominant color to season
      const dominantColor = imageWithColor.colorData.dominantColors[0]?.hex;
      if (dominantColor) {
        seasonalColors[seasonIndex].colors.push(dominantColor);
      }
    });

    // Calculate most common colors per season
    seasonalColors.forEach((season) => {
      const colorCounts: Record<string, number> = {};
      season.colors.forEach((color) => {
        colorCounts[color] = (colorCounts[color] || 0) + 1;
      });

      // Keep only top 5 colors
      season.colors = Object.entries(colorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([color]) => color);
    });

    return {
      weekdayData,
      hourData,
      extremePhotos,
      galleryData,
      seasonData,
      monthData,
      averageCoords,
      dayWithMostPhotos,
      dailyActivityData,
      colorPalette,
      colorfulPhotos,
      monochromaticPhotos,
      seasonalColors,
    } as any;
  }, [allImages, allImagesWithGps]);

  return (
    <div className={cn("p-4 md:pt-8 md:pl-8", theme === "dark" ? "bg-black text-white" : "bg-white text-black")}>
      <SeoHead
        title="Statistiken"
        description="Statistiken von allen Fotos & Fotoserien"
        noIndex={true}
      />
      <h1 className={cn(CONFIG.theme.headline.one, "mb-4")}>Statistiken</h1>

      <div className="mt-4">
        <h2 className="text-xl mb-4 sr-only">Geografische Extreme</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <PhotoCard
            title="Nördlichstes Foto"
            image={stats.extremePhotos.north}
          />
          <PhotoCard
            title="Südlichstes Foto"
            image={stats.extremePhotos.south}
          />
          <PhotoCard
            title="Östlichstes Foto"
            image={stats.extremePhotos.east}
          />
          <PhotoCard
            title="Westlichstes Foto"
            image={stats.extremePhotos.west}
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg ">Geografischer Mittelpunkt aller Fotos</h2>
        <p className="text-[11px] font-mono mb-4">
          {stats.averageCoords.latitude.toFixed(6)}, {stats.averageCoords.longitude.toFixed(6)}
        </p>
        <div
          className="border"
          style={{ height: "400px" }}>
          <MapGL
            ref={mapRef}
            initialViewState={{
              longitude: stats.averageCoords.longitude,
              latitude: stats.averageCoords.latitude,
              zoom: 5,
            }}
            onLoad={handleMapLoad}
            style={{ width: "100%", height: "100%" }}
            mapStyle={theme === "dark" ? CONFIG.mapbox.style.dark : CONFIG.mapbox.style.light}
            mapboxAccessToken={CONFIG.mapbox.accessToken}>
            {/* Center marker */}
            {/* Individual photo markers */}
            {allImagesWithGps.map((image, index) => (
              <Marker
                className="z-10"
                key={`photo-marker-${index}`}
                longitude={image.longitude}
                latitude={image.latitude}>
                <div className={cn(`w-3 h-3 blur-sm opacity-[0.1] rounded-full`, theme === "dark" ? "bg-red-300" : "bg-red-600")}></div>
              </Marker>
            ))}
            <Marker
              className="z-20"
              longitude={stats.averageCoords.longitude}
              latitude={stats.averageCoords.latitude}>
              <div className="">
                <div className="w-8 h-8 relative">
                  <div className={`w-[1.5px] h-full rounded-full ${theme === "dark" ? "bg-white" : "bg-black"} rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                  <div className={`w-[1.5px] h-full rounded-full ${theme === "dark" ? "bg-white" : "bg-black"} -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                </div>
              </div>
            </Marker>
          </MapGL>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl mb-4">Fotos pro Galerie</h2>
        <ResponsiveContainer
          width="100%"
          height={400}>
          <BarChart
            data={stats.galleryData}
            margin={{ top: 5, right: 0, left:0, bottom: 5 }}>
            <CartesianGrid
              strokeWidth={1}
              strokeDasharray="3 3"
              stroke={theme === "dark" ? "#fff" : "#000"}
            />
            <XAxis
              dataKey="name"
              stroke={theme === "dark" ? "#fff" : "#000"}
              angle={-45}
              textAnchor="end"
              height={100}
              interval={0}
            />
            <YAxis
              strokeWidth={1}
              stroke={theme === "dark" ? "#fff" : "#000"}
            />
            <Tooltip
              cursor={{ fill: "rgba(128, 128, 128, 0.2)" }}
              contentStyle={{
                backgroundColor: theme === "dark" ? "#222" : "#fff",
                border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
                borderRadius: "0px",
              }}
            />
            <Bar
              dataKey="value"
              name="Fotos"
              fill={theme === "dark" ? "#FCA5A5" : "#DC2626"}
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-4">Fotos pro Land</h2>
        <ResponsiveContainer
          width="100%"
          height={400}>
          {isLoadingCountries ? (
            <div className="flex items-center justify-center h-full">Lade Länderdaten...</div>
          ) : (
            <BarChart
              data={countryData}
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <CartesianGrid
                strokeWidth={1}
                strokeDasharray="3 3"
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <XAxis
                dataKey="name"
                stroke={theme === "dark" ? "#fff" : "#000"}
                angle={-45}
                textAnchor="end"
                height={100}
                interval={0}
              />
              <YAxis
                strokeWidth={1}
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <Tooltip
                cursor={{ fill: "rgba(128, 128, 128, 0.2)" }}
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#222" : "#fff",
                  border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
                  borderRadius: "0px",
                }}
              />
              <Bar
                dataKey="value"
                name="Fotos"
                fill={theme === "dark" ? "#FCA5A5" : "#DC2626"}
                radius={[0, 0, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Color Palette Section */}
      <div className={`mt-8 pt-8 ${CONFIG.theme.border.top}`}>
        <h2 className="text-xl mb-4">Farbpalette aller Serien</h2>
        <div className="flex flex-wrap gap-2">
          {stats.colorPalette.map((item, index) => (
            <div
              key={index}
              className="w-8 h-8 relative border"
              style={{ backgroundColor: item.color }}
              title={`${item.color} (${(item.count * 100).toFixed(1)}%)`}
            />
          ))}
        </div>
      </div>

      {/* Seasonal Color Trends */}
      <div className={`mt-8 pt-8 ${CONFIG.theme.border.top}`}>
        <h2 className="text-xl mb-4">Saisonale Farbtrends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.seasonalColors.map((season, index) => (
            <div
              key={index}
              className="">
              <h3 className="text-lg mb-2">{season.season}</h3>
              <div className="flex gap-2">
                {season.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-4 min-w-4 h-4 min-h-4 border"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Colorful Photos */}
      <div className={`my-8 py-8 ${CONFIG.theme.border.y}`}>
        <h2 className="text-xl mb-4">Farbenfrohste Fotos</h2>
        <div className="space-y-3">
          {stats.colorfulPhotos.map((image, index) => (
            <Link
              key={index}
              to={`/gallery/${image.gallery}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}
              className="flex items-center gap-4 p-2 transition-colors">
              <img
                src={getImageUrl(image.gallery, image.filename.replaceAll(" ", "_"), 160)}
                alt={image.filename}
                className="w-16 h-16 object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm  truncate">{image.filename.replace(/\.[^/.]+$/, "")}</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                  {galleries.find(g => g.slug === image.gallery)?.title || image.gallery}
                </div>
                <div className="text-[11px] font-mono text-neutral-500">Farbwert: {Number(image.colorfulness || 0).toFixed(1)}%</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Most Monochromatic Photos */}
      <div className={`mb-8 pb-8 ${CONFIG.theme.border.bottom}`}>
        <h2 className="text-xl mb-4">Monochromatischste Fotos</h2>
        <div className="space-y-3">
          {stats.monochromaticPhotos.map((image, index) => (
            <Link
              key={index}
              to={`/gallery/${image.gallery}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}
              className="flex items-center gap-4 p-2 transition-colors">
              <img
                src={getImageUrl(image.gallery, image.filename.replaceAll(" ", "_"), 160)}
                alt={image.filename}
                className="w-16 h-16 object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm  truncate">{image.filename.replace(/\.[^/.]+$/, "")}</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                  {galleries.find(g => g.slug === image.gallery)?.title || image.gallery}
                </div>
                <div className="text-[11px] font-mono text-neutral-500">Farbwert: {Number(image.colorfulness || 0).toFixed(1)}%</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-xl mb-4">Fotos pro Wochentag</h2>
          <ResponsiveContainer
            width="100%"
            height={300}>
            <BarChart
              data={stats.weekdayData}
              margin={{ top: 5, right: 0, left: -10, bottom: 5 }}>
              <CartesianGrid
                strokeWidth={1}
                strokeDasharray="3 3"
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <XAxis
                dataKey="name"
                stroke={theme === "dark" ? "#fff" : "#000"}
                strokeWidth={1}
              />
              <YAxis
                strokeWidth={1}
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <Tooltip
                cursor={{ fill: "rgba(128, 128, 128, 0.2)" }}
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#000" : "#fff",
                  border: `1px solid ${theme === "dark" ? "#fff" : "#000"}`,
                  borderRadius: "0px",
                }}
              />
              <Bar
                dataKey="Fotos"
                fill={theme === "dark" ? "#FCA5A5" : "#DC2626"}
                radius={[0, 0, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-xl mb-4">Fotos pro Stunde</h2>
          <ResponsiveContainer
            width="100%"
            height={300}>
            <BarChart
              data={stats.hourData}
              margin={{ top: 5, right: 0, left: -10, bottom: 5 }}>
              <CartesianGrid
                strokeWidth={1}
                strokeDasharray="3 3"
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <XAxis
                dataKey="name"
                stroke={theme === "dark" ? "#fff" : "#000"}
                strokeWidth={1}
                interval={1}
              />
              <YAxis
                strokeWidth={1}
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <Tooltip
                cursor={{ fill: "rgba(128, 128, 128, 0.2)" }}
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#222" : "#fff",
                  border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
                  borderRadius: "0px",
                }}
              />
              <Bar
                dataKey="Fotos"
                fill={theme === "dark" ? "#FCA5A5" : "#DC2626"}
                radius={[0, 0, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-xl mb-4">Jahreszeiten-Vergleich</h2>
          <ResponsiveContainer
            width="100%"
            height={300}>
            <BarChart
              data={stats.seasonData}
              margin={{ top: 5, right: 0, left: -10, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <XAxis
                dataKey="name"
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <YAxis stroke={theme === "dark" ? "#fff" : "#000"} />
              <Tooltip
                cursor={{ fill: "rgba(128, 128, 128, 0.2)" }}
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#222" : "#fff",
                  border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
                  borderRadius: "0px",
                }}
              />
              <Bar
                dataKey="Fotos"
                fill={theme === "dark" ? "#FCA5A5" : "#DC2626"}
                radius={[0, 0, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-xl mb-4">Monats-Vergleich</h2>
          <ResponsiveContainer
            width="100%"
            height={300}>
            <BarChart
              data={stats.monthData}
              margin={{ top: 5, right: 0, left: -10, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <XAxis
                dataKey="name"
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <YAxis stroke={theme === "dark" ? "#fff" : "#000"} />
              <Tooltip
                cursor={{ fill: "rgba(128, 128, 128, 0.2)" }}
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#222" : "#fff",
                  border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
                  borderRadius: "0px",
                }}
              />
              <Bar
                dataKey="Fotos"
                fill={theme === "dark" ? "#FCA5A5" : "#DC2626"}
                radius={[0, 0, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
     
      <div className="mt-8">
        <h2 className="text-xl mb-4">Foto-Aktivität über Zeit</h2>
        <div className="text-xs mb-2">
          Von {stats.dailyActivityData[0]?.date} bis {stats.dailyActivityData[stats.dailyActivityData.length - 1]?.date}
        </div>
        <ResponsiveContainer
          width="100%"
          height={300}>
          <LineChart
            data={stats.dailyActivityData}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme === "dark" ? "#444" : "#ccc"}
            />
            <XAxis
              dataKey="date"
              stroke={theme === "dark" ? "#fff" : "#000"}
              tickFormatter={(value) => {
                // Only show some dates to avoid overcrowding
                const date = new Date(value);
                return date.getDate() === 1 ? `${date.getDate()}.${date.getMonth() + 1}` : "";
              }}
            />
            <YAxis stroke={theme === "dark" ? "#fff" : "#000"} />
            <Tooltip
              labelFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });
              }}
              contentStyle={{
                backgroundColor: theme === "dark" ? "#222" : "#fff",
                border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
                borderRadius: "0px",
              }}
            />
            <Line
              type="monotone"
              dataKey="Fotos"
              stroke={theme === "dark" ? "#FCA5A5" : "#DC2626"}
              strokeWidth={2}
              dot={{ r: 1 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
       {stats.dayWithMostPhotos && (
        <div className="mt-8 p-4 border">
          <h2 className=" mb-2 text-xs font-mono">Tag mit den meisten Fotos</h2>
          <div className="">
            <span className="">{stats.dayWithMostPhotos.count}</span> Fotos am{" "}
            {stats.dayWithMostPhotos.date.toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </div>
        </div>
      )}

    </div>
  );
};

export default Statistics;
