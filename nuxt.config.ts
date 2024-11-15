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
  ],

  compatibilityDate: "2024-11-10",
  // components: false,
  // typescript: {
  //   typeCheck: true
  // },
});