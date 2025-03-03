import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/deep_link_host/',  // Change this to match your repo name
  build: {
    outDir: 'dist',
  },
  server: {
    fs: {
      strict: false
    }
  }
});