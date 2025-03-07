// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
// Hapus import node karena kita tidak akan menggunakannya
// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://lanfouwyne.github.io',
  base: '/Lanime.github.io',
  
  env: {
    schema: {
      API_URL: envField.string({
        access: "public",
        context: "server",
        default: "https://wajik-anime-api.vercel.app/"
      }),
    },
  },

  // Ubah output menjadi "static" untuk GitHub Pages
  output: "static",

  // Hapus adapter node karena tidak diperlukan untuk static site
  // adapter: node({
  //   mode: "standalone",
  // }),

  integrations: [tailwind()],

  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
