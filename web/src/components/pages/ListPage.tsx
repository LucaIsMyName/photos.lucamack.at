import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import HorizontalScroller from "../layout/HorizontalScroller";
import { Link } from "react-router-dom";
import { Download, ChevronDown, ChevronUp } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { galleries } from "../../galleries";
import { parseCreateDate } from "../../utils/date";
import type { Image as ImageType, Gallery } from "../../types";
import { CONFIG } from "../../config";
import { cn } from "../../utils/cn";
import { getImageUrl } from "../../utils/image";
import Href from "../ui/Href";
import { slugify } from "../../utils/slugify";
import { Clock, MapPin } from "lucide-react";

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
  const borderClass = theme === "dark" ? "border-white" : "border-black";

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
        <Select.Root
          value={sortKey}
          onValueChange={setSortKey}>
          <Select.Trigger className={`inline-flex items-center justify-center gap-2 bg-transparent focus:outline-none`}>
            <Select.Value />
            <Select.Icon>
              <ChevronDown size={16} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className={`overflow-hidden ${theme === "dark" ? "bg-black text-white border-white" : "bg-white text-black border-black"} border`}>
              <Select.ScrollUpButton className="flex items-center justify-center h-6 cursor-default">
                <ChevronUp />
              </Select.ScrollUpButton>
              <Select.Viewport className="p-1">
                {sortOptions.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className={`text-sm leading-none flex items-center h-6 pr-8 pl-6 relative select-none data-[highlighted]:outline-none ${theme === "dark" ? "data-[highlighted]:bg-red-300 data-[highlighted]:text-black" : "data-[highlighted]:bg-red-600 data-[highlighted]:text-white"}`}>
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
          className="whitespace-nowrap">
          {sortOrder === "asc" ? "(Aufsteigend)" : "(Absteigend)"}
        </button>
      </div>
      <div className="flex-shrink-0 p-2 px-4">
        <button
          onClick={onClearFilters}
          className={`${theme === "dark" ? "text-red-300" : "text-red-600"} underline underline-offset-4 whitespace-nowrap hover:underline`}>
          Filter löschen
        </button>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

const ListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState<"images" | "galleries">((searchParams.get("tab") as "images" | "galleries") || "images");
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [sortKey, setSortKey] = useState<"createDate" | "galleryTitle">((searchParams.get("sortBy") as "createDate" | "galleryTitle") || "createDate");
  const [gallerySortKey, setGallerySortKey] = useState<"title" | "createDate">((searchParams.get("gallerySortBy") as "title" | "createDate") || "title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">((searchParams.get("sortOrder") as "asc" | "desc") || "desc");
  const [startDate, setStartDate] = useState(searchParams.get("startDate") || "");
  const [endDate, setEndDate] = useState(searchParams.get("endDate") || "");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const debouncedStartDate = useDebounce(startDate, 300);
  const debouncedEndDate = useDebounce(endDate, 300);

  const { theme } = useTheme();

  useEffect(() => {
    const newSearchParams = new URLSearchParams();

    if (activeTab !== "images") newSearchParams.set("tab", activeTab);
    if (debouncedSearchTerm) newSearchParams.set("search", debouncedSearchTerm);
    if (sortKey !== "createDate") newSearchParams.set("sortBy", sortKey);
    if (gallerySortKey !== "title") newSearchParams.set("gallerySortBy", gallerySortKey);
    if (sortOrder !== "desc") newSearchParams.set("sortOrder", sortOrder);
    if (debouncedStartDate) newSearchParams.set("startDate", debouncedStartDate);
    if (debouncedEndDate) newSearchParams.set("endDate", debouncedEndDate);

    setSearchParams(newSearchParams, { replace: true });
  }, [activeTab, debouncedSearchTerm, sortKey, gallerySortKey, sortOrder, debouncedStartDate, debouncedEndDate, setSearchParams]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSortKey("createDate");
    setGallerySortKey("title");
    setSortOrder("desc");
    setStartDate("");
    setEndDate("");
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
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter((gallery) => {
        const titleMatch = gallery.title.toLowerCase().includes(lowerCaseSearchTerm);
        const imageMatch = gallery.images.some((image) => image.filename.toLowerCase().includes(lowerCaseSearchTerm));
        return titleMatch || imageMatch;
      });
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

            return true; // Search term is already handled above
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
    <div className="p-4 md:pl-0">
      <title>{`Liste aller Fotos und Galerien | ${CONFIG.meta.title}`}</title>
      <meta
        name="title"
        content={`Liste aller Fotos und Galerien | ${CONFIG.meta.title}`}
      />
      <meta
        name="description"
        content="Eine Liste aller Fotos und Galerien. Sortierbar und Filterbar."
      />

      <div className="flex gap-4 border-b">
        <button
          className={cn(`${CONFIG.theme.headline.one} py-2 sm:py-4 ${activeTab === "images" ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : useTheme().theme === "dark" ? "text-white" : "text-black"}`)}
          onClick={() => setActiveTab("images")}>
          Fotos
        </button>
        <button
          className={cn(`${CONFIG.theme.headline.one} py-2 sm:py-4 ${activeTab === "galleries" ? (useTheme().theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : useTheme().theme === "dark" ? "text-white" : "text-black"}`)}
          onClick={() => setActiveTab("galleries")}>
          Serien
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
          <div className="py-4 text-xs">
            {filteredAndSortedImages.length} {filteredAndSortedImages.length === 1 ? "Foto" : "Fotos"} gefunden
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            {filteredAndSortedImages.map((image) => (
              <div
                className="w-full lg:w-1/2"
                key={`${image.gallerySlug}-${image.filename}`}>
                <div className="flex lg:flex-row items-center gap-4 py-2">
                  <Link
                    className="block min-w-24 min-h-24 lg:w-24 lg:h-24 flex-shrink-0"
                    to={`/gallery/${image.gallerySlug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}>
                    <img
                      loading="lazy"
                      src={getImageUrl(image.gallerySlug, image.filename.replaceAll(" ", "_"), 160)}
                      alt={image.alt || `${image.galleryTitle} - ${image.filename}`}
                      width={128}
                      height={128}
                      className={cn(`${theme === "dark" ? "text-white bg-white/10" : "text-black bg-black/10"} lg:w-24 lg:h-24 min-w-24 min-h-24 w-24 h-24 object-cover `)}
                    />
                  </Link>
                  <div className="text-sm md:pr-4">
                    <Link to={`/gallery/${image.gallerySlug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}>
                      <h3 className="truncate text-base">{image.filename.replaceAll(".jpg", "")}</h3>
                    </Link>
                    <p className="flex items-center gap-2 text-xs mt-1">
                      <Clock size={12} />{" "}
                      <Href
                        hasDecoration={true}
                        to={`/app/timeline?scrollTo=${parseCreateDate(image.createDate)?.toISOString().split("T")[0]}`}>
                        {parseCreateDate(image.createDate)?.toLocaleString() || "Ungültiges Datum"}
                      </Href>
                    </p>
                    {image.latitude && image.longitude ? (
                      <p className="flex items-center gap-2 text-xs mt-1">
                        <MapPin size={12} />
                        <Href
                          target="_self"
                          className="text-xs"
                          href={`/app/map?gallery=${image.gallerySlug}&image=${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}>
                          {`${image.latitude.toFixed(3)}, ${image.longitude.toFixed(3)}`}
                        </Href>
                      </p>
                    ) : (
                      <p className="flex items-center gap-2 text-xs mt-1">
                        <MapPin size={12} />
                        <span className="truncate">N/A</span>
                      </p>
                    )}
                    <Href
                      className="flex items-center gap-2 text-xs mt-1"
                      href={getImageUrl(image.gallerySlug, image.filename.replaceAll(" ", "_"), "original")}
                      download>
                      <Download size={12} />
                      <span className="">Download Foto</span>
                    </Href>
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
          <div className="py-4 text-xs">
            {filteredAndSortedGalleries.length} {filteredAndSortedGalleries.length === 1 ? "Galerie" : "Galerien"} gefunden
          </div>
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
                        src={getImageUrl(gallery.slug, randomImage.filename.replaceAll(" ", "_"), 160)}
                        alt={gallery.title}
                        width={128}
                        height={128}
                        className={cn(`${theme === "dark" ? "text-white bg-white/10" : "text-black bg-black/10"} lg:w-24 lg:h-24 min-w-24 min-h-24 w-24 h-24 object-cover `)}
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
