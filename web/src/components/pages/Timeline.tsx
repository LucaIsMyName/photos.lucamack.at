import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { cn } from "../../utils/cn";
import { galleries } from "../../galleries";
import type { Image as ImageType } from "../../types";
import { parseCreateDate } from "../../utils/date";
import { CONFIG } from "../../config";
import { slugify } from "../../utils/slugify";
import { getImageUrl } from "../../utils/image";
import { Link } from "react-router-dom";
import SeoHead from "../ui/SeoHead";

const Timeline = () => {
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
    galleries.forEach((gallery: any) => {
      gallery.images?.forEach((image: ImageType | any, index: number) => {
        images.push({ ...(image as any), galleryTitle: gallery.title, gallerySlug: gallery.slug, index: index + 1 });
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
          return { ...gallery, startDate: null, endDate: null, duration: null, firstImage: null };
        }

        const imagesWithDates: { image: ImageType; date: Date }[] = [];
        gallery.images.forEach((image) => {
          const date = parseCreateDate(image.createDate);
          if (date !== null) {
            imagesWithDates.push({ image: image as unknown as ImageType, date });
          }
        });

        if (imagesWithDates.length === 0) {
          return { ...gallery, startDate: null, endDate: null, duration: null, firstImage: null };
        }

        const sorted = [...imagesWithDates].sort((a, b) => a.date.getTime() - b.date.getTime());
        const startDate = sorted[0]?.date;
        const endDate = sorted[sorted.length - 1]?.date;
        if (!startDate || !endDate) {
          return { ...gallery, startDate: null, endDate: null, duration: null, firstImage: null };
        }
        const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)); // days
        const firstImage = sorted[0].image;

        return { ...gallery, startDate, endDate, duration, firstImage };
      })
      .filter((gallery): gallery is typeof gallery & { startDate: Date; endDate: Date; duration: number; firstImage: ImageType } => gallery.startDate !== null && gallery.endDate !== null && gallery.duration !== null && gallery.firstImage !== null)
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }, []);

  const tabClasses = (isActive: boolean) => `text-4xl md:text-5xl py-2   ${isActive === true ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : useTheme().theme === "dark" ? "text-white" : "text-black"}`;
  const lineClasses = cn(`absolute sm:left-2 left-0 top-4.5 h-full w-0 ${CONFIG.theme.border.left}`);
  const dotClasses = cn(`absolute -left-[32px] sm:-left-[23.4px] top-4.5 transform -translate-x-1/2 flex items-center`);
  const dotInnerClasses = cn(CONFIG.theme.border.default, `${theme === "dark" ? "bg-red-300" : "bg-red-600"} border-none h-2 w-2`);

  return (
    <div className={`p-4  pl-7 sm:pl-4  md:px-8  md:pt-6 h-full  ${theme === "light" ? "bg-white text-gray-800" : "bg-black text-gray-200"}`}>
      <SeoHead
        title="Timeline"
        description="Timeline aller Fotos"
      />
      <div className="flex items-center justify-between mb-4 -ml-3 sm:ml-0">
        <h1 className="text-2xl sr-only">Timeline</h1>
        <div className="flex items-center space-x-2 gap-2 md:ml-0">
          <button
            onClick={() => setActiveTab("images")}
            aria-label="Show images"
            aria-pressed={activeTab === "images"}
            className={cn(` ${tabClasses(activeTab === "images")}`)}>
            Fotos
          </button>
          <button
            onClick={() => setActiveTab("galleries")}
            aria-label="Show galleries"
            aria-pressed={activeTab === "galleries"}
            className={cn(` ${tabClasses(activeTab === "galleries")}`)}>
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
                className={`relative `}>
                <div className={dotClasses}>
                  <div className={dotInnerClasses}></div>
                </div>
                <h2 className={`text-sm mb-3 sticky top-0 pb-1 pt-3 font-mono z-50 ${theme === "dark" ? "bg-linear-[to_bottom,var(--color-black),rgba(0,0,0,0.95),rgba(0,0,0,0.7),transparent]" : "bg-linear-[to_bottom,var(--color-white),rgba(255,255,255,0.95),rgba(255,255,255,0.7),transparent]"}`}>{new Date(date).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}</h2>
                <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-10 gap-2 sm:gap-4">
                  {images.map((image) => (
                    <Link
                      to={`/gallery/${image.gallerySlug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}
                      key={image.filename}
                      className={cn(`${theme === "dark" ? "text-white bg-white/10" : "text-black bg-black/10"} relative group block`)}>
                      <img
                        src={getImageUrl(image.gallerySlug, image.filename.replaceAll(" ", "_"), 160)}
                        alt={image.alt || image.filename}
                        loading="lazy"
                        className="w-full h-full object-cover aspect-square"
                      />
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
          <h2 className="sr-only text-xl my-4">Gallerien nach Zeitraum</h2>
          <div className="space-y-6">
            {galleriesWithTimeframes.map((gallery) => (
              <div
                key={gallery.slug}
                className="relative">
                <div className={dotClasses}>
                  <div className={dotInnerClasses}></div>
                </div>
                <Link
                  to={`/gallery/${gallery.slug}`}
                  className="block p-0 pt-2">
                  <div className="flex items-center gap-4">
                    {gallery.firstImage && (
                      <img
                        src={getImageUrl(gallery.slug, gallery.firstImage.filename.replaceAll(" ", "_"), 160)}
                        alt={gallery.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0 mt-2"
                        loading="lazy"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className={cn("text-lg mb-1", theme === "dark" ? "text-white" : "text-black")}>{gallery.title}</h3>
                      <div className="flex flex-wrap items-center gap-1 text-xs">
                        <span className={cn(theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                          {gallery.startDate.toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className={cn(theme === "dark" ? "text-gray-500" : "text-gray-500")}>-</span>
                        <span className={cn(theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                          {gallery.endDate.toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1 mt-2 text-xs">
                        <span className={cn(theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                          {gallery.images.length} {gallery.images.length === 1 ? "Foto" : "Fotos"}
                        </span>
                        {gallery.duration > 0 && (
                          <>
                            -
                            <span className={cn(theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                              {gallery.duration === 0 ? "< 1 Tag" : gallery.duration === 1 ? "1 Tag" : `${gallery.duration} Tage`}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
