import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { CONFIG } from "../config";

const geocodingClient = mbxGeocoding({ accessToken: CONFIG.mapbox.accessToken });

// A cache to store results for coordinate pairs to avoid redundant API calls.
const geoCache = new Map<string, string>();

/**
 * Reset the geoCache - used for testing purposes only
 */
export const _resetGeoCache = () => {
  geoCache.clear();
};

/**
 * Determines the country for a given latitude/longitude coordinate using Mapbox API.
 * @param latitude The latitude coordinate.
 * @param longitude The longitude coordinate.
 * @returns The country name or "Unknown" if not found.
 */
export const getCountryFromCoordinates = async (latitude: number, longitude: number): Promise<string> => {
  const cacheKey = `${latitude.toFixed(4)},${longitude.toFixed(4)}`;
  if (geoCache.has(cacheKey)) {
    return geoCache.get(cacheKey) || "Unknown";
  }

  try {
    const response = await geocodingClient
      .reverseGeocode({
        query: [longitude, latitude],
        limit: 1,
        types: ["country"],
      })
      .send();

    if (response && response.body && response.body.features && response.body.features.length > 0) {
      const country = response.body.features[0].text;
      geoCache.set(cacheKey, country); // Cache the result
      return country;
    }
  } catch (error) {
    console.error("Mapbox API error:", error);
  }

  return "Unknown";
};

/**
 * Groups images by country based on their coordinates using the Mapbox API.
 * @param images Array of images with latitude and longitude properties.
 * @returns A promise that resolves to an object with country names as keys and the count of images as values.
 */
export const groupImagesByCountry = async (images: { latitude: number; longitude: number }[]): Promise<{ [country: string]: number }> => {
  const countryCounts: { [country: string]: number } = {};

  const promises = images.map(async (image) => {
    if (image.latitude && image.longitude) {
      const country = await getCountryFromCoordinates(image.latitude, image.longitude);
      return country;
    }
    return null;
  });

  const countries = await Promise.all(promises);

  for (const country of countries) {
    if (country) {
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    }
  }

  return countryCounts;
};
