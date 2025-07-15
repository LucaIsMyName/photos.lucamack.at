import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { galleries } from "../galleries";
import type { Image as ImageType, Gallery } from "../types";

interface FoundImage {
  image: ImageType;
  gallery: Gallery;
}

export const useImage = (): FoundImage | undefined => {
  const { imageName } = useParams<{ imageName: string }>();

  const foundImage: FoundImage | undefined = useMemo(() => {
    if (!imageName) return undefined;
    for (const gallery of galleries) {
      const image = gallery.images?.find((img) => img.filename.replace(/\.[^/.]+$/, "") === imageName);
      if (image) {
        return { image, gallery };
      }
    }
    return undefined;
  }, [imageName]);

  return foundImage;
};
