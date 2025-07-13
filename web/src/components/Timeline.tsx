import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import useUrlState from "../hooks/useUrlState";
import { galleries } from "../galleries";
import type { Image as ImageType } from "../types";
import { parseCreateDate } from "../utils/date";
import { CONFIG } from "../config";

const TimelinePage = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useUrlState<"images" | "galleries">("tab", "images");

  const allImages = useMemo(() => {
    const images: (ImageType & { galleryTitle: string; gallerySlug: string; index: number })[] = [];
    galleries.forEach((gallery) => {
      gallery.images?.forEach((image, index) => {
        images.push({ ...image, galleryTitle: gallery.title, gallerySlug: gallery.slug, index: index + 1 });
      });
    });
    return images;
  }, []);

  const imagesByDate = useMemo(() => {
    const groups: { [date: string]: (ImageType & { galleryTitle: string; gallerySlug: string; index: number })[] } = {};
    allImages.forEach((image) => {
      const date = parseCreateDate(image.createDate);
      if (date) {
        const dateString = date.toISOString().split("T")[0];
        if (!groups[dateString]) {
          groups[dateString] = [];
        }
        groups[dateString].push(image);
      }
    });

    for (const date in groups) {
      groups[date].sort((a, b) => {
        const dateA = parseCreateDate(a.createDate)?.getTime() || 0;
        const dateB = parseCreateDate(b.createDate)?.getTime() || 0;
        return dateA - dateB;
      });
    }

    return Object.entries(groups).sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime());
  }, [allImages]);

  const galleriesWithTimeframes = useMemo(() => {
    return galleries
      .map((gallery) => {
        if (!gallery.images || gallery.images.length === 0) {
          return { ...gallery, startDate: null, endDate: null };
        }

        const dates = gallery.images.map((image) => parseCreateDate(image.createDate)).filter((date): date is Date => date !== null);

        if (dates.length === 0) {
          return { ...gallery, startDate: null, endDate: null };
        }

        const sortedDates = dates.sort((a, b) => a.getTime() - b.getTime());
        const startDate = sortedDates[0];
        const endDate = sortedDates[sortedDates.length - 1];

        return { ...gallery, startDate, endDate };
      })
      .filter((gallery): gallery is typeof gallery & { startDate: Date; endDate: Date } => gallery.startDate !== null && gallery.endDate !== null)
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }, []);

  const tabClasses = (isActive: boolean) =>
    `cursor-pointer text-2xl md:text-5xl py-2 ${isActive === true ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : ""}`;

  return (
    <div className={`p-4 pl-7 sm:pl-4 md:pt-6  ${theme === "light" ? "bg-white text-gray-800" : "bg-black text-gray-200"}`}>
      <div className="flex items-center justify-between mb-4 -ml-2">
        <h1 className="text-2xl sr-only">Timeline</h1>
        <div className="flex items-center space-x-2 gap-2">
          <button onClick={() => setActiveTab("images")} 
          
          className={tabClasses(activeTab === "images")}
          >
            Fotos
          </button>
          <button onClick={() => setActiveTab("galleries")} className={tabClasses(activeTab === "galleries")}>
            Galerien
          </button>
        </div>
      </div>

      {activeTab === "images" && (
        <div className="relative pl-8">
          <div className={`absolute left-0 top-4.5 h-full w-px ${theme === "dark" ? "bg-white" : "bg-black"}`}></div>
          <div className="space-y-8">
            {imagesByDate.map(([date, images]) => (
              <div key={date} className="relative">
                <div className="absolute -left-[31.5px] top-4.5 transform -translate-x-1/2 flex items-center">
                  <div className={`${theme === "dark" ? "bg-red-300 border border-white" : "bg-red-600 border border-black"} h-2 w-2 `}></div>
                </div>
                <h2 className={`sm:text-lg mb-4 sticky top-0 py-2 z-50 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
                  {new Date(date).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                  {images.map((image) => (
                    <Link to={`/gallery/${image.gallerySlug}`} key={image.filename} className="relative group block">
                      <img
                        src={`/content/galleries/${image.gallerySlug}/${image.filename.replace(/\.(jpg|jpeg|png|heic)$/i, "-640w.jpg")}`}
                        alt={image.alt || image.filename}
                        loading="lazy"
                        className="w-full h-full object-cover aspect-square"
                      />
                      <div className={`absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <a
                          href={`/content/galleries/${image.gallerySlug}/${image.filename}`}
                          download
                          onClick={(e) => e.stopPropagation()} // Prevent navigating to gallery when clicking download
                          className={`absolute top-2 right-2 p-1.5 transition-colors ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}
                          aria-label={`Download ${image.filename}`}>
                          <Download size={20} />
                        </a>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "galleries" && (
        <div className="relative pl-8">
          <div className={`absolute left-0 top-7 h-full w-px ${theme === "dark" ? "bg-white" : "bg-black"}`}></div>
          <h2 className="sr-only text-xl font-semibold my-4">Gallerien nach Zeitraum</h2>
          <div className="space-y-4">
            {galleriesWithTimeframes.map((gallery) => (
              <div key={gallery.slug} className="relative">
               <div className="absolute -left-[31.5px] top-7 transform -translate-x-1/2 flex items-center">
                  <div className={`${theme === "dark" ? "bg-red-300 border border-white" : "bg-red-600 border border-black"} h-2 w-2 `}></div>
                </div>
                <Link to={`/gallery/${gallery.slug}`} className="block p-4">
                  <h3 className=" text-lg">{gallery.title}</h3>
                  <p className="text-xs ">
                    {gallery.startDate.toLocaleDateString("de-DE")} - {gallery.endDate.toLocaleDateString("de-DE")}
                  </p>
                  <p className="text-xs ">{gallery.images.length} Fotos</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
