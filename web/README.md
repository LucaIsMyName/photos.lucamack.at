# Photo Gallery Website

This is a modern, fast, and responsive photo gallery website built with React, TypeScript, and Vite. It features dynamic theme switching (light/dark mode), an interactive map for geotagged photos, and a clean, minimalist design, all driven by a local-first content management system.

## Tech Stack

- **Framework**: [React](https://reactjs.org/) 19
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Mapping**: [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) via [react-map-gl](https://visgl.github.io/react-map-gl/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/) for resizing and optimization.
- **Markdown Parsing**: [Marked](https://marked.js.org/) for rendering static page content.

---

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### 2. Installation

Clone the repository and install the dependencies from the `web` directory:

```bash
cd web
npm install
```

### 3. Environment Variables

The project uses Mapbox for the interactive map. You'll need to provide a Mapbox access token.

1.  In the `web` directory, create a file named `.env`.
2.  Copy the contents of `.env.example` into it.
3.  Replace the placeholder token with your own Mapbox access token.

    ```
    VITE_MAPBOX_TOKEN=your_mapbox_access_token_here
    ```

### 4. Content Generation

Before starting the development server, you need to generate the content for your galleries and pages by running the content generation scripts.

```bash
node generate-galleries.mjs
node generate-pages.mjs
```

### 5. Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## Content Management

All content is managed locally through a simple file and folder structure. After making any changes to the content, you must re-run the appropriate generation script.

### How to Add a New Gallery

1.  **Create a Folder**: Add a new folder inside `web/content/`. The folder name will become the gallery's URL slug (e.g., `new-york-trip`).
  **note**: The folder name should be in lowercase and contain only letters, numbers, and hyphens. It shoud *not* be name `pages`
1.  **Add Images**: Place your images (`.jpg`, `.jpeg`, `.png`, `.heic`) inside the new folder.
2.  **Generate Gallery Data**: Run the gallery generation script:

    ```bash
    node generate-galleries.mjs
    ```

    The new gallery will be added to `src/galleries.ts` and appear in the navigation.

### How to Add a New Page

1.  **Create a Folder**: Add a new folder inside `web/content/pages/`. The folder name will become the page's URL slug (e.g., `about-me`).
  **note**: The folder name should be in lowercase and contain only letters, numbers, and hyphens. It shoud *not* be name `galleries` or `pages`
2.  **Create Markdown File**: Inside the new folder, create a file named `index.md`.
3.  **Add Content**: Write your page content in Markdown. The page title is automatically extracted from the first H1 heading (e.g., `# About Me`).
4.  **Generate Page Data**: Run the page generation script:

    ```bash
    node generate-pages.mjs
    ```

    The new page will be added to `src/pages.ts`.

---

## Scripts

-   **`generate-galleries.mjs`**: This script automates the creation of gallery data. It scans the `content/galleries` directory, processes each image to create multiple responsive sizes, extracts EXIF metadata (including GPS data), and compiles everything into the `src/galleries.ts` file.

-   **`generate-pages.mjs`**: This script generates the data for static pages. It scans the `content/pages` directory, reads the `index.md` file from each subfolder, and creates the `src/pages.ts` file.
-   **`npm run prebuild`**: This script runs both `generate-galleries.mjs` and `generate-pages.mjs` to prepare the content for production.

-   **`npm run dev`**: Starts the Vite development server for a fast, hot-reloading development experience.

-   **`npm run build`**: Bundles the application for production into the `dist` directory.

---

## Future Work

-   **Automate Content Generation**: Use a file watcher (like `chokidar`) to automatically re-run the generation scripts whenever content files are added or changed.
- **Navigation**: Find a way for a long gallery nav-list and the pages underneath
- **System Messages**: Insert `CONFIG.systemMessages` from `config.ts` file instead of hardcoding standard texts
- Change HeicConverter and Sharp to Dev Dependencies instead of normal one -> shouldn't and must not be compiled to the dist folder - i guess.
- Like the `MapPage.tsx` -> make a `ListPage.tsx` where all images are listed and can be clicked to open the gallery, can be sorted by date, title, gallery, ...