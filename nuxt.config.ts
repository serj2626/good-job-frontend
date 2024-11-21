// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@samk-dev/nuxt-vcalendar",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/icon",
    "nuxt-rating",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Good Job",
      meta: [
        {
          name: "description",
          content: "Nuxt App",
        },
      ],
    },
  },
  css: ["~/app/styles/main.scss"],
  alias: {
    "@": "./src",
  },
  dir: {
    layouts: "./app/layouts",
    pages: "./app/routes",
  },
  compatibilityDate: "2024-11-10",
  // components: false,
  // typescript: {
  //   typeCheck: true
  // },
});
