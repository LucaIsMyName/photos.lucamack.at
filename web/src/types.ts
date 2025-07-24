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

export interface Image {
  width?: number;
  height?: number;
  filename: string;
  latitude?: number | null;
  longitude?: number | null;
  date?: string;
  camera?: string;
  createDate?: ExifDateTime;
  gallery?: string; // The slug of the gallery this image belongs to
  googleMapsUrl?: string | null;
  alt?: string | null;
  index?: number;
}

export interface Gallery {
  name: string; // folder name
  slug: string; // folder name
  title: string; // from markdown H1
  description: string; // from markdown first paragraph
  images: Image[];
  timeframe?: string;
  imageCount?: number;
  createDate?: ExifDateTime;
}

export interface Page {
  title: string;
  slug: string;
  content: string;
}

export interface RelatedImage extends Image {
  gallerySlug: string;
  distance?: number;
}
