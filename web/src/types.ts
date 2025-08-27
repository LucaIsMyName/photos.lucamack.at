// Legacy format - will be replaced with string format
export interface ExifDateTime {
  _ctor: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  tzoffsetMinutes?: number;
  rawValue: string;
  zoneName?: string;
  inferredZone: boolean;
}

// New type that allows both the legacy object format and the new string format
export type DateFormat = ExifDateTime | string | null;

export interface Image {
  width?: number;
  height?: number;
  filename: string;
  latitude?: number | null;
  longitude?: number | null;
  date?: string;
  camera?: string;
  createDate?: DateFormat;
  gallery?: string; // The slug of the gallery this image belongs to
  googleMapsUrl?: string | null;
  alt?: string | null;
  index?: number;
  colorData?: {
    dominantColors: {
      rgb: [number, number, number];
      hex: string;
      percentage: number;
    }[];
    colorfulness: number;
  };
  // Creative Commons and licensing metadata
  acquireLicensePage?: string;
  copyrightNotice?: string;
  creator?: string;
  creditText?: string;
  tags?: string[];
}

export interface Gallery {
  name: string; // folder name
  slug: string; // folder name
  title: string; // from markdown H1
  description: string; // from markdown first paragraph
  images: Image[];
  timeframe?: string;
  imageCount?: number;
  createDate?: DateFormat;
  // Creative Commons and licensing metadata
  acquireLicensePage?: string;
  copyrightNotice?: string;
  creator?: string;
  creditText?: string;
  tags?: string[];
}

export interface Page {
  title: string;
  slug: string;
  content: string;
}

export interface RelatedImage extends Image {
  gallerySlug: string;
  distance?: number;
  isRandomPick?: boolean;
  isNearestPick?: boolean;
  isSameGalleryPick?: boolean;
  isAdditionalRandomPick?: boolean;
}
