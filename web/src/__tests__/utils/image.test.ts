import { describe, it, expect } from 'vitest';
import { getSizedImagePath, getImageUrl } from '../../utils/image';

describe('getSizedImagePath', () => {
  it('should replace jpg extension with sized version', () => {
    expect(getSizedImagePath('image.jpg', 640)).toBe('image-640w.jpg');
  });

  it('should replace jpeg extension with sized version', () => {
    expect(getSizedImagePath('image.jpeg', 1440)).toBe('image-1440w.jpg');
  });

  it('should replace png extension with sized version', () => {
    expect(getSizedImagePath('image.png', 640)).toBe('image-640w.jpg');
  });

  it('should replace webp extension with sized version', () => {
    expect(getSizedImagePath('image.webp', 1440)).toBe('image-1440w.jpg');
  });

  it('should replace heic extension with sized version', () => {
    expect(getSizedImagePath('image.heic', 640)).toBe('image-640w.jpg');
  });

  it('should handle filenames with spaces', () => {
    expect(getSizedImagePath('my image.jpg', 640)).toBe('my image-640w.jpg');
  });

  it('should be case insensitive for extensions', () => {
    expect(getSizedImagePath('image.JPG', 640)).toBe('image-640w.jpg');
    expect(getSizedImagePath('image.Jpeg', 1440)).toBe('image-1440w.jpg');
  });
});

describe('getImageUrl', () => {
  it('should return original image path when size is "original"', () => {
    expect(getImageUrl('gallery-1', 'image.jpg', 'original'))
      .toBe('/content/galleries/gallery-1/image.jpg');
  });

  it('should return original image path when no size is provided', () => {
    expect(getImageUrl('gallery-1', 'image.jpg'))
      .toBe('/content/galleries/gallery-1/image.jpg');
  });

  it('should return sized image path for numeric sizes', () => {
    expect(getImageUrl('gallery-1', 'image.jpg', 640))
      .toBe('/content/galleries/gallery-1/image-640w.jpg');
    expect(getImageUrl('gallery-1', 'image.jpg', 1440))
      .toBe('/content/galleries/gallery-1/image-1440w.jpg');
    expect(getImageUrl('gallery-1', 'image.jpg', 380))
      .toBe('/content/galleries/gallery-1/image-380w.jpg');
    expect(getImageUrl('gallery-1', 'image.jpg', 160))
      .toBe('/content/galleries/gallery-1/image-160w.jpg');
  });

  it('should handle different file extensions', () => {
    expect(getImageUrl('gallery-1', 'image.png', 640))
      .toBe('/content/galleries/gallery-1/image-640w.jpg');
    expect(getImageUrl('gallery-1', 'image.webp', 640))
      .toBe('/content/galleries/gallery-1/image-640w.jpg');
    expect(getImageUrl('gallery-1', 'image.heic', 640))
      .toBe('/content/galleries/gallery-1/image-640w.jpg');
  });

  it('should handle filenames with spaces', () => {
    expect(getImageUrl('gallery-1', 'my image.jpg', 640))
      .toBe('/content/galleries/gallery-1/my image-640w.jpg');
  });

  it('should be case insensitive for extensions', () => {
    expect(getImageUrl('gallery-1', 'image.JPG', 640))
      .toBe('/content/galleries/gallery-1/image-640w.jpg');
    expect(getImageUrl('gallery-1', 'image.Jpeg', 640))
      .toBe('/content/galleries/gallery-1/image-640w.jpg');
  });

  it('should handle gallery slugs with special characters', () => {
    expect(getImageUrl('gallery-with-hyphens', 'image.jpg', 640))
      .toBe('/content/galleries/gallery-with-hyphens/image-640w.jpg');
  });
});
