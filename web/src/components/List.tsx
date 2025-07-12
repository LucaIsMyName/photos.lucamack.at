import { useMemo, useState, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import { useTheme } from "../contexts/ThemeContext";
import HorizontalScroller from "./HorizontalScroller";
import { Link } from "react-router-dom";
import { galleries } from "../galleries";
import type { Image as ImageType, Gallery } from "../types";
import { CONFIG } from "../config";

interface SortFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortKey: string;
  setSortKey: (value: any) => void;
  sortOptions: { value: string; label: string }[];
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  onClearFilters: () => void;
}

const SortFilterBar = ({ searchTerm, setSearchTerm, sortKey, setSortKey, sortOptions, sortOrder, setSortOrder, startDate, setStartDate, endDate, setEndDate, onClearFilters }: SortFilterBarProps) => {
  const { theme } = useTheme();
  return (
    <>
      <input
        type="text"
        placeholder="Suchen..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent focus:outline-none"
      />

      <div className="flex gap-2 items-center border-l pl-8 pr-0">
        <span>Filter&nbsp;von</span>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className=" bg-transparent underline underline-offset-4 uppercase focus:outline-none"
        />
        <span>bis</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="bg-transparent underline underline-offset-4 uppercase focus:outline-none"
        />
      </div>
      <div className="flex gap-2 items-center border-x px-8">
        <span className="">Sortieren&nbsp;nach</span>
        <select
          onChange={(e) => setSortKey(e.target.value)}
          value={sortKey}
          className="bg-transparent focus:outline-none underline underline-offset-4">
          {sortOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="whitespace-nowrap underline underline-offset-4">
          {sortOrder === "asc" ? "Aufsteigend" : "Absteigend"}
        </button>
      </div>
      <button
        onClick={onClearFilters}
        className={`${theme === "dark" ? "text-red-300" : "text-red-600"} underline underline-offset-4 whitespace-nowrap hover:underline ml-6`}>
        Filter löschen
      </button>
    </>
  );
};

const parseCreateDate = (date: any): Date | null => {
  if (!date || !date.year || !date.month || !date.day) {
    return null;
  }
  // Month is 0-indexed in JavaScript Date
  return new Date(date.year, date.month - 1, date.day, date.hour, date.minute, date.second);
};

const ListPage = () => {
  const [activeTab, setActiveTab] = useLocalStorageState<"images" | "galleries">("list_activeTab", "images");
  const [searchTerm, setSearchTerm] = useLocalStorageState("list_searchTerm", "");
  const [sortKey, setSortKey] = useLocalStorageState<"createDate" | "galleryTitle">("list_sortKey", "createDate");
  const [gallerySortKey, setGallerySortKey] = useLocalStorageState<"title" | "createDate">("list_gallerySortKey", "title");
  const [sortOrder, setSortOrder] = useLocalStorageState<"asc" | "desc">("list_sortOrder", "desc");
  const [startDate, setStartDate] = useLocalStorageState("list_startDate", "");
  const [endDate, setEndDate] = useLocalStorageState("list_endDate", "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSortKey("createDate");
    setSortOrder("desc");
    setStartDate("");
    setEndDate("");
    setGallerySortKey("title");
  };

  const allImages = useMemo(() => {
    const images: (ImageType & { galleryTitle: string; gallerySlug: string; index: number })[] = [];
    galleries.forEach((gallery) => {
      gallery.images?.forEach((image, index) => {
        images.push({ ...image, galleryTitle: gallery.title, gallerySlug: gallery.slug, index: index + 1 });
      });
    });
    return images;
  }, []);

  const filteredAndSortedImages = useMemo(() => {
    let filtered = allImages;

    if (searchTerm) {
      filtered = filtered.filter((image) => image.galleryTitle.toLowerCase().includes(searchTerm.toLowerCase()) || (image.filename && image.filename.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    if (startDate) {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      filtered = filtered.filter((image) => {
        const imageDate = parseCreateDate(image.createDate);
        return imageDate && imageDate >= start;
      });
    }

    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      filtered = filtered.filter((image) => {
        const imageDate = parseCreateDate(image.createDate);
        return imageDate && imageDate <= end;
      });
    }

    return [...filtered].sort((a, b) => {
      const aValue = sortKey === "createDate" ? parseCreateDate(a.createDate) : a.galleryTitle;
      const bValue = sortKey === "createDate" ? parseCreateDate(b.createDate) : b.galleryTitle;

      if (aValue === null) return 1;
      if (bValue === null) return -1;

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [allImages, searchTerm, sortKey, sortOrder, startDate, endDate]);

  const filteredAndSortedGalleries = useMemo(() => {
    let filtered: (Gallery & { createDate?: any })[] = galleries.map((g) => ({
      ...g,
      createDate: g.images?.[0]?.createDate,
    }));

    if (searchTerm) {
      filtered = filtered.filter((gallery) => gallery.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (startDate || endDate) {
      const start = startDate ? new Date(startDate) : null;
      if (start) start.setHours(0, 0, 0, 0);
      const end = endDate ? new Date(endDate) : null;
      if (end) end.setHours(23, 59, 59, 999);

      filtered = filtered.filter((gallery) => {
        return gallery.images?.some((image) => {
          const imageDate = parseCreateDate(image.createDate);
          if (!imageDate) return false;
          const isAfterStart = start ? imageDate >= start : true;
          const isBeforeEnd = end ? imageDate <= end : true;
          return isAfterStart && isBeforeEnd;
        });
      });
    }

    return [...filtered].sort((a, b) => {
      const aValue = gallerySortKey === "createDate" ? parseCreateDate(a.createDate) : a.title;
      const bValue = gallerySortKey === "createDate" ? parseCreateDate(b.createDate) : b.title;

      if (aValue === null) return 1;
      if (bValue === null) return -1;

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [searchTerm, gallerySortKey, sortOrder, startDate, endDate]);

  const galleryRandomImages = useMemo(() => {
    const imageMap: { [key: string]: ImageType | null } = {};
    galleries.forEach((gallery) => {
      if (gallery.images && gallery.images.length > 0) {
        imageMap[gallery.slug] = gallery.images[Math.floor(Math.random() * gallery.images.length)];
      } else {
        imageMap[gallery.slug] = null;
      }
    });
    return imageMap;
  }, []);

  const imageSortOptions = [
    { value: "createDate", label: "Datum" },
    { value: "galleryTitle", label: "Name" },
  ];

  const gallerySortOptions = [
    { value: "title", label: "Name" },
    { value: "createDate", label: "Datum" },
  ];

  if (loading) {
    return (
      <div className="p-4 flex justify-center items-center h-full">
        <div>Lädt...</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <title>Luca Mack | Liste</title>
      <meta
        name="description"
        content="Eine Liste aller Fotos und Galerien."
      />
      <div className="flex gap-4 border-b">
        <button
          className={`cursor-pointer text-2xl md:text-5xl py-2 ${activeTab === "images" ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : ""}`}
          onClick={() => setActiveTab("images")}>
          Fotos
        </button>
        <button
          className={`cursor-pointer text-2xl md:text-5xl py-4 ${activeTab === "galleries" ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : ""}`}
          onClick={() => setActiveTab("galleries")}>
          Galerien
        </button>
      </div>

      {activeTab === "images" && (
        <div className="">
          <HorizontalScroller className="items-center border-b py-5 ">
            <SortFilterBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortKey={sortKey}
              setSortKey={setSortKey}
              sortOptions={imageSortOptions}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              onClearFilters={handleClearFilters}
            />
          </HorizontalScroller>
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            {filteredAndSortedImages.map((image) => (
              <div
                className="w-full lg:w-1/2"
                key={`${image.gallerySlug}-${image.filename}`}>
                <div className="flex lg:flex-row items-center gap-4 py-2">
                  <Link to={`/gallery/${image.gallerySlug}#${image.filename.replaceAll(".jpg", "")}`}>
                    <img
                      loading="lazy"
                      src={`/content/galleries/${image.gallerySlug}/${image.filename.replace(/\.(jpg|jpeg|png|heic)$/i, "-640w.jpg")}`}
                      alt={image.filename}
                      width={128}
                      height={128}
                      className="w-24 h-24 lg:w-32 lg:h-32 object-cover aspect-square"
                    />
                  </Link>
                  <div className="text-sm">
                    <h3 className="truncate text-lg font-bold">{`${image.galleryTitle} - ${image.index}`}</h3>
                    <p className="truncate">Erstellt: {parseCreateDate(image.createDate)?.toLocaleString() || "Ungültiges Datum"}</p>
                    {image.latitude && image.longitude ? (
                      <>
                        <span>Koordinaten: </span>
                        <Link to={`/map?gallery=${image.gallerySlug}&image=${image.filename}`}>
                          <span className="hover:underline truncate">{`${image.latitude.toFixed(4)}, ${image.longitude.toFixed(4)}`}</span>
                        </Link>
                      </>
                    ) : (
                      <p className="truncate">Koordinaten: N/V</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "galleries" && (
        <div>
          <HorizontalScroller className="items-center border-b py-5 ">
            <SortFilterBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortKey={gallerySortKey}
              setSortKey={setGallerySortKey}
              sortOptions={gallerySortOptions}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              onClearFilters={handleClearFilters}
            />
          </HorizontalScroller>
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            {filteredAndSortedGalleries.map((gallery, index) => {
              const randomImage = galleryRandomImages[gallery.slug];

              return (
                <div
                  className="w-full lg:w-1/2"
                  key={index}>
                  <Link
                    to={`/gallery/${gallery.slug}`}
                    className="flex lg:flex-row items-center gap-4 py-2">
                    {randomImage ? (
                      <img
                        loading="lazy"
                        src={`/content/galleries/${gallery.slug}/${randomImage.filename.replace(/\.(jpg|jpeg|png|heic)$/i, "-640w.jpg")}`}
                        alt={gallery.title}
                        width={128}
                        height={128}
                        className="lg:w-32 lg:h-32 w-24 h-24 object-cover "
                      />
                    ) : (
                      <div className="lg:w-32 lg:h-32 w-24 h-24 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Kein Bild</span>
                      </div>
                    )}
                    <div className="text-sm">
                      <h3 className="truncate text-lg font-bold">{gallery.title}</h3>
                      <p className="truncate">{gallery.images?.length || 0} Bilder</p>
                      <p className="truncate">Erstellt: {parseCreateDate(gallery.createDate)?.toLocaleDateString() || "N/V"}</p>
                    </div>
                  </Link>
                  {index < filteredAndSortedGalleries.length - 1 && ""}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPage;
