// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/test-utils",
    "@nuxtjs/apollo",
    "nuxt-toast",
  ],

  css: ["~/assets/css/main.css", "@fortawesome/fontawesome-free/css/all.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://graphqlzero.almansi.me/api",
      },
    },
  },
});
