/// <reference types="vite/client" />

declare module '@slugify' {
  export function slugifyGalleryFolder(text: string): string;
  export function slugifyImageStem(text: string): string;
}

declare module 'vite' {
  interface UserConfig {
    ssgOptions?: {
      script?: 'sync' | 'async' | 'defer' | 'async defer';
      formatting?: 'prettify' | 'none';
      rootContainerId?: string;
      [key: string]: any;
    };
  }
}
