import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/butterfly-pea-flower/',
  // Ensure .cook files are served as text
  assetsInclude: ['**/*.cook'],
  server: {
    open: true
  }
});
