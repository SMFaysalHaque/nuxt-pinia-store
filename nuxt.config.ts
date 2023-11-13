// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  nitro: {
    alias: {
      pinia: 'pinia'
    }
  },
  css: ["~/assets/css/main.css"],
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
