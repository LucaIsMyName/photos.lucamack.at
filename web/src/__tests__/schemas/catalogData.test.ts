import { describe, it, expect } from 'vitest';
import { parseImagesJson, parseGalleriesJson } from '../../schemas/catalogData';

describe('catalogData', () => {
  it('parseImagesJson maps name to filename and accepts valid payloads', () => {
    const images = parseImagesJson([
      {
        name: 'Test Photo.jpg',
        gallery: 'arsenal',
        latitude: 1,
        longitude: 2,
      },
    ]);
    expect(images).toHaveLength(1);
    expect(images[0]?.filename).toBe('Test Photo.jpg');
    expect(images[0]?.gallery).toBe('arsenal');
  });

  it('parseGalleriesJson normalizes nested images', () => {
    const galleries = parseGalleriesJson([
      {
        name: 'g',
        slug: 'g',
        title: 'G',
        description: 'd',
        images: [{ name: 'a.jpg' }],
      },
    ]);
    expect(galleries).toHaveLength(1);
    expect(galleries[0]?.images[0]?.filename).toBe('a.jpg');
  });

  it('returns empty array on invalid JSON shape', () => {
    expect(parseImagesJson({ not: 'array' })).toEqual([]);
    expect(parseGalleriesJson(null)).toEqual([]);
  });
});
