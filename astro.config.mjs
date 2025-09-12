import { defineConfig } from 'astro/config';

export default defineConfig({
  // site: 'https://example.com', // Your public domain
  // base: '/', // The base path to deploy to
  
  // Build options
  outDir: './dist',
  publicDir: './public',
  srcDir: './src',
  
  // Development server options  
  server: {
    port: 3000,
    host: true
  },
  
  // Build configuration
  build: {
    assets: 'assets'
  }
});
