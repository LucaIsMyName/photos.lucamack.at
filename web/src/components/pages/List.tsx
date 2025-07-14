import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useUrlState from "../../hooks/useUrlState";
import useDebouncedUrlState from "../../hooks/useDebouncedUrlState";
import { useTheme } from "../../contexts/ThemeContext";
import HorizontalScroller from "../layout/HorizontalScroller";
import { Link } from "react-router-dom";
import { Download, ChevronDown, ChevronUp } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { galleries } from "../../galleries";
import { parseCreateDate } from "../../utils/date";
import type { Image as ImageType, Gallery } from "../../types";
import { CONFIG } from "../../config";

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
  const borderClass = theme === 'dark' ? 'border-white' : 'border-black';

  return (
    <div className="flex items-center w-full">
      <div className={`flex-shrink-0 p-2 border-r ${borderClass}`}>
        <input
          type="text"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`bg-transparent focus:outline-none w-48`}
        />
      </div>

      <div className={`flex-shrink-0 flex items-center gap-4 p-2 px-4 border-r ${borderClass}`}>
        <span className="whitespace-nowrap">Filter von</span>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="bg-transparent focus:outline-none uppercase"
        />
        <span>bis</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="bg-transparent focus:outline-none uppercase"
        />
      </div>

      <div className={`flex-shrink-0 flex items-center gap-4 p-2 px-4 border-r ${borderClass}`}>
        <span className="whitespace-nowrap">Sortieren nach</span>
        <Select.Root value={sortKey} onValueChange={setSortKey}>
          <Select.Trigger className={`inline-flex items-center justify-center gap-2 bg-transparent focus:outline-none`}>
            <Select.Value />
            <Select.Icon>
              <ChevronDown size={16} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className={`overflow-hidden ${theme === 'dark' ? 'bg-black text-white border-white' : 'bg-white text-black border-black'} border`}>
              <Select.ScrollUpButton className="flex items-center justify-center h-6 cursor-default">
                <ChevronUp />
              </Select.ScrollUpButton>
              <Select.Viewport className="p-1">
                {sortOptions.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className={`text-sm leading-none flex items-center h-6 pr-8 pl-6 relative select-none data-[highlighted]:outline-none ${theme === 'dark' ? 'data-[highlighted]:bg-red-300 data-[highlighted]:text-black' : 'data-[highlighted]:bg-red-600 data-[highlighted]:text-white'}`}>
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
              <Select.ScrollDownButton className="flex items-center justify-center h-6 cursor-default">
                <ChevronDown />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="cursor-pointer whitespace-nowrap">
          {sortOrder === "asc" ? "(Aufsteigend)" : "(Absteigend)"}
        </button>
      </div>
      <div className="flex-shrink-0 p-2 px-4">
        <button
          onClick={onClearFilters}
          className={`${theme === "dark" ? "text-red-300" : "text-red-600"} cursor-pointer underline underline-offset-4 whitespace-nowrap hover:underline`}>
          Filter löschen
        </button>
      </div>
    </div>
  );
};

const ListPage = () => {
  const [activeTab, setActiveTab] = useUrlState<"images" | "galleries">("tab", "images");
  const [searchTerm, setSearchTerm] = useUrlState("search", "");
  const [sortKey, setSortKey] = useUrlState<"createDate" | "galleryTitle">("sortBy", "createDate");
  const [gallerySortKey, setGallerySortKey] = useUrlState<"title" | "createDate">("gallerySortBy", "title");
  const [sortOrder, setSortOrder] = useUrlState<"asc" | "desc">("sortOrder", "desc");
  const [startDate, setStartDate] = useDebouncedUrlState("startDate", "");
  const [endDate, setEndDate] = useDebouncedUrlState("endDate", "");
  const [, setSearchParams] = useSearchParams();

  const handleClearFilters = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
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
      const searchWords = searchTerm.toLowerCase().split(" ").filter(Boolean);
      if (searchWords.length > 0) {
        filtered = filtered.filter((image) => {
          const searchableText = `${image.galleryTitle.toLowerCase()} ${image.filename ? image.filename.toLowerCase() : ""}`;
          return searchWords.every((word) => searchableText.includes(word));
        });
      }
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
      const searchWords = searchTerm.toLowerCase().split(" ").filter(Boolean);
      if (searchWords.length > 0) {
        filtered = filtered.filter((gallery) => {
          const searchableText = gallery.title.toLowerCase();
          return searchWords.every((word) => searchableText.includes(word));
        });
      }
    }

    if (startDate || endDate) {
      const start = startDate ? new Date(startDate) : null;
      if (start) start.setHours(0, 0, 0, 0);
      const end = endDate ? new Date(endDate) : null;
      if (end) end.setHours(23, 59, 59, 999);

      filtered = filtered.filter((gallery) => {
        return allImages
          .filter((image) => {
            const imageCreateDate = parseCreateDate(image.createDate);
            const sDate = startDate ? new Date(startDate) : null;
            const eDate = endDate ? new Date(endDate) : null;

            if (sDate && imageCreateDate && imageCreateDate < sDate) {
              return false;
            }
            if (eDate && imageCreateDate && imageCreateDate > eDate) {
              return false;
            }

            return image.galleryTitle.toLowerCase().includes((searchTerm || "").toLowerCase());
          })
          .some((image) => image.gallerySlug === gallery.slug);
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

  return (
    <div className="p-4">
      <title>Luca Mack | Liste aller Fotos und Galerien</title>
      <meta
        name="title"
        content={`Luca Mack | Liste aller Fotos und Galerien`}
      />
      <meta
        name="description"
        content="Eine Liste aller Fotos und Galerien. Sortierbar und Filterbar."
      />
      <div className="flex gap-4 border-b">
        <button
          className={`cursor-pointer ${CONFIG.theme.headline.one} py-2 ${activeTab === "images" ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : ""}`}
          onClick={() => setActiveTab("images")}>
          Fotos
        </button>
        <button
          className={`cursor-pointer ${CONFIG.theme.headline.one} py-4 ${activeTab === "galleries" ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : ""}`}
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
                  <Link to={`/gallery/${image.gallerySlug}`}>
                    <img
                      loading="lazy"
                      src={`/content/galleries/${image.gallerySlug}/${image.filename.replace(/\.(jpg|jpeg|png|heic)$/i, "-640w.jpg")}`}
                      alt={image.alt || `${image.galleryTitle} - ${image.filename}`}
                      width={128}
                      height={128}
                      className="min-w-24 w-24 min-h-24 h-24 lg:w-24 lg:h-24 object-cover aspect-square"
                    />
                  </Link>
                  <div className="text-sm">
                    <h3 className="truncate text-base">{`${image.galleryTitle} #${image.index}`}</h3>
                    <p className="truncate text-xs">Erstellt: {parseCreateDate(image.createDate)?.toLocaleString() || "Ungültiges Datum"}</p>
                    {image.latitude && image.longitude ? (
                      <>
                        <span className="text-xs">Koordinaten: </span>
                        <Link to={`/map?gallery=${image.gallerySlug}&image=${image.filename}`}>
                          <span className="text-xs underline truncate">{`${image.latitude.toFixed(4)}, ${image.longitude.toFixed(4)}`}</span>
                        </Link>
                      </>
                    ) : (
                      <p className="truncate">Koordinaten: N/V</p>
                    )}
                    <a
                      href={`/content/galleries/${image.gallerySlug}/${image.filename}`}
                      download
                      className="text-xs flex items-center gap-1 hover:underline w-fit">
                      <Download size={12} />
                      <span className="truncate underline">Download Foto</span>
                    </a>
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
                        className="lg:w-24 lg:h-24 min-w-24 min-h-24 w-24 h-24 object-cover "
                      />
                    ) : (
                      <div className="lg:w-24 lg:h-24 w-24 h-24 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Kein Bild</span>
                      </div>
                    )}
                    <div className="text-sm">
                      <h3 className="truncate text-lg ">{gallery.title}</h3>
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
