import { useMemo } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import HorizontalScroller from "./HorizontalScroller";
import { Link } from "react-router-dom";
import { galleries } from "../galleries";
import type { Image as ImageType, Gallery } from "../types";
import { CONFIG } from "../config";
import { useTheme } from "../contexts/ThemeContext";

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

  return (
    <div className="p-4">
      <title>Luca Mack | Liste</title>
      <meta
        name="description"
        content="Eine Liste aller Fotos und Galerien."
      />
      <div className="flex gap-4 border-b mb-4">
        <button
          className={` py-2 ${activeTab === "images" ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : ""}`}
          onClick={() => setActiveTab("images")}>
          Fotos
        </button>
        <button
          className={` py-2 ${activeTab === "galleries" ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : ""}`}
          onClick={() => setActiveTab("galleries")}>
          Galerien
        </button>
      </div>

      {activeTab === "images" && (
        <div>
          <HorizontalScroller>
            <input
              type="text"
              placeholder="Suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent p-2 focus:outline-none"
            />
            <select
              onChange={(e) => setSortKey(e.target.value as any)}
              value={sortKey}
              className="bg-transparent p-2 focus:outline-none">
              <option value="createDate">Datum</option>
              <option value="galleryTitle">Name</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="p-2 whitespace-nowrap">
              {sortOrder === "asc" ? "Aufsteigend" : "Absteigend"}
            </button>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparent p-2 focus:outline-none"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparent p-2 focus:outline-none"
            />
          </HorizontalScroller>
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            {filteredAndSortedImages.map((image, index) => (
              <div
                className="lg:w-1/2"
                key={image.filename}>
                <Link
                  to={`/gallery/${image.gallerySlug}#${image.filename.replaceAll(".jpg", "")}`}
                  className="flex flex-row items-center gap-4 py-2">
                  <img
                    src={`/content/galleries/${image.gallerySlug}/${image.filename.replace(/\.(jpg|jpeg|png|heic)$/i, "-640w.jpg")}`}
                    alt={image.filename}
                    className="w-24 h-24 lg:w-48 lg:h-48 object-cover aspect-square"
                  />
                  <div className="text-sm">
                    <p>
                      <b>Galerie:</b> {image.galleryTitle}
                    </p>
                    <p>
                      <b>Index:</b> {image.index}
                    </p>
                    <p>
                      <b>Koordinaten:</b>
                      {image.latitude && image.longitude ? `${image.latitude.toFixed(4)}, ${image.longitude.toFixed(4)}` : "N/V"}
                    </p>
                    <p>
                      <b>Erstellt:</b> {parseCreateDate(image.createDate)?.toLocaleString() || "Ungültiges Datum"}
                    </p>
                  </div>
                </Link>
                {index < filteredAndSortedImages.length - 1 && ""}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "galleries" && (
        <div>
          <HorizontalScroller>
            <input
              type="text"
              placeholder="Suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent p-2 focus:outline-none"
            />
            <select
              onChange={(e) => setGallerySortKey(e.target.value as any)}
              value={gallerySortKey}
              className="bg-transparent p-2 focus:outline-none">
              <option value="title">Name</option>
              <option value="createDate">Datum</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="p-2 whitespace-nowrap">
              {sortOrder === "asc" ? "Aufsteigend" : "Absteigend"}
            </button>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparent p-2 focus:outline-none"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparent p-2 focus:outline-none"
            />
          </HorizontalScroller>
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            {filteredAndSortedGalleries.map((gallery, index) => {
              const randomImage = gallery.images && gallery.images.length > 0 ? gallery.images[Math.floor(Math.random() * gallery.images.length)] : null;

              return (
                <div
                  className="w-full lg:w-1/2"
                  key={index}>
                  <Link
                    to={`/gallery/${gallery.slug}`}
                    className="flex lg:flex-row items-center gap-4 p-2">
                    {randomImage ? (
                      <img
                        src={`/content/galleries/${gallery.slug}/${randomImage.filename.replace(/\.(jpg|jpeg|png|heic)$/i, "-640w.jpg")}`}
                        alt={gallery.title}
                        className="lg:w-48 lg:h-48 w-24 h-24 object-cover "
                      />
                    ) : (
                      <div className="lg:w-48 lg:h-48 w-24 h-24 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Kein Bild</span>
                      </div>
                    )}
                    <div className="text-sm">
                      <h3 className="text-lg font-bold">{gallery.title}</h3>
                      <p>{gallery.images?.length || 0} Bilder</p>
                      <p>Erstellt: {parseCreateDate(gallery.createDate)?.toLocaleDateString() || "N/V"}</p>
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
