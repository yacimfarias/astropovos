import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yacimfarias.github.io',
  base: '/astropovos',
  output: 'static',
  build: {
    format: 'directory'
  }
});
