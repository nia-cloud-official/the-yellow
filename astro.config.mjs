// filepath: /home/earlvaltor/Desktop/the-yellow-main/astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://the-yellow-official.netlify.app', // Replace with your site's URL
  integrations: [
    react(),
    svelte(),
  ],
  output: 'static', // Use 'static' for static hosting platforms like Netlify
  adapter: vercel(), // Use the Vercel adapter for deployment
});