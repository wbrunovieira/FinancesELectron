import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src', // O Vite precisa saber de onde partir
  build: {
    outDir: '../dist', // Onde os arquivos de build serão gerados
    emptyOutDir: true, // Remove o dist antes de criar
  },
  server: {
    port: 3000,
    strictPort: true, // Garante que a porta 3000 não muda
  },
  plugins: [react()],
});
