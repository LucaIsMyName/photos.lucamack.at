export const getImageUrl = (gallerySlug: string, filename: string, size: string = 'original'): string => {
  const encodedFilename = encodeURI(filename.replaceAll(" ", "_"));
  
  if (size === 'original') {
    return `/content/galleries/${gallerySlug}/${encodedFilename}`;
  }
  
  const ext = filename.split('.').pop()?.toLowerCase();
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '').replaceAll(" ", "_");
  
  return `/content/galleries/${gallerySlug}/${nameWithoutExt}-${size}w.${ext}`;
};
