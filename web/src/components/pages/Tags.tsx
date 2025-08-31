import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { galleries } from "../../galleries";
import { useTheme } from "../../contexts/ThemeContext";
import { getImageUrl } from "../../utils/image";
import { cn } from "../../utils/cn";
import { CONFIG } from "../../config";
import SeoHead from "../ui/SeoHead";

const Tags = () => {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Initialize selected tags from URL parameters
  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setSelectedTags([tagParam]);
    }
  }, [searchParams]);

  // Extract all unique tags from galleries
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    galleries.forEach((gallery) => {
      if (gallery.tags) {
        gallery.tags.forEach((tag) => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter galleries based on selected tags
  const filteredGalleries = useMemo(() => {
    if (selectedTags.length === 0) {
      return galleries.filter((gallery) => gallery.tags && gallery.tags.length > 0);
    }

    return galleries.filter((gallery) => {
      if (!gallery.tags) return false;
      // Gallery must have ALL selected tags (AND logic)
      return selectedTags.every((selectedTag) => gallery.tags!.includes(selectedTag));
    });
  }, [selectedTags]);

  // Get random images for galleries
  const galleryRandomImages = useMemo(() => {
    const imageMap: { [key: string]: any } = {};
    galleries.forEach((gallery) => {
      if (gallery.images && gallery.images.length > 0) {
        imageMap[gallery.slug] = gallery.images[Math.floor(Math.random() * gallery.images.length)];
      } else {
        imageMap[gallery.slug] = null;
      }
    });
    return imageMap;
  }, []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="p-4 md:px-8">
      <SeoHead
        title={`Tags | ${CONFIG.meta.title}`}
        description="Filter galleries by tags"
        imageUrl={getImageUrl(galleries[0].slug, galleries[0].images[Math.floor(Math.random() * galleries[0].images.length)].filename.replaceAll(" ", "_"), 640)}
      />

      <div className="mb-8">
        <h1 className={`${CONFIG.theme.headline.one} w-full max-w-[calc(var(--content-width)/(21/13))] text-wrap-balance pt-4 pb-4`}>Tags</h1>

        {/* Tag Filter Controls */}
        <div className={`mb-6 p-4 border shadow-[3px_3px_0px_#00000011] border-neutral-500/20 ${theme !== "light" ? "bg-black/10" : "bg-white/10"}`}>
          <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
            <span className={`text-xs ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>Verfügbare Tags</span>
            <button
              onClick={clearAllTags}
              className={`text-xs px-2 py-1 border border-neutral-500/20 transition-colors ${selectedTags.length > 0 ? (theme === "light" ? "bg-red-100 text-red-700 hover:bg-red-200" : "bg-red-900 text-red-300 hover:bg-red-800") : theme === "light" ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-800 text-gray-600 cursor-not-allowed"}`}
              disabled={selectedTags.length === 0}>
              Filter löschen
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const isSelected = selectedTags.includes(tag);

              return (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1.5 text-[9.5px] font-mono border border-neutral-500/20 transition-all duration-200 ${isSelected ? (theme === "light" ? "bg-black text-white" : "bg-white text-black") : theme === "light" ? "text-gray-700 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900"}`}>
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Tags Display */}
        {selectedTags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs ${theme === "light" ? "" : ""}`}>Ausgewählte Tags:</span>
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-1 text-[9.5px] border border-neutral-500/20 ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>{selectedTags.length === 0 ? `${filteredGalleries.length} ${filteredGalleries.length === 1 ? "Fotoserie" : "Fotoserien"} mit diesen Tags` : `${filteredGalleries.length} ${filteredGalleries.length === 1 ? "Fotoserie" : "Fotoserien"} gefunden mit ${selectedTags.length === 1 ? " dem Tag" : "allen Tags"}: ${selectedTags.join(", ")}`}</div>
      </div>

      {/* Gallery List */}
      {filteredGalleries.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          {filteredGalleries.map((gallery, index) => {
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
                      src={getImageUrl(gallery.slug, randomImage.filename.replaceAll(" ", "_"), 380)}
                      alt={gallery.title}
                      width={128}
                      height={128}
                      className={cn(`${theme === "dark" ? "text-white bg-white/10" : "text-black bg-black/10"} lg:w-32 lg:h-32 min-w-24 min-h-24 w-24 h-24 object-cover `)}
                    />
                  ) : (
                    <div className="lg:w-32 lg:h-32 w-24 h-24 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-xs text-gray-500">Kein Bild</span>
                    </div>
                  )}
                  <div className="text-sm flex-1">
                    <h3 className="truncate text-lg ">{gallery.title}</h3>
                    <p className="truncate text-xs">{gallery.images?.length || 0} Bilder</p>
                    <p className="truncate text-xs">Datum: {gallery.timeframe || "N/V"}</p>
                    {gallery.tags && gallery.tags.length > 0 && (
                      <div className="relative mt-2">
                        <div className="flex gap-1 overflow-hidden">
                          {gallery.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`flex-shrink-0 whitespace-nowrap px-1.5 py-0.5 text-[11px] border border-neutral-500/20 ${selectedTags.includes(tag) ? (theme === "light" ? "bg-black text-white" : "bg-white text-black") : theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className={`absolute right-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l ${theme === "light" ? "from-white" : "from-black"} to-transparent`}></div>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={` py-12 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
          <p className="text-lg mb-2">Keine Serien gefunden</p>
          <p className="text-sm">{selectedTags.length > 0 ? "Versuche weniger Tag-Kombinationen" : "Keine Fotoserien haben diese Tags"}</p>
        </div>
      )}
    </div>
  );
};

export default Tags;
