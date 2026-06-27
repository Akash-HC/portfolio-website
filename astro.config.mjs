import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/", // Replace with your repository name
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});