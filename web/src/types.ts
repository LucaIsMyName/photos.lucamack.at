export interface Image {
  filename: string;
  latitude?: number | null;
  longitude?: number | null;
}

export interface Gallery {
  name: string; // folder name
  slug: string; // folder name
  title: string; // from markdown H1
  description: string; // from markdown first paragraph
  images: Image[];
}
