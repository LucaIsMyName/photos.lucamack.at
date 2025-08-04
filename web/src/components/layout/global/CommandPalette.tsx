import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Command } from "cmdk";
import { galleries } from "../../../galleries";
import { pages } from "../../../pages";
import { X, Search, Layout } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import type { Gallery, Image as ImageType } from "../../../types";
import { slugify } from "../../../utils/slugify";
import { getImageUrl } from "../../../utils/image";
import { CONFIG } from "../../../config";
import { parseCreateDate } from "../../../utils/date";

const CommandHeading = ({ title }: { title: string }) => {
  return (
    <div className="pt-4 pb-2 px-4 gap-8 select-none">
      <p className="text-[11px] tracking-[2px] uppercase opacity-50 font-mono">{title}</p>
    </div>
  );
};

// Define the app routes
const appRoutes = [
  { name: "Liste", path: "/app/list", icon: <Layout size={16} /> },
  { name: "Karte", path: "/app/map", icon: <Layout size={16} /> },
  { name: "Filter", path: "/app/filter", icon: <Layout size={16} /> },
  { name: "Timeline", path: "/app/timeline", icon: <Layout size={16} /> }
];

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  setMobileMenuOpen?: (isOpen: boolean) => void;
}

export default function CommandPalette({ open, onClose, setMobileMenuOpen }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Get all images from all galleries
  const allImages = useMemo(() => {
    return galleries.flatMap((gallery: Gallery | any) =>
      gallery.images.map((image: ImageType | any) => ({
        ...image,
        gallerySlug: gallery.slug,
        galleryTitle: gallery.title || gallery.name,
      }))
    );
  }, []);

  // Generate random images when search is empty
  const randomImages = useMemo(() => {
    if (search) return [];

    // Create a copy of the array to avoid mutating the original
    const shuffled = [...allImages];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return first 50 images after shuffling
    return shuffled.slice(0, 50);
  }, [allImages, search]);

  // Handle keyboard shortcut to open/close the command palette
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose();
      }

      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onClose]);

  const handleSelect = useCallback(
    (value: string) => {
      // Force close any mobile menu overlays by directly manipulating the DOM
      const mobileMenuOverlay = document.querySelector(".md\\:hidden.fixed.inset-0.z-\\[1000000\\]");
      if (mobileMenuOverlay) {
        // Remove the element from the DOM
        mobileMenuOverlay.remove();
      }

      // Also close the mobile menu via state if the prop is available
      if (setMobileMenuOpen) {
        setMobileMenuOpen(false);
      }

      // Navigate and close command palette
      navigate(value);
      onClose();
    },
    [navigate, onClose, setMobileMenuOpen]
  );

  if (!open) return null;

  const imageSizeClasses = "w-12 h-12 min-w-12 min-h-12 md:min-w-16 md:min-h-16 md:w-16 md:h-16";

  return (
    <div className={`fixed backdrop-blur-sm inset-0 z-[1000000] p-4 pt-[clamp(32px,10vh,240px)] bg-black/80 overflow-y-auto`}>
      <div className={`max-w-2xl w-full mx-auto shadow-2xl overflow-hidden ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
        <Command
          className={`w-full ${CONFIG.theme.border.default}`}
          filter={(value, search) => {
            // Extract the search term and convert to lowercase
            const searchLower = search.toLowerCase();
            const valueLower = value.toLowerCase();

            // Check if the value contains the search term
            if (valueLower.includes(searchLower)) return 1;
            return 0;
          }}>
          <div className={`flex items-center px-4 ${CONFIG.theme.border.bottom} ${theme === "light" ? "" : ""}`}>
            <Search className="w-4 h-4 mr-2 opacity-50" />
            <Command.Input
              autoFocus
              onFocus={(e) => {
                // select the whole current text
                e.target.select();
              }}
              placeholder="Seiten, Serien oder Fotos suchen ..."
              className={`w-full py-4 outline-none ${theme === "light" ? "text-black bg-white" : "text-white bg-black"}`}
              value={search}
              onValueChange={setSearch}
            />
            <button
              onClick={onClose}
              className="p-2">
              <X className="w-4 h-4 opacity-50" />
            </button>
          </div>

          <Command.List className={`max-h-[60vh] overflow-y-auto p-0 ${theme === "light" ? "bg-white" : "bg-black"}`}>
            <Command.Empty className="py-6 text-center text-xs opacity-70 font-mono">Keine Suchergebnisse gefunden.</Command.Empty>

            {/* Apps */}
            <Command.Group heading={<CommandHeading title="Apps" />}>
              {appRoutes.map((app) => (
                <Command.Item
                  key={app.path}
                  value={`${app.path} ${app.name}`}
                  onSelect={() => handleSelect(app.path)}
                  className={`flex items-center gap-2 p-4  cursor-pointer ${theme === "light" ? "hover:bg-neutral-200" : "hover:bg-neutral-800"}`}>
                  <span className="text-sm">{app.name}</span>
                </Command.Item>
              ))}
            </Command.Group>
            {/* Pages */}
            <Command.Group
              heading={<CommandHeading title="Seiten" />}
              className="">
              {pages.map((page) => (
                <Command.Item
                  key={page.slug}
                  value={`/page/${page.slug} ${page.title}`}
                  onSelect={() => handleSelect(`/page/${page.slug}`)}
                  className={`flex items-center gap-2 p-4  cursor-pointer ${theme === "light" ? "hover:bg-neutral-200" : "hover:bg-neutral-800"}`}>
                  <span className="text-sm">{page.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
            {/* Galleries */}
            <Command.Group heading={<CommandHeading title="Fotoserien" />}>
              {galleries.map((gallery: Gallery | any) => (
                <Command.Item
                  key={gallery.slug}
                  value={`/gallery/${gallery.slug} ${gallery.title || gallery.name}`}
                  onSelect={() => handleSelect(`/gallery/${gallery.slug}`)}
                  className={`flex items-center gap-4 p-2 px-4  cursor-pointer ${theme === "light" ? "hover:bg-neutral-200" : "hover:bg-neutral-800"}`}>
                  <img
                    className={`min-w-0 flex-shrink-0 ${imageSizeClasses} object-cover`}
                    src={getImageUrl(gallery.slug, gallery.images[0].filename.replaceAll(" ", "_"), 160)}
                  />
                  <div className="truncate">
                    <p className="truncate text-sm">{gallery.title || gallery.name}</p>
                    <p className="text-[11px]  opacity-70 truncate">
                      {gallery.imageCount} Fotos | {gallery.timeframe}
                    </p>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Images (limit to first 50 matches for performance) */}
            <Command.Group heading={<CommandHeading title="Fotos" />}>
              {/* Show random images when search is empty, otherwise show filtered images */}
              {(search ? allImages.filter((image) => image.filename.toLowerCase().includes(search.toLowerCase()) || image.galleryTitle.toLowerCase().includes(search.toLowerCase())).slice(0, 50) : randomImages).map((image, index) => (
                <Command.Item
                  key={`${image.gallerySlug}-${image.filename}-${index}`}
                  value={`/gallery/${image.gallerySlug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))} ${image.filename.replace(/\.[^/.]+$/, "")} ${image.galleryTitle}`}
                  onSelect={() => handleSelect(`/gallery/${image.gallerySlug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`)}
                  className={`flex items-center gap-4 p-2 px-4  cursor-pointer ${theme === "light" ? "hover:bg-neutral-200" : "hover:bg-neutral-800"}`}>
                  <img
                    className={`min-w-0 flex-shrink-0 ${imageSizeClasses} object-cover`}
                    src={getImageUrl(image.gallerySlug, image.filename.replaceAll(" ", "_"), 160)}
                    alt={image.filename}
                  />
                  <div className="flex flex-col">
                    <span className="truncate text-sm">{image.filename.replace(".jpg", "").replace(".png", "").replace(".webp", "")}</span>
                    <span className="text-[11px] opacity-70 truncate">
                      {parseCreateDate(image.createDate) &&
                        new Date(parseCreateDate(image.createDate)!).toLocaleDateString("de-DE", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                      | Fotoserie: {image.galleryTitle}
                    </span>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className={`p-2 ${CONFIG.theme.border.top}`}>
            <div className="px-2 text-[11px] opacity-70 md:flex justify-end font-mono">
              <p className="truncate text-right">Mit 'ESC' schließen</p>
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
}
