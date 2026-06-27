import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Akash-HC.github.io',
  base: '/portfolio-website/', // Replace with your repository name
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});