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
  const { slug } = useParams<{ slug: string }>();

  const foundImage: FoundImage | undefined = useMemo(() => {
    if (!slug) return undefined;
    for (const gallery of galleries) {
      const image = gallery.images?.find((img) => {
        const imageName = img.filename.replace(/\.[^/.]+$/, "");
        return slugify(imageName) === slug;
      });
      if (image) {
        return { image, gallery };
      }
    }
    return undefined;
  }, [slug]);

  return foundImage;
};
