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
    rootId: "app",
    layoutTransition: true,
    pageTransition: true,
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
      ],
      title: "Good Job",
      meta: [
        {
          name: "Good Job",
          content: "Good Job App",
        },
      ],
    },
  },
  css: ["~/app/styles/tailwind/index.scss"],
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
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_ENV_API_URL
    }
  },
});
