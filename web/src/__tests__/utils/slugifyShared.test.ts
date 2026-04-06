import { describe, it, expect } from 'vitest';
import { slugifyGalleryFolder, slugifyImageStem } from '@slugify';

describe('slugifyImageStem (image URLs)', () => {
  it('matches legacy app behaviour: spaces to hyphens, accents stripped', () => {
    expect(slugifyImageStem('Hello')).toBe('hello');
    expect(slugifyImageStem('hello world')).toBe('hello-world');
    expect(slugifyImageStem('hello!@#$%^&*()')).toBe('hello');
    expect(slugifyImageStem('héllò wörld')).toBe('hello-world');
    expect(slugifyImageStem('hello  world')).toBe('hello-world');
    expect(slugifyImageStem(' hello world ')).toBe('hello-world');
    expect(slugifyImageStem('')).toBe('');
    expect(slugifyImageStem('Héllö Wörld! This is a test 123')).toBe('hello-world-this-is-a-test-123');
    expect(slugifyImageStem('  Hello  World!@#  ')).toBe('hello-world');
  });
});

describe('slugifyGalleryFolder (content folder slugs)', () => {
  it('uses underscores and German umlaut expansion', () => {
    expect(slugifyGalleryFolder('Arsenal')).toBe('arsenal');
    expect(slugifyGalleryFolder('Baden Gehen')).toBe('baden_gehen');
    expect(slugifyGalleryFolder('Größe')).toBe('groesse');
    expect(slugifyGalleryFolder('Fußball')).toBe('fussball');
  });
});
