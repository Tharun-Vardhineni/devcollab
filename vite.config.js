import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',   // IMPORTANT: relative base for custom domain root
  plugins: [react()],
});
