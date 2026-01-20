# Photo Gallery Website

This is a photo gallery website built with React, TypeScript, and Vite. It features dynamic theme switching (light/dark mode), an interactive map for geotagged photos, and a clean, minimalist design, all driven by a local-first content management system.

## Features

* **Dynamic Galleries**: Automatically generates galleries from local folders.
* **Image Optimization**: Creates responsive image sizes on the fly using Sharp.
* **EXIF Data Extraction**: Pulls creation date and GPS coordinates from image metadata.
* **Interactive Map**: Displays all geotagged photos on a Mapbox map.
* **Static Pages**: Create and manage simple pages using Markdown.
* **Theming**: Seamless light and dark mode support.
* **JSON API**: Exposes gallery and image data through a simple API.

## Tech Stack

* **Framework**: [React](https://reactjs.org/) 19
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Static Site Generation**: [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) for pre-rendering all routes
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Mapping**: [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) via [react-map-gl](https://visgl.github.io/react-map-gl/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Routing**: [React Router](https://reactrouter.com/)
* **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/) for resizing and optimization.
* **Markdown Parsing**: [Marked](https://marked.js.org/) for rendering static page content.

***

## Static Site Generation (SSG)

This application uses **Static Site Generation (SSG)** via `vite-react-ssg`, which pre-renders all routes at build time into static HTML files. This provides several benefits:

### Benefits

* **Performance**: Pages load instantly as pre-rendered HTML, with JavaScript hydrating for interactivity
* **SEO**: Search engines can crawl fully-rendered content without executing JavaScript
* **Hosting**: Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
* **Reliability**: No server-side dependencies or runtime errors

### How It Works

During the build process, `vite-react-ssg`:

1. Generates static HTML files for all routes defined in `src/routes.tsx`
2. Pre-renders dynamic routes (galleries, images, pages) using `getStaticPaths()` functions
3. Creates a static HTML file for each route in the `dist/` directory
4. Includes all necessary assets and JavaScript bundles for client-side hydration

### What This Means for Development

#### Content Changes Require Rebuilds

Since all pages are pre-rendered at build time, any changes to:

* Gallery content (new images, updated descriptions)
* Static pages (markdown content)
* Route configurations

...require running the build process again to generate updated static HTML files.

**Development Workflow:**

1. Make content changes (add images, update markdown, etc.)
2. Run content generation: `npm run generate`
3. Rebuild the site: `npm run build`
4. Deploy the updated `dist/` folder

#### Client-Only Code

Code that relies on browser APIs (like `localStorage`, `window`, `document`) should be:

* Wrapped in `useEffect` hooks (which only run on the client)
* Guarded with checks like `if (typeof window !== 'undefined')`
* Placed in components that only render on the client

The application already handles this correctly for features like theme persistence and localStorage usage.

#### Development vs Production

* **Development** (`npm run dev`): Runs in standard Vite dev mode with hot module replacement. SSG is not active during development.
* **Production** (`npm run build`): Generates static HTML files for all routes. The output in `dist/` contains fully pre-rendered pages.

#### Route Configuration

All routes are configured in `src/routes.tsx`:

* **Dynamic routes** (galleries, images, pages) use `getStaticPaths()` to generate all possible paths at build time
* **Static routes** (`/app/*`) are automatically generated as single HTML files
* The home page (`/`) is pre-rendered with initial content

After adding new galleries or pages, ensure the content generation scripts run before building to include them in the static site.

***

## Getting Started

### 1. Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/)

### 2. Installation

Clone the repository and install the dependencies from the `web` directory:

```bash
cd web
npm install
```

### 3. Environment Variables

The project uses Mapbox for the interactive map. You'll need to provide a Mapbox access token.

1. In the `web` directory, create a file named `.env`.
2. Copy the contents of `.env.example` into it.
3. Replace the placeholder token with your own Mapbox access token.

   ```
   VITE_MAPBOX_TOKEN=your_mapbox_access_token_here
   ```

### 4. Content Generation

Before starting the development server, you must generate the data for your galleries and pages by running the content generation scripts. This step is crucial as it creates the TypeScript modules that the application imports.

```bash
# Run both scripts sequentially
npm run prebuild
```

### 5. Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

***

## Content Management

All content is managed locally using a simple file and folder structure. After adding or modifying content, you must re-run the appropriate generation script for the changes to appear in the application.

### How to Add a New Gallery

1. **Create a Folder**: Add a new folder inside `web/content/galleries/`. The folder name will become the gallery's URL slug (e.g., `new-york-trip`).
2. **Add Images**: Place your images (`.jpg`, `.jpeg`, `.png`, `.heic`) inside the new folder. The script automatically handles `HEIC` to `JPEG` conversion.
3. **Image Naming**: Name your images in a descriptive way, The Name is set as the alt text, for the URLs: Image names are sluggified into the url.
4. **(Optional) Add a Description**: Create an `index.md` file inside the gallery folder. The script will use the first H1 heading (`#`) as the gallery title and the first paragraph as its description.
5. **Generate Gallery Data**: Run the gallery generation script:

   ```bash
   node generate-galleries.mjs
   ```

   This command processes the images, extracts metadata, and updates `src/galleries.ts` and the public JSON API.

### How to Add a New Page

1. **Create a Folder**: Add a new folder inside `web/content/pages/`. The folder name becomes the page's URL slug (e.g., `about-me`). Names only Work as slugs, so DONT use accents, spaces or any special characters. "Über mich" -> 'ueber-mich' -> Folders dont get sluggified during build process so needs to be done by dev mannually
2. **Create Markdown File**: Inside the new folder, create a file named `index.md`.
3. **Add Content**: Write your page content in Markdown. The page title is automatically extracted from the first H1 heading (e.g., `# About Me`).
4. **Generate Page Data**: Run the page generation script:

   ```bash
   node generate-pages.mjs
   ```

   This command updates `src/pages.ts`.

***

*Note*: Allowed Filetypes are: `.jpg`, `.jpeg`, `.png`, `.heic`,

## API Documentation

The `generate-galleries.mjs` script also creates a simple JSON API, placing the output files in the `web/public/api/` directory. These files can be used for external integrations.

### `GET /api/galleries.json`

Returns an array of all gallery objects.

**Gallery Object Structure**

```typescript
interface Gallery {
  name: string;          // Original folder name
  slug: string;          // URL-friendly slug (same as name)
  title: string;         // Title from index.md H1, or folder name
  description: string;   // First paragraph from index.md
  images: Image[];       // Array of image objects
  timeframe?: string;    // Formatted date range of images
  imageCount?: number;   // Total number of images in the gallery
}
```

### `GET /api/images.json`

Returns a flattened array of all image objects from all galleries.

**Image Object Structure**

```typescript
interface Image {
  filename: string;
  latitude?: number | null;
  longitude?: number | null;
  createDate?: string;     // ISO 8601 date string
  googleMapsUrl?: string | null;
  alt?: string | null;     // Extracted from EXIF ImageDescription
  gallery: string;         // Slug of the parent gallery
  urls: {
    original: string;    // URL to the full-resolution image
    w160: string;        // URL to the 160px wide version
    w380: string;        // URL to the 380px wide version
    w640: string;        // URL to the 640px wide version
    w1440: string;       // URL to the 1440px wide version
  }
}
```

## This acts as a static api any dev could fetch to use the images on another website.

## Scripts

* `npm run dev`: Starts the Vite development server for a fast, hot-reloading experience. Note: SSG is not active in dev mode.
* `npm run build`: Generates content, compiles TypeScript, and builds the static site using `vite-react-ssg`. Outputs pre-rendered HTML files to the `dist/` directory.
* `npm run build:only`: Builds the static site without running content generation (useful if content is already up-to-date).
* `npm run generate`: Runs all content generation scripts (galleries, pages, sitemap).
* `npm run generate:galleries`: Scans the `content/galleries` directory, processes images, extracts metadata, and generates `src/galleries.ts` and the JSON API files.
* `npm run generate:pages`: Scans the `content/pages` directory, reads Markdown files, and generates `src/pages.ts`.
* `npm run generate:sitemap`: Generates `public/sitemap.xml` with all routes.
* `npm run predev`: Automatically runs content generation before starting the dev server.

***

## Color Analysis System

The website features a color analysis system that extracts dominant colors from images and calculates colorfulness metrics.

### How Main Colors Are Generated

The color extraction process happens during the gallery generation phase in `generate-galleries.mjs` and involves several steps:

1. **Image Processing**: Each image is loaded and resized to a smaller dimension (100x100 pixels) for faster processing using the Sharp library.

2. **Color Quantization**: The script extracts RGB values from each pixel and groups similar colors by reducing precision (using a bucket size of 10).

3. **Color Grouping**: Similar colors are grouped using Euclidean distance in RGB space with a similarity threshold of 60.

4. **Representative Color Selection**: From each color group, the most frequent color is selected as the representative color.

5. **Dominant Color Extraction**: The top 5 representative colors (by frequency) are selected as the dominant colors for the image.

```typescript
// Example of color data structure for each image
colorData: {
  dominantColors: [
    {
      rgb: [30, 150, 210],  // RGB values
      hex: "#1e96d2",      // HEX color code
      percentage: "0.037"  // Frequency in the image
    },
    // More colors...
  ],
  colorfulness: "50.933"  // Colorfulness score
}
```

### Colorfulness Calculation

The colorfulness metric is calculated using standard deviation across color channels:

1. **Channel Analysis**: Standard deviations are calculated for the R, G, and B channels separately.

2. **Color Differences**: Standard deviations of the differences between channels (R-G, R-B, G-B) are calculated.

3. **Combined Metric**: All six standard deviations are averaged to produce a final colorfulness score.

Higher values indicate more colorful images, while lower values indicate more monochromatic images.

### Color Palettes

The application generates two types of color palettes:

1. **Overall Color Palette**: Created by aggregating dominant colors from all images, weighted by their frequency within each image. The top 20 colors are displayed in the Statistics page as "Farbpalette aller Serien".

2. **Seasonal Color Trends**: Colors are grouped by season based on image creation dates:

   * **Spring**: March to May
   * **Summer**: June to August
   * **Fall**: September to November
   * **Winter**: December to February

   For each season, the top 5 most frequent colors are displayed as "Saisonale Farbtrends".

***

## Development Ideas

* Can the whole website somehow be connected to eg. Instagram and automatically fill the IG whenever  new images are uploaded/published on the website? -> Check IG API/Docs/Whateva for this
* store the order of the gallery when navigated to an image, and if the user does use the "back" button of the browser -> instead of loading the gallery new -> go the the exact viewport in the same order (cached version of the gallery before). only if the user clicks on the same gallery via the naviagtion should shuffle again
* filer/seach based on color and colorRange in ListPage.tsx -> we have the colors in the galleries.tsx
