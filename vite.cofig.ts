
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: resolve(__dirname, 'app/demo'),

  plugins: [tailwindcss()],

  build: {
    outDir: '../../dist/demo',
    emptyOutDir: true,
  },
});
