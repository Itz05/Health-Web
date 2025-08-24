import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Health-Web/",
  build: {
    chunkSizeWarningLimit: 1000, // sube el límite
  },
  plugins: [react()],
});
