// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "@nuxt/ui",
    "@primevue/nuxt-module",
    "@vueuse/nuxt",
    "@samk-dev/nuxt-vcalendar",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/icon",
    "nuxt-rating",
    "@nuxt/image",
  ],
  alias: {
    "@": "./src",
  },
  app: {
    rootId: "app",
    layoutTransition: true,
    pageTransition: true,
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Good Job",
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: "/image/title.png",
          sizes: "64x64",
        },
      ]
    },
  },
  css: ["~/app/styles/tailwind/index.scss"],
  dir: {
    layouts: "./app/layouts",
    pages: "./app/routes",
  },
  // components: false,
  // typescript: {
  //   typeCheck: true
  // },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_ENV_API_URL,
    },
  },
  compatibilityDate: "2024-11-10",
});