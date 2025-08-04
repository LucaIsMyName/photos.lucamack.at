# Photo Gallery Static API

This document describes the static JSON API for the photo gallery, which allows you to fetch gallery and image data for use in other applications.

The API is generated as static files, meaning it's fast, cacheable, and easy to consume. The base URL for all API endpoints is `https://photos.lucamack.at`.

## Endpoints

There are two main endpoints available:

1.  `/api/galleries.json`: Provides a list of all galleries.
2.  `/api/images.json`: Provides a flat list of all images from all galleries.

---

### 1. Galleries API

This endpoint returns an array of gallery objects, each containing metadata and a list of its images.

**Endpoint:** `GET https://photos.lucamack.at/api/galleries.json`

#### Gallery Object Structure

Each object in the array represents a gallery and has the following structure:

```json
{
  "name": "string",
  "slug": "string",
  "title": "string",
  "description": "string",
  "images": "array",
  "timeframe": "string",
  "imageCount": "number"
}
```

-   `slug`: The URL-friendly identifier for the gallery.
-   `title`: The display title of the gallery.
-   `description`: A short description.
-   `images`: An array of image objects belonging to the gallery (see `images.json` structure below for details, without the `gallery` property).
-   `timeframe`: A string describing the date or date range of the photos.
-   `imageCount`: The total number of images in the gallery.

---

### 2. Images API

This endpoint returns a single, flat array containing every image object from all galleries. This is useful for displaying all images at once or for creating custom filters.

**Endpoint:** `GET https://photos.lucamack.at/api/images.json`

#### Image Object Structure

Each object in the array represents a single image and has the following structure:

```json
{
  "latitude": "number | null",
  "longitude": "number | null",
  "createDate": "object | null",
  "name": "string",
  "urls": {
    "original": "string",
    "w640": "string",
    "w1440": "string"
  },
  "colorData": "object | null",
  "gallery": "string"
}
```

-   `latitude` / `longitude`: GPS coordinates where the photo was taken.
-   `createDate`: An object containing the photo's creation timestamp.
-   `name`: The filename of the image.
-   `urls`: An object containing direct links to the image at different resolutions.
-   `colorData`: An object containing color data extracted from the image.
-   `gallery`: The `slug` of the gallery this image belongs to.

---

### Cross-Domain Usage (CORS)

Since these are static `.json` files, you can fetch them from any domain using a standard `fetch` request. The web server is configured to allow cross-origin requests, so you shouldn't encounter any CORS (Cross-Origin Resource Sharing) issues in a modern browser.

#### Example Usage in JavaScript

```javascript
async function getGalleries() {
  try {
    const response = await fetch('https://photos.lucamack.at/api/galleries.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const galleries = await response.json();
    console.log(galleries);
  } catch (error) {
    console.error('Could not fetch galleries:', error);
  }
}

getGalleries();
```
