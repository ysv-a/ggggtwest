import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/ggggtwest/',
  build: {
    emptyOutDir: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      input: {
        index: resolve(fileURLToPath(new URL('.', import.meta.url)), 'index.html'),
        page: resolve(fileURLToPath(new URL('.', import.meta.url)), 'page.html'),
      },
    },
  },
});
