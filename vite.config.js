import { defineConfig } from 'vite';

export default defineConfig({
  // Ensure .cook files are served as text
  assetsInclude: ['**/*.cook'],
  server: {
    open: true
  }
});
