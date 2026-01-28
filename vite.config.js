import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/butterfly-pea-flower/',
  // Ensure .cook files are served as text
  assetsInclude: ['**/*.cook'],
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        recipe: resolve(__dirname, 'recipe-card.html')
      }
    }
  }
});
