import { z } from 'zod';
import type { Gallery, Image } from '../types';

const dominantColorSchema = z.object({
  rgb: z.tuple([z.number(), z.number(), z.number()]),
  hex: z.string(),
  percentage: z.union([z.string(), z.number()]),
});

const colorDataSchema = z.object({
  dominantColors: z.array(dominantColorSchema),
  colorfulness: z.union([z.string(), z.number()]),
});

/** Raw image as stored in galleries.ts or API JSON (filename vs name). */
export const catalogImageRecordSchema = z
  .object({
    filename: z.string().optional(),
    name: z.string().optional(),
    gallery: z.string().optional(),
    latitude: z.number().nullable().optional(),
    longitude: z.number().nullable().optional(),
    createDate: z.unknown().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    tags: z.array(z.string()).optional(),
    colorData: colorDataSchema.optional(),
    alt: z.string().nullable().optional(),
    urls: z.record(z.string(), z.string()).optional(),
    date: z.string().optional(),
    camera: z.string().optional(),
    googleMapsUrl: z.string().nullable().optional(),
    index: z.number().optional(),
    creator: z.string().optional(),
    copyrightNotice: z.string().optional(),
    creditText: z.string().optional(),
    acquireLicensePage: z.string().optional(),
  })
  .passthrough();

export type CatalogImageRecord = z.infer<typeof catalogImageRecordSchema>;

export function normalizeCatalogImage(record: CatalogImageRecord): Image | null {
  const { filename: fileField, name, ...rest } = record;
  const filename = fileField ?? name;
  if (!filename) return null;
  return { ...rest, filename } as Image;
}

const galleryRecordSchema = z
  .object({
    name: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    images: z.array(catalogImageRecordSchema),
    timeframe: z.string().optional(),
    imageCount: z.number().optional(),
    createDate: z.unknown().optional(),
    tags: z.array(z.string()).optional(),
    creator: z.string().optional(),
    copyrightNotice: z.string().optional(),
    creditText: z.string().optional(),
    acquireLicensePage: z.string().optional(),
  })
  .passthrough();

export const imagesJsonSchema = z.array(catalogImageRecordSchema);
export const galleriesJsonSchema = z.array(galleryRecordSchema);

export function parseImagesJson(data: unknown): Image[] {
  const parsed = imagesJsonSchema.safeParse(data);
  if (!parsed.success) {
    console.error('Invalid images.json shape:', parsed.error.flatten());
    return [];
  }
  return parsed.data
    .map(normalizeCatalogImage)
    .filter((img): img is Image => img !== null);
}

export function parseGalleriesJson(data: unknown): Gallery[] {
  const parsed = galleriesJsonSchema.safeParse(data);
  if (!parsed.success) {
    console.error('Invalid galleries.json shape:', parsed.error.flatten());
    return [];
  }
  return parsed.data.map(
    (g) =>
      ({
        ...g,
        images: g.images.map(normalizeCatalogImage).filter((img): img is Image => img !== null),
      }) as Gallery,
  );
}
