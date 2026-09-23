import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ericbrasil.com.br',
  base: '/astropovos',
  build: {
    format: 'directory'
  }
});
