import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {}],
        ],
      },
    }),
    tailwindcss(),
    visualizer({
      open: !process.env.CI && process.env.VITE_STATS_OPEN !== '0',
      filename: 'dist/stats.html',
    }),
  ],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('mapbox-gl')) {
            return 'mapbox-gl';
          }
        },
      },
    },
    commonjsOptions: {
      include: [/react-is/, /node_modules/],
    },
  },
  optimizeDeps: {
    include: ['react-is'],
  },
  resolve: {
    alias: {
      '@slugify': resolve(__dirname, 'slugify.mjs'),
    },
    dedupe: ['react-is'],
  },
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
    rootContainerId: 'root',
  },
})
