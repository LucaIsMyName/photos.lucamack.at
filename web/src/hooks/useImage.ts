import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { galleries } from "../galleries";
import type { Image as ImageType, Gallery } from "../types";
import { slugify } from "../utils/slugify";

interface FoundImage {
  image: ImageType;
  gallery: Gallery;
}

export const useImage = (): FoundImage | undefined => {
  const { gallerySlug, slug } = useParams<{ gallerySlug: string; slug: string }>();

  const foundImage: FoundImage | undefined = useMemo(() => {
    if (!gallerySlug || !slug) return undefined;

    const gallery = galleries.find((g) => g.slug === gallerySlug);
    if (!gallery) return undefined;

    const image = gallery.images?.find((img) => {
      const imageName = img.filename.replace(/\.[^/.]+$/, "");
      return slugify(imageName) === slug;
    });

    if (image) {
      return { image, gallery };
    }

    return undefined;
  }, [gallerySlug, slug]);

  return foundImage;
};
