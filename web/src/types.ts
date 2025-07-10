export interface Image {
  filename: string;
  latitude?: number | null;
  longitude?: number | null;
  createDate?: any;
  gallery?: string; // The slug of the gallery this image belongs to
}

export interface Gallery {
  name: string; // folder name
  slug: string; // folder name
  title: string; // from markdown H1
  description: string; // from markdown first paragraph
  images: Image[];
  timeframe?: string;
  imageCount?: number;
}

export interface Page {
  title: string;
  slug: string;
  content: string;
}
