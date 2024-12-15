import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist/web',
    emptyOutDir: true,
    rollupOptions: {
      external: ['path', 'fs', 'electron'],
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 3000,
    },
  },
  resolve: {
    alias: {
      path: 'path-browserify',
    },
  },
  plugins: [react()],
  define: {
    'process.env': {}, // Evita que eval() seja usado no Vite
  },
});
