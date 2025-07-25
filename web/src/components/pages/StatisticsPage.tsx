import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { getImageUrl } from "../../utils/image";
import { cn } from "../../utils/cn";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import MapGL, { Marker, type MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { galleries } from "../../galleries";
import { useTheme } from "../../contexts/ThemeContext";
import { CONFIG } from "../../config";
import { groupImagesByCountry } from "../../utils/geocoding";
import { slugify } from "../../utils/slugify";
import { parseCreateDate } from "../../utils/date";

type ImageType = (typeof galleries)[0]["images"][0] & { gallery: string; latitude: number; longitude: number };
type CountryData = { name: string; value: number }[];


const ExtremePhotoCard = ({ title, image }: { title: string; image?: ImageType }) => {
  const { theme } = useTheme();
  if (!image) return null;

  return (
    <div className={cn(`border  ${theme === "dark" ? "" : ""} p-0 flex flex-col`)}>
      <Link to={`/gallery/${image.gallery}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}>
        <img
          src={getImageUrl(image.gallery, image.filename.replaceAll(" ", "_"), 640)}
          alt={image.alt || title}
          className={cn("w-full h-40 object-cover")}
        />
      </Link>
      <div className="p-3 relative">
        <h3 className="text-[11px]">{title}</h3>
        <p className=" my-2 text-base leading-4 truncate">{image.filename}</p>
        <div className="flex items-center gap-2 mt-2">
          <Link
            className=""
            to={`/app/map?gallery=${image.gallery}&image=${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}>
            <MapPin size={12} />
          </Link>
          <div className="text-[11px] mt-1 flex items-center">
            <p className="truncate ">
              Lat: {image.latitude.toFixed(6)}, {image.longitude.toFixed(6)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatisticsPage = () => {
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
        duration: 1000
      });
    } else {
      // Calculate bounds to fit all images
      const longitudes = allImagesWithGps.map(img => img.longitude);
      const latitudes = allImagesWithGps.map(img => img.latitude);

      const minLng = Math.min(...longitudes);
      const maxLng = Math.max(...longitudes);
      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);

      // Fit bounds with padding
      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        { padding: 80, duration: 1000 }
      );
    }
  }, [allImagesWithGps]);

  const stats = useMemo(() => {
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
      extremePhotos.north = allImagesWithGps[0];
      extremePhotos.south = allImagesWithGps[0];
      extremePhotos.east = allImagesWithGps[0];
      extremePhotos.west = allImagesWithGps[0];

      for (const image of allImagesWithGps) {
        if (image.latitude > extremePhotos.north!.latitude) {
          extremePhotos.north = image;
        }
        if (image.latitude < extremePhotos.south!.latitude) {
          extremePhotos.south = image;
        }
        if (image.longitude > extremePhotos.east!.longitude) {
          extremePhotos.east = image;
        }
        if (image.longitude < extremePhotos.west!.longitude) {
          extremePhotos.west = image;
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

    return { weekdayData, hourData, extremePhotos, galleryData, seasonData, monthData, averageCoords };
  }, [allImages, allImagesWithGps]);

  return (
    <div className={cn("p-4 md:pt-8 md:pl-0", theme === "dark" ? "bg-black text-white" : "bg-white text-black")}>
      <title>{`Statistiken | ${CONFIG.meta.title}`}</title>
      <meta
        name="description"
        content="Statistiken von allen Fotos & Galerien"
      />
      <meta
        name="title"
        content={`Statistiken | ${CONFIG.meta.title}`}
      />
      <h1 className={cn(CONFIG.theme.headline.one, "mb-4")}>Statistiken</h1>

      <div className="mt-4">
        <h2 className="text-xl mb-4 sr-only">Geografische Extreme</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ExtremePhotoCard
            title="Nördlichstes Foto"
            image={stats.extremePhotos.north}
          />
          <ExtremePhotoCard
            title="Südlichstes Foto"
            image={stats.extremePhotos.south}
          />
          <ExtremePhotoCard
            title="Östlichstes Foto"
            image={stats.extremePhotos.east}
          />
          <ExtremePhotoCard
            title="Westlichstes Foto"
            image={stats.extremePhotos.west}
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg mb-4">Geografischer Mittelpunkt aller Fotos</h2>
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
            <Marker
              longitude={stats.averageCoords.longitude}
              latitude={stats.averageCoords.latitude}>
              <div className="">
                <div className="w-8 h-8 relative">
                  <div className={`w-[1.5px] h-full rounded-full ${theme === "dark" ? "bg-white" : "bg-black"} rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                  <div className={`w-[1.5px] h-full rounded-full ${theme === "dark" ? "bg-white" : "bg-black"} -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                </div>
              </div>
            </Marker>
            
            {/* Individual photo markers */}
            {allImagesWithGps.map((image, index) => (
              <Marker
                key={`photo-marker-${index}`}
                longitude={image.longitude}
                latitude={image.latitude}>
                <div className={cn(`w-1.5 h-1.5 rounded-full rotate-45 opacity-50`, theme === "dark" ? "bg-red-300" : "bg-red-600")}></div>
              </Marker>
            ))}
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
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
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
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-xl mb-4">Fotos pro Wochentag</h2>
          <ResponsiveContainer
            width="100%"
            height={300}>
            <BarChart
              data={stats.weekdayData}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid
                strokeWidth={1}
                strokeDasharray="3 3"
                stroke={theme === "dark" ? "#fff" : "#000"}
              />
              <XAxis
                strokeWidth={1}
                dataKey="name"
                stroke={theme === "dark" ? "#fff" : "#000"}
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
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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
    </div>
  );
};

export default StatisticsPage;
