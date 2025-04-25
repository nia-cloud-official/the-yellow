import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://the-yellow-official.netlify.app', // Replace with your site's URL
  integrations: [
    tailwind({
      config: './tailwind.config.js', // Ensure this file exists
    }),
    react(),
    svelte(),
  ],
  output: 'static', // Use 'static' for static hosting platforms like Netlify
  adapter: vercel(), // Use the Vercel adapter for deployment
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined, // Optimize chunk splitting
        },
      },
    },
  },site
});