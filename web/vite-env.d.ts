/// <reference types="vite" />

import 'vite';

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
