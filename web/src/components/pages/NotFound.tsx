import { CONFIG } from "../../config";
import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";
import Href from "../ui/Href";
import { useLocation } from "react-router-dom";
import { galleries } from "../../galleries";
import { useMemo } from "react";
import SeoHead from "../ui/SeoHead";

const NotFound = ({ title, text }: { title?: string; text?: string }) => {
  const { theme } = useTheme();
  const location = useLocation();

  // Extract potential gallery slug from URL
  const pathSegments = location.pathname.split("/").filter((segment) => segment);

  // Check if this might be a gallery URL with an invalid image
  const galleryInfo = useMemo(() => {
    // Check if the path starts with /gallery/ and has at least one segment after it
    if (pathSegments.length >= 2 && pathSegments[0] === "gallery") {
      const gallerySlug = pathSegments[1];
      // Check if this gallery slug exists
      const gallery = galleries.find((g) => g.slug === gallerySlug);
      if (gallery) {
        return {
          isValidGallery: true,
          gallerySlug,
          galleryTitle: gallery.title,
        };
      }
    }
    return { isValidGallery: false };
  }, [location.pathname]);

  return (
    <div className="py-4 md:py-8 px-4 md:px-0 flex flex-col items-start justify-start text-center">
      <SeoHead
        title={`404 | ${title || CONFIG.meta.title}`}
        description="Seite nicht gefunden"
        imageUrl={"/404.jpg"}
      />
      <div className="flex flex-col items-start">
        <figure className="mb-4">
          <img
            className="rotate-180"
            width={180}
            src="/404.jpg"
            alt="404"
          />
        </figure>
        <h1 className={cn(`text-4xl`, theme === "dark" ? "text-white" : "text-black")}>404</h1>
        {!galleryInfo.isValidGallery ? <p className="text-base mt-4">{text || "Seite nicht gefunden"}</p> : ""}

        {galleryInfo.isValidGallery ? (
          <>
            <p className="text-base mb-4">{text || `Das Foto wurde nicht gefunden, aber die Serie '${galleryInfo.galleryTitle}' existiert.`}</p>
            <div className="flex items-center gap-4">
              <Href
                to={`/gallery/${galleryInfo.gallerySlug}`}
                className={cn("", theme === "dark" ? "text-white" : "text-black")}>
                Zur Galerie
              </Href>
              <Href
                to="/"
                className={cn("", theme === "dark" ? "text-white" : "text-black")}>
                Zur Startseite
              </Href>
            </div>
          </>
        ) : (
          <Href
            to="/"
            className={cn("", theme === "dark" ? "text-white" : "text-black")}>
            Zur Startseite
          </Href>
        )}
      </div>
    </div>
  );
};

export default NotFound;
