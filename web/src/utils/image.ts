/**
 * @deprecated Use getImageUrl instead
 */
export const getSizedImagePath = (filename: string, width: 640 | 1440): string => {
  return filename.replace(/\.(heic|jpg|jpeg|png|webp)$/i, `-${width}w.jpg`).trim();
};

export type ImageSize = "original" | 640 | 1440;

export const getImageUrl = (gallerySlug: string, filename: string, size: ImageSize = "original"): string => {
  if (size === "original") {
    return `/content/galleries/${gallerySlug}/${filename}`;
  }

  const sizedFilename = filename.replace(/\.(heic|jpg|jpeg|png|webp)$/i, `-${size}w.jpg`).trim();
  return `/content/galleries/${gallerySlug}/${sizedFilename}`;
};
