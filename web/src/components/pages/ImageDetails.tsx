import { CONFIG } from "../../config";
import Image from "../ui/Image";
import { getImageUrl } from "../../utils/image";
import { useImage } from "../../hooks/useImage";
import { useEffect } from "react";
import { parseCreateDate } from "../../utils/date";
import { galleries } from "../../galleries";
import { useMemo } from "react";
import type { RelatedImage } from "../../types";
import NotFoundPage from "./NotFound";
import Download from "../layout/image-page/Download";
import Map from "../layout/image-page/Map";
import Subheading from "../layout/image-page/Subheading";
import ColorPallette from "../layout/image-page/ColorPallette";
import ImagesRow from "../layout/global/ImagesRow";
import SeoHead from "../ui/SeoHead";
import { Copyright } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import Href from "../ui/Href";
import { cn } from "../../utils/cn";

const ImageDetails = () => {
  const foundImage = useImage();

  const theme = useTheme().theme;

  useEffect(() => {
    if (foundImage) {
      const { image, gallery } = foundImage;
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "image-structured-data";

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: image.filename.replaceAll("_", " ").replace(".jpg", "").trim(),
        description: `A photo from the gallery: ${gallery.title}`,
        contentUrl: `${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), "original")}`,
        width: image.width, // Default width - could be dynamic if available
        height: image.height, // Default height - could be dynamic if available
        datePublished: image.createDate ? parseCreateDate(image.createDate)?.toISOString().split("T")[0] || new Date().toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
        dateCreated: image.createDate ? parseCreateDate(image.createDate)?.toISOString().split("T")[0] || new Date().toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
        author: {
          "@type": "Person",
          name: CONFIG.author,
          url: CONFIG.url,
        },
        copyrightHolder: {
          "@type": "Person",
          name: CONFIG.author,
        },
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        ...(image.latitude &&
          image.longitude && {
            geo: {
              "@type": "GeoCoordinates",
              latitude: image.latitude,
              longitude: image.longitude,
            },
          }),
        ...(image.googleMapsUrl && { sameAs: image.googleMapsUrl }),
      };

      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        const existingScript = document.getElementById("image-structured-data");
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [foundImage]);
  if (!foundImage) {
    return (
      <>
        <NotFoundPage title="Foto nicht gefunden" />
      </>
    );
  }

  const { image, gallery } = foundImage;

  const relatedImages: RelatedImage[] = useMemo(() => {
    if (!foundImage) return [];

    const { image: currentImage, gallery: currentGallery } = foundImage;

    // Helper function to get distance between two points
    const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 6371; // Radius of the earth in km
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    // Track selected images to avoid duplicates
    const selectedImageFilenames = new Set<string>();
    selectedImageFilenames.add(currentImage.filename);

    // Result array to store our 6 images
    const result: RelatedImage[] = [];

    // Create a pool of all available images (excluding current)
    const allImagesPool = galleries.flatMap((g) => g.images.map((img) => ({ ...img, gallerySlug: g.slug }))).filter((img) => img.filename !== currentImage.filename);

    // 1. Get 2 nearest images by distance (any gallery)
    if (currentImage.latitude && currentImage.longitude) {
      const nearbyImages = allImagesPool
        .filter((img) => !selectedImageFilenames.has(img.filename) && img.latitude && img.longitude)
        .map((img) => ({
          ...img,
          distance: getDistance(currentImage.latitude!, currentImage.longitude!, img.latitude!, img.longitude!),
          isNearestPick: true,
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2);

      // Add to results and track selected images
      nearbyImages.forEach((img) => {
        // Fix the rgb type to match the expected [number, number, number] tuple
        if (img.colorData?.dominantColors) {
          img.colorData.dominantColors = img.colorData.dominantColors.map((color) => ({
            ...color,
            rgb: color.rgb.slice(0, 3) as [number, number, number],
          }));
        }
        result.push(img as any);
        selectedImageFilenames.add(img.filename);
      });
    }

    // 2. Get 2 images from the same gallery (any distance)
    const sameGalleryImages = currentGallery.images
      .filter((img: any) => !selectedImageFilenames.has(img.filename))
      .map(
        (img: any) =>
          ({
            ...img,
            gallerySlug: currentGallery.slug,
            isSameGalleryPick: true,
          } as RelatedImage)
      );

    // If we have more than 2 images from the same gallery, select 2 random ones
    if (sameGalleryImages.length > 2) {
      // Shuffle the array
      for (let i = sameGalleryImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sameGalleryImages[i], sameGalleryImages[j]] = [sameGalleryImages[j], sameGalleryImages[i]];
      }
    }

    // Take up to 2 images from the same gallery
    const selectedSameGallery = sameGalleryImages.slice(0, 2);
    selectedSameGallery.forEach((img: any) => {
      // Fix the rgb type to match the expected [number, number, number] tuple
      if (img.colorData?.dominantColors) {
        img.colorData.dominantColors = img.colorData.dominantColors.map((color: any) => ({
          ...color,
          rgb: color.rgb.slice(0, 3) as [number, number, number],
        }));
      }
      result.push(img);
      selectedImageFilenames.add(img.filename);
    });

    // 3. Get 2 random images from any gallery (excluding already selected)
    const randomPool = allImagesPool.filter((img) => !selectedImageFilenames.has(img.filename));

    // If we have random images available
    if (randomPool.length > 0) {
      // Shuffle the array
      for (let i = randomPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomPool[i], randomPool[j]] = [randomPool[j], randomPool[i]];
      }

      // Take up to 2 random images
      const randomImages = randomPool.slice(0, 2).map(
        (img) =>
          ({
            ...img,
            isRandomPick: true,
          } as any)
      );

      randomImages.forEach((img) => {
        // Fix the rgb type to match the expected [number, number, number] tuple
        if (img.colorData?.dominantColors) {
          img.colorData.dominantColors = img.colorData.dominantColors.map((color: any) => ({
            ...color,
            rgb: color.rgb.slice(0, 3) as [number, number, number],
          }));
        }
        result.push(img);
        selectedImageFilenames.add(img.filename);
      });
    }

    // 4. Fill remaining slots with additional random images if needed
    // We want exactly 6 images total
    if (result.length < 6) {
      const remainingNeeded = 6 - result.length;

      // Get more random images to fill the remaining slots
      const additionalRandomPool = allImagesPool.filter((img) => !selectedImageFilenames.has(img.filename));

      if (additionalRandomPool.length > 0) {
        // Shuffle the array
        for (let i = additionalRandomPool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [additionalRandomPool[i], additionalRandomPool[j]] = [additionalRandomPool[j], additionalRandomPool[i]];
        }

        // Take as many as needed to reach 6 total
        const additionalRandomImages = additionalRandomPool.slice(0, remainingNeeded).map(
          (img) =>
            ({
              ...img,
              isRandomPick: true,
              isAdditionalRandomPick: true, // Mark these as additional random picks
            } as any)
        );

        additionalRandomImages.forEach((img) => {
          result.push(img);
          selectedImageFilenames.add(img.filename);
        });
      }
    }

    // 5. Shuffle the final result array
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }, [foundImage]);

  return (
    <div className="w-full md:max-w-[var(--content-width)] p-4 md:py-8 md:px-0  md:px-8  flex flex-col items-center">
      <SeoHead
        title={`${image.filename.replace("_", " ").replace(".jpg", "").trim()} | ${gallery.title} | ${CONFIG.meta.title}`}
        description={`${gallery.title} - ${image.filename.replace(".jpg", "")}`}
        imageUrl={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`}
      />
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <div className="flex items-center h-auto md:h-[85vh]">
          <Image
            src={getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")))}
            alt={image.filename.replaceAll("_", " ").replace(".jpg", "").trim()}
            width={image.width}
            height={image.height}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="max-h-full h-full max-w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-0 w-full">
          <h1 className="text-base md:text-3xl mb-4 text-balance">{image.filename.replaceAll("_", " ").replace(".jpg", "").trim()}</h1>
          <div className="flex items-center gap-2">
              <Copyright
                size={16}
                className={cn(theme === "dark" ? "text-neutral-400" : "text-neutral-500")}
              />
              <span className={`text-[11px] md:text-xs font-mono `}>
                <Href to="/page/imprint">{CONFIG.author}</Href>
              </span>
            </div>
          <Subheading
            image={image}
            gallery={gallery}
          />
          {image.colorData?.dominantColors && image.colorData.dominantColors.length > 0 && <ColorPallette image={image} />}

          <div className={`flex flex-col lg:flex-row-reverse gap-8 mt-4 ${CONFIG.theme.border.top} pt-4 md:pt-8`}>
            <Download
              gallery={gallery}
              image={image}
            />
            {image.latitude && image.longitude && (
              <Map
                image={image}
                gallery={gallery}
              />
            )}
          </div>
        </div>
      </div>

      {/* Color Palette Section */}

      {/* Related Images Section */}
      {relatedImages.length > 0 && (
        <ImagesRow
          images={relatedImages}
          title="Andere Fotos"
        />
      )}
    </div>
  );
};

export default ImageDetails;
