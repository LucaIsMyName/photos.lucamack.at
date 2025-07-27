import { describe, it, expect } from 'vitest';
import { parseCreateDate } from '../../utils/date';

describe('parseCreateDate', () => {
  it('should return null for null input', () => {
    expect(parseCreateDate(null)).toBeNull();
  });

  it('should return null for undefined input', () => {
    expect(parseCreateDate(undefined)).toBeNull();
  });

  it('should parse ISO string date format', () => {
    // Using a specific date in UTC format
    const isoDate = '2023-07-15T14:30:45.000Z';
    const result = parseCreateDate(isoDate);
    
    expect(result).toBeInstanceOf(Date);
    expect(result?.getUTCFullYear()).toBe(2023);
    expect(result?.getUTCMonth()).toBe(6); // July is 6 (0-indexed)
    expect(result?.getUTCDate()).toBe(15);
    expect(result?.getUTCHours()).toBe(14);
    expect(result?.getUTCMinutes()).toBe(30);
    expect(result?.getUTCSeconds()).toBe(45);
  });

  it('should parse legacy object format with all fields', () => {
    const legacyDate = {
      _ctor: 'exif',
      year: 2022,
      month: 3, // March
      day: 10,
      hour: 9,
      minute: 15,
      second: 30,
      rawValue: 'raw',
      inferredZone: false
    };
    
    const result = parseCreateDate(legacyDate);
    
    expect(result).toBeInstanceOf(Date);
    expect(result?.getFullYear()).toBe(2022);
    expect(result?.getMonth()).toBe(2); // March is 2 (0-indexed)
    expect(result?.getDate()).toBe(10);
    expect(result?.getHours()).toBe(9);
    expect(result?.getMinutes()).toBe(15);
    expect(result?.getSeconds()).toBe(30);
  });

  it('should parse legacy object format with only required fields', () => {
    const legacyDate = {
      _ctor: 'exif',
      year: 2021,
      month: 12, // December
      day: 25,
      hour: 0,     // Required by ExifDateTime interface
      minute: 0,   // Required by ExifDateTime interface
      second: 0,   // Required by ExifDateTime interface
      rawValue: 'raw',
      inferredZone: false
    };
    
    const result = parseCreateDate(legacyDate);
    
    expect(result).toBeInstanceOf(Date);
    expect(result?.getFullYear()).toBe(2021);
    expect(result?.getMonth()).toBe(11); // December is 11 (0-indexed)
    expect(result?.getDate()).toBe(25);
    expect(result?.getHours()).toBe(0); // Default to 0 when not provided
    expect(result?.getMinutes()).toBe(0); // Default to 0 when not provided
    expect(result?.getSeconds()).toBe(0); // Default to 0 when not provided
  });

  it('should return null for invalid object format', () => {
    const invalidObject = { foo: 'bar' };
    expect(parseCreateDate(invalidObject as any)).toBeNull();
  });

  it('should handle timezone offset in legacy format', () => {
    const legacyDate = {
      _ctor: 'exif',
      year: 2022,
      month: 6, // June
      day: 15,
      hour: 12,
      minute: 30,
      second: 0,
      tzoffsetMinutes: 120, // +2 hours
      rawValue: 'raw',
      inferredZone: false
    };
    
    const result = parseCreateDate(legacyDate);
    
    expect(result).toBeInstanceOf(Date);
    expect(result?.getFullYear()).toBe(2022);
    expect(result?.getMonth()).toBe(5); // June is 5 (0-indexed)
    expect(result?.getDate()).toBe(15);
  });
});
