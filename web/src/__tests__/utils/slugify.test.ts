import { describe, it, expect } from 'vitest';
import { slugify } from '../../utils/slugify';

describe('slugify', () => {
  it('should convert string to lowercase', () => {
    expect(slugify('Hello')).toBe('hello');
  });

  it('should replace spaces with hyphens', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });

  it('should remove special characters', () => {
    expect(slugify('hello!@#$%^&*()')).toBe('hello');
  });

  it('should remove accents', () => {
    expect(slugify('héllò wörld')).toBe('hello-world');
  });

  it('should handle multiple hyphens', () => {
    expect(slugify('hello  world')).toBe('hello-world');
  });

  it('should trim leading and trailing spaces', () => {
    expect(slugify(' hello world ')).toBe('hello-world');
  });

  it('should handle empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('should handle complex strings', () => {
    expect(slugify('Héllö Wörld! This is a test 123')).toBe('hello-world-this-is-a-test-123');
  });

  it('should handle strings with multiple spaces and special characters', () => {
    expect(slugify('  Hello  World!@#  ')).toBe('hello-world');
  });
});
