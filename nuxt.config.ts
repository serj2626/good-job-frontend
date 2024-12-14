import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@samk-dev/nuxt-vcalendar",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/icon",
    "nuxt-rating",
    "@nuxt/image",
    "@sidebase/nuxt-pdf",
    "@vueuse/nuxt",
    "@primevue/nuxt-module",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  alias: {
    "@": "./src",
  },
  app: {
    rootId: "app",
    // layoutTransition: true,
    // pageTransition: true,
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Good Job",
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: "/image/title.jpg",
          sizes: "64x64",
        },
      ],
    },
  },
  css: ["~/app/styles/tailwind/index.scss"],
  dir: {
    layouts: "./app/layouts",
    pages: "./app/routes",
  },
  ssr: false,
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  router: {
    options: {
      // linkActiveClass: "active-link",
      linkExactActiveClass: "active-link",
    },
  },
  compatibilityDate: "2024-11-10",
});
