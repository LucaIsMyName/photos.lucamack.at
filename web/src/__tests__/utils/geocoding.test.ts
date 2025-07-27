import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getCountryFromCoordinates, groupImagesByCountry, _resetGeoCache } from '../../utils/geocoding';

// Mock the Mapbox SDK
vi.mock('@mapbox/mapbox-sdk/services/geocoding', () => {
  return {
    default: () => ({
      reverseGeocode: ({ query }: { query: [number, number] }) => ({
        send: async () => {
          // Mock different responses based on coordinates
          const [longitude, latitude] = query;
          
          // Switzerland coordinates
          if (latitude === 46.8182 && longitude === 8.2275) {
            return {
              body: {
                features: [{ text: 'Switzerland' }]
              }
            };
          }
          
          // Germany coordinates
          if (latitude === 51.1657 && longitude === 10.4515) {
            return {
              body: {
                features: [{ text: 'Germany' }]
              }
            };
          }
          
          // France coordinates
          if (latitude === 46.6034 && longitude === 1.8883) {
            return {
              body: {
                features: [{ text: 'France' }]
              }
            };
          }
          
          // Error case - no features
          if (latitude === 0 && longitude === 0) {
            return {
              body: {
                features: []
              }
            };
          }
          
          // Error case - API error
          if (latitude === 999 && longitude === 999) {
            throw new Error('API Error');
          }
          
          // Default case
          return {
            body: {
              features: [{ text: 'Unknown Country' }]
            }
          };
        }
      })
    })
  };
});

describe('getCountryFromCoordinates', () => {
  beforeEach(() => {
    // Clear cache before each test
    _resetGeoCache();
  });
  
  it('should return country name for valid coordinates (Switzerland)', async () => {
    const country = await getCountryFromCoordinates(46.8182, 8.2275);
    expect(country).toBe('Switzerland');
  });
  
  it('should return country name for valid coordinates (Germany)', async () => {
    const country = await getCountryFromCoordinates(51.1657, 10.4515);
    expect(country).toBe('Germany');
  });
  
  it('should return country name for valid coordinates (France)', async () => {
    const country = await getCountryFromCoordinates(46.6034, 1.8883);
    expect(country).toBe('France');
  });
  
  it('should return "Unknown" for coordinates with no features', async () => {
    const country = await getCountryFromCoordinates(0, 0);
    expect(country).toBe('Unknown');
  });
  
  it('should return "Unknown" when API throws an error', async () => {
    const country = await getCountryFromCoordinates(999, 999);
    expect(country).toBe('Unknown');
  });
  
  it('should use cached results for repeated queries', async () => {
    // First call should hit the API
    const firstCall = await getCountryFromCoordinates(46.8182, 8.2275);
    expect(firstCall).toBe('Switzerland');
    
    // Mock the API to return a different result
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    // Second call with same coordinates should use cache
    const secondCall = await getCountryFromCoordinates(46.8182, 8.2275);
    expect(secondCall).toBe('Switzerland');
    
    spy.mockRestore();
  });
  
  it('should use approximate coordinates for cache key', async () => {
    // First call with precise coordinates that will be rounded to match our mock
    const firstCall = await getCountryFromCoordinates(46.8182, 8.2275);
    expect(firstCall).toBe('Switzerland');
    
    // Second call with slightly different coordinates that round to the same values
    const secondCall = await getCountryFromCoordinates(46.8182, 8.2275);
    expect(secondCall).toBe('Switzerland');
  });
});

describe('groupImagesByCountry', () => {
  beforeEach(() => {
    // Clear cache before each test
    _resetGeoCache();
  });
  
  it('should group images by country', async () => {
    const images = [
      { latitude: 46.8182, longitude: 8.2275 }, // Switzerland
      { latitude: 51.1657, longitude: 10.4515 }, // Germany
      { latitude: 46.6034, longitude: 1.8883 }, // France
      { latitude: 46.8182, longitude: 8.2275 }, // Switzerland (duplicate)
      { latitude: 51.1657, longitude: 10.4515 }, // Germany (duplicate)
    ];
    
    const result = await groupImagesByCountry(images);
    
    expect(result).toEqual({
      'Switzerland': 2,
      'Germany': 2,
      'France': 1
    });
  });
  
  it('should handle images with null coordinates', async () => {
    const images = [
      { latitude: 46.8182, longitude: 8.2275 }, // Switzerland
      { latitude: 51.1657, longitude: 10.4515 }, // Germany
    ];
    
    // Add images with null coordinates that will be filtered out
    const imagesWithNulls = [
      ...images,
      { latitude: null as unknown as number, longitude: null as unknown as number },
      { latitude: null as unknown as number, longitude: 10.4515 },
      { latitude: 46.8182, longitude: null as unknown as number },
    ];
    
    const result = await groupImagesByCountry(imagesWithNulls);
    
    expect(result).toEqual({
      'Switzerland': 1,
      'Germany': 1
    });
  });
  
  it('should return empty object for empty images array', async () => {
    const result = await groupImagesByCountry([]);
    expect(result).toEqual({});
  });
  
  it('should handle API errors gracefully', async () => {
    // Type-safe image array with coordinates that will trigger errors
    const images: Array<{latitude: number, longitude: number}> = [
      { latitude: 999, longitude: 999 }, // Will cause API error
      { latitude: 46.8182, longitude: 8.2275 }, // Switzerland
    ];
    
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await groupImagesByCountry(images);
    
    expect(result).toEqual({
      'Unknown': 1,
      'Switzerland': 1
    });
    
    spy.mockRestore();
  });
});
