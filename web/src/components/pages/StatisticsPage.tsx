import { useMemo } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Treemap } from "recharts";
import { galleries } from "../../galleries";
import { useTheme } from "../../contexts/ThemeContext";
import { CONFIG } from "../../config";
type ImageType = (typeof galleries)[0]["images"][0] & { gallery: string; latitude: number; longitude: number };

const CustomizedContent = (props: any) => {
  const { x, y, width, height, name } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: props.theme === "dark" ? "#FCA5A5" : "#DC2626",
          stroke: props.theme === "dark" ? "#000" : "#fff",
          strokeWidth: 2,
          strokeOpacity: 1,
        }}
      />
      {width > 80 && height > 25 && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill={"#fff"}
          fontSize={9}
          style={{ textTransform: "uppercase" }}
          stroke="none">
          {name}
        </text>
      )}
    </g>
  );
};

const ExtremePhotoCard = ({ title, image }: { title: string; image?: ImageType }) => {
  const { theme } = useTheme();
  if (!image) return null;

  return (
    <div className={`border  ${theme === "dark" ? "" : ""} p-0 flex flex-col`}>
      <Link to={`/gallery/${image.gallery}`}>
        <img
          src={`/content/galleries/${image.gallery}/${image.filename}`}
          alt={image.alt || title}
          className="w-full h-40 object-cover"
        />
      </Link>
      <div className="p-3 relative">
        <h3 className="text-base">{title}</h3>
        <div className="text-xs mt-1">
          <p>Lat: {image.latitude.toFixed(6)}</p>
          <p>Lon: {image.longitude.toFixed(6)}</p>
        </div>
        <Link
          className="absolute bottom-4 right-4"
          to={`/map?gallery=${image.gallery}&image=${image.filename}`}>
          <MapPin size={16} />
        </Link>
      </div>
    </div>
  );
};

const StatisticsPage = () => {
  const { theme } = useTheme();

  const allImages = useMemo(() => {
    return galleries.flatMap((gallery) =>
      gallery.images.map((image) => ({
        ...image,
        gallery: gallery.slug,
      }))
    );
  }, []);

  const stats = useMemo(() => {
    const galleryCounts: { [key: string]: number } = {};
    galleries.forEach((gallery) => {
      galleryCounts[gallery.title] = gallery.images.length;
    });

    const galleryData = Object.entries(galleryCounts).map(([name, value]) => ({ name, value }));

    const allImagesWithGps = allImages.filter((image) => image.latitude != null && image.longitude != null) as ((typeof allImages)[0] & { latitude: number; longitude: number })[];

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
      const date = new Date(
        image.createDate.year,
        image.createDate.month - 1, // Month is 0-indexed in JS Date
        image.createDate.day,
        image.createDate.hour
      );
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
      const month = image.createDate.month;
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
      monthCounts[image.createDate.month - 1]++;
    });

    const monthNames = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    const monthData = monthCounts.map((count, index) => ({
      name: monthNames[index],
      Fotos: count,
    }));

    return { weekdayData, hourData, extremePhotos, galleryData, seasonData, monthData };
  }, [allImages]);

  return (
    <div className={`p-4 sm:p-8 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className={`${CONFIG.theme.headline.one} mb-4`}>Statistiken</h1>

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
      <div className="mt-8 ">
        <h2 className="text-xl mb-4">Fotos pro Galerie</h2>
        <div className="border">
          <ResponsiveContainer
            width="100%"
            className={""}
            height={300}>
            <Treemap
              data={stats.galleryData}
              dataKey="value"
              className=""
              aspectRatio={1}
              stroke={theme === "dark" ? "#000" : "#fff"}
              fill={theme === "dark" ? "#FCA5A533" : "#DC262633"}
              content={<CustomizedContent theme={theme} />}
            />
          </ResponsiveContainer>
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
          <h2 className="text-xl mb-4">Fotos pro Monat</h2>
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
