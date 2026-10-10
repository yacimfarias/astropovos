import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://astropovos.com.br',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  }
});
