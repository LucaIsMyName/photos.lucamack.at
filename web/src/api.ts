import type { Gallery, Image } from './types';

// --- Data Loading ---

let images: Image[] = [];
let galleries: Gallery[] = [];

// Fetch all data and cache it for the session
async function loadData() {
  if (images.length === 0) {
    try {
      const imagesResponse = await fetch('/api/images.json');
      images = await imagesResponse.json();
    } catch (error) {
      console.error('Failed to load images.json:', error);
      images = [];
    }
  }

  if (galleries.length === 0) {
    try {
      const galleriesResponse = await fetch('/api/galleries.json');
      galleries = await galleriesResponse.json();
    } catch (error) {
      console.error('Failed to load galleries.json:', error);
      galleries = [];
    }
  }
}

// --- API Parameter Types ---

export interface ApiParams {
  from?: string; // YYYY-MM-DD
  to?: string; // YYYY-MM-DD
  slug?: string;
  gallery?: string;
  longitudeStart?: number;
  longitudeEnd?: number;
  latitudeStart?: number;
  latitudeEnd?: number;
  orderBy?: 'date_asc' | 'date_desc';
  // Pagination
  limit?: number;
  offset?: number;
}

// --- API Functions ---

/**
 * Simulates the /api/images endpoint.
 * Fetches and filters images based on the provided parameters.
 */
export async function getImages(params: ApiParams = {}): Promise<Image[]> {
  await loadData();
  let filteredImages = [...images];

  // Filtering logic
  if (params.slug) {
    const slug = params.slug.toLowerCase();
    filteredImages = filteredImages.filter(image => 
      image.filename.toLowerCase().startsWith(slug)
    );
  }

  if (params.gallery) {
    filteredImages = filteredImages.filter(image => image.gallery === params.gallery);
  }

  if (params.from) {
    const fromDate = new Date(params.from);
    filteredImages = filteredImages.filter(image => 
      image.createDate && new Date(image.createDate) >= fromDate
    );
  }

  if (params.to) {
    const toDate = new Date(params.to);
    filteredImages = filteredImages.filter(image => 
      image.createDate && new Date(image.createDate) <= toDate
    );
  }

  if (params.latitudeStart) {
    filteredImages = filteredImages.filter(image => image.latitude && image.latitude >= params.latitudeStart!);
  }
  if (params.latitudeEnd) {
    filteredImages = filteredImages.filter(image => image.latitude && image.latitude <= params.latitudeEnd!);
  }
  if (params.longitudeStart) {
    filteredImages = filteredImages.filter(image => image.longitude && image.longitude >= params.longitudeStart!);
  }
  if (params.longitudeEnd) {
    filteredImages = filteredImages.filter(image => image.longitude && image.longitude <= params.longitudeEnd!);
  }

  // Sorting logic
  if (params.orderBy) {
    filteredImages.sort((a, b) => {
      const dateA = a.createDate ? new Date(a.createDate).getTime() : 0;
      const dateB = b.createDate ? new Date(b.createDate).getTime() : 0;
      return params.orderBy === 'date_asc' ? dateA - dateB : dateB - dateA;
    });
  }

  // Pagination logic
  const offset = params.offset || 0;
  const limit = params.limit;
  if (limit) {
    return filteredImages.slice(offset, offset + limit);
  }

  return filteredImages;
}

/**
 * Simulates the /api/galleries endpoint.
 * Fetches and filters galleries based on the provided parameters.
 */
export async function getGalleries(params: ApiParams = {}): Promise<Gallery[]> {
  await loadData();
  // Start with a fresh copy of all galleries
  let processedGalleries = JSON.parse(JSON.stringify(galleries)) as Gallery[];

  // --- Step 1: Filter IMAGES inside each gallery ---
  // If any image-specific filters are present, we first filter the `images` array within each gallery.
  const hasImageFilters = params.from || params.to || params.latitudeStart || params.latitudeEnd || params.longitudeStart || params.longitudeEnd;

  if (hasImageFilters) {
    processedGalleries.forEach(gallery => {
      let imagesInGallery = gallery.images || [];

      if (params.from) {
        const fromDate = new Date(params.from);
        imagesInGallery = imagesInGallery.filter(img => img.createDate && new Date(img.createDate) >= fromDate);
      }
      if (params.to) {
        const toDate = new Date(params.to);
        imagesInGallery = imagesInGallery.filter(img => img.createDate && new Date(img.createDate) <= toDate);
      }
      if (params.latitudeStart) {
        imagesInGallery = imagesInGallery.filter(img => img.latitude && img.latitude >= params.latitudeStart!);
      }
      // ... add other image-level filters (lat, long) here if needed ...

      gallery.images = imagesInGallery;
    });
  }

  // --- Step 2: Filter the GALLERIES themselves ---
  let filteredGalleries = processedGalleries;

  // Filter galleries that have no images left after image filtering
  if (hasImageFilters) {
    filteredGalleries = filteredGalleries.filter(gallery => gallery.images.length > 0);
  }

  // Filter by gallery slug
  if (params.slug) {
    filteredGalleries = filteredGalleries.filter(gallery => gallery.slug === params.slug);
  }

  // --- Step 3: Sort galleries ---
  if (params.orderBy) {
    filteredGalleries.sort((a, b) => {
      const aDate = a.images[0]?.createDate ? new Date(a.images[0].createDate).getTime() : 0;
      const bDate = b.images[0]?.createDate ? new Date(b.images[0].createDate).getTime() : 0;
      return params.orderBy === 'date_asc' ? aDate - bDate : bDate - aDate;
    });
  }

  // --- Step 4: Pagination ---
  const offset = params.offset || 0;
  const limit = params.limit;
  if (limit) {
    return filteredGalleries.slice(offset, offset + limit);
  }

  return filteredGalleries;
}
