import type { RouteRecord } from 'vite-react-ssg';
import React from 'react';
import { galleries } from './galleries';
import { pages } from './pages';
import { slugify } from './utils/slugify';
import Root from './Root';
import App from './App';

// Helper function to generate image slug (matching useImage hook logic)
function getImageSlug(filename: string): string {
  const imageName = filename.replace(/\.[^/.]+$/, '');
  return slugify(imageName);
}

// Generate all static paths for galleries
function getGalleryPaths(): string[] {
  return galleries.map(gallery => `/gallery/${gallery.slug}`);
}

// Generate all static paths for images
function getImagePaths(): string[] {
  const paths: string[] = [];
  galleries.forEach(gallery => {
    gallery.images?.forEach(image => {
      const imageSlug = getImageSlug(image.filename);
      paths.push(`/gallery/${gallery.slug}/image/${imageSlug}`);
    });
  });
  return paths;
}

// Generate all static paths for pages
function getPagePaths(): string[] {
  return pages.map(page => `/page/${page.slug}`);
}

// Define routes for SSG
// Root wraps everything with providers (no routing logic), App is the layout with Navigation/UI, children are the actual pages
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Root />,
    entry: 'src/Root.tsx',
    children: [
      {
        path: '',
        element: <App />,
        entry: 'src/App.tsx',
        children: [
          {
            index: true,
            Component: React.lazy(() => import('./components/pages/Home')),
          },
          {
            path: 'gallery/:slug',
            lazy: async () => {
              const mod = await import('./components/pages/Gallery');
              return { Component: mod.default };
            },
            getStaticPaths: () => getGalleryPaths(),
          },
          {
            path: 'gallery/:gallerySlug/image/:slug',
            lazy: async () => {
              const mod = await import('./components/pages/ImageDetails');
              return { Component: mod.default };
            },
            getStaticPaths: () => getImagePaths(),
          },
          {
            path: 'page/:slug',
            lazy: async () => {
              const mod = await import('./components/pages/Page');
              return { Component: mod.default };
            },
            getStaticPaths: () => getPagePaths(),
          },
          {
            path: 'app/map',
            lazy: async () => {
              const mod = await import('./components/pages/AllImagesMap');
              return { Component: mod.default };
            },
          },
          {
            path: 'app/list',
            lazy: async () => {
              const mod = await import('./components/pages/List');
              return { Component: mod.default };
            },
          },
          {
            path: 'app/timeline',
            lazy: async () => {
              const mod = await import('./components/pages/Timeline');
              return { Component: mod.default };
            },
          },
          {
            path: 'app/postcard',
            lazy: async () => {
              const mod = await import('./components/pages/MakePostcard');
              return { Component: mod.default };
            },
          },
          {
            path: 'app/statistics',
            lazy: async () => {
              const mod = await import('./components/pages/Statistics');
              return { Component: mod.default };
            },
          },
          {
            path: 'app/filter',
            lazy: async () => {
              const mod = await import('./components/pages/Filter');
              return { Component: mod.default };
            },
          },
          {
            path: 'app/tags',
            lazy: async () => {
              const mod = await import('./components/pages/Tags');
              return { Component: mod.default };
            },
          },
          {
            path: 'app/intelligence',
            lazy: async () => {
              const mod = await import('./components/pages/Intelligence');
              return { Component: mod.default };
            },
          },
          {
            path: '*',
            lazy: async () => {
              const mod = await import('./components/pages/NotFound');
              return { Component: mod.default };
            },
          },
        ],
      },
    ],
  },
];
