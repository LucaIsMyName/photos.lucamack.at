import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Download, MapPin } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { cn } from "../../utils/cn";
import { galleries } from "../../galleries";
import type { Image as ImageType } from "../../types";
import { parseCreateDate } from "../../utils/date";
import { CONFIG } from "../../config";
import { getImageUrl } from "../../utils/image";
import { slugify } from "../../utils/slugify";

const TimelinePage = () => {
  const { theme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState<"images" | "galleries">((searchParams.get("tab") as "images" | "galleries") || "images");

  // Effect for scrolling to a specific date. This runs only once.
  useEffect(() => {
    const scrollToDate = searchParams.get("scrollTo");
    if (scrollToDate) {
      const element = document.getElementById(scrollToDate);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
    // We only want this to run once on mount, so we have an empty dependency array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect for managing the active tab state in the URL.
  useEffect(() => {
    // Create a mutable copy of the search params
    const newSearchParams = new URLSearchParams(searchParams);

    if (activeTab === "images") {
      // If the active tab is the default, remove the 'tab' param
      newSearchParams.delete("tab");
    } else {
      // Otherwise, set the 'tab' param to the active tab
      newSearchParams.set("tab", activeTab);
    }

    // Update the URL. We use `toString()` to compare, as URLSearchParams objects are not directly comparable.
    if (searchParams.toString() !== newSearchParams.toString()) {
      setSearchParams(newSearchParams, { replace: true });
    }
  }, [activeTab, searchParams, setSearchParams]);

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

  const tabClasses = (isActive: boolean) => `text-4xl md:text-5xl py-2   ${isActive === true ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : (useTheme().theme === "dark" ? "text-white" : "text-black")}`;
  const lineClasses = cn(`absolute sm:left-2 left-0 top-4.5 h-full w-px ${theme === "dark" ? "bg-white" : "bg-black"}`);
  const dotClasses = cn(`absolute -left-[32px] sm:-left-[23.4px] top-4.5 transform -translate-x-1/2 flex items-center`);
  const dotInnerClasses = cn(`${theme === "dark" ? "bg-red-300 border border-white" : "bg-red-600 border border-black"} h-2 w-2 `);

  return (
    <div className={`p-4 pl-7 sm:pl-4 md:pl-0 md:pt-6  ${theme === "light" ? "bg-white text-gray-800" : "bg-black text-gray-200"}`}>
      <title>{`Timeline | ${CONFIG.meta.title}`}</title>
      <meta
        name="description"
        content="Timeline von allen Fotos & Galerien"
      />
      <meta
        name="title"
        content={`Timeline | ${CONFIG.meta.title}`}
      />
      <div className="flex items-center justify-between mb-4 -ml-3 sm:ml-0">
        <h1 className="text-2xl sr-only">Timeline</h1>
        <div className="flex items-center space-x-2 gap-2 md:ml-0">
          <button
            onClick={() => setActiveTab("images")}
            className={` ${tabClasses(activeTab === "images")}`}>
            Fotos
          </button>
          <button
            onClick={() => setActiveTab("galleries")}
            className={` ${tabClasses(activeTab === "galleries")}`}>
            Serien
          </button>
        </div>
      </div>

      {activeTab === "images" && (
        <div className="relative pl-8">
          <div className={lineClasses}></div>
          <div className="space-y-8">
            {imagesByDate.map(([date, images]) => (
              <div
                key={date}
                id={date}
                className="relative">
                <div className={dotClasses}>
                  <div className={dotInnerClasses}></div>
                </div>
                <h2 className={`sm:text-lg mb-4 sticky top-0 py-2 z-50 ${theme === "dark" ? "bg-black" : "bg-white"}`}>{new Date(date).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}</h2>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-4">
                  {images.map((image) => (
                    <Link
                      to={`/gallery/${image.gallerySlug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}
                      key={image.filename}
                      className="relative group block">
                      <img
                        src={getImageUrl(image.gallerySlug, image.filename.replaceAll(" ", "_"), 380)}
                        alt={image.alt || image.filename}
                        loading="lazy"
                        className="w-full h-full object-cover aspect-square"
                      />
                      <div className={`sr-only absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end items-start p-2 gap-1.5`}>
                        {image.googleMapsUrl && (
                          <Link
                            to={`/app/map?gallery=${image.gallerySlug}&image=${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}
                            onClick={(e) => e.stopPropagation()}
                            className={`p-1 transition-colors ${theme === "dark" ? "text-white bg-black bg-opacity-50 " : "text-black bg-white bg-opacity-50"}`}
                            aria-label={`View ${image.filename} on map`}>
                            <MapPin size={16} />
                          </Link>
                        )}
                        <a
                          href={getImageUrl(image.gallerySlug, image.filename.replaceAll(" ", "_"), "original")}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()} // Prevent navigating to gallery when clicking download
                          className={`p-1 transition-colors ${theme === "dark" ? "text-white bg-black bg-opacity-50 " : "text-black bg-white bg-opacity-50"}`}
                          aria-label={`Download ${image.filename.replaceAll(" ", "_")}`}>
                          <Download size={16} />
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
          <div className={lineClasses}></div>
          <h2 className="sr-only text-xl font-semibold my-4">Gallerien nach Zeitraum</h2>
          <div className="space-y-4">
            {galleriesWithTimeframes.map((gallery) => (
              <div
                key={gallery.slug}
                className="relative">
                <div className={dotClasses}>
                  <div className={dotInnerClasses}></div>
                </div>
                <Link
                  to={`/gallery/${gallery.slug}`}
                  className="block p-4 pt-2">
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
