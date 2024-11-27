import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@samk-dev/nuxt-vcalendar`
     */
    ["vcalendar"]: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-rating`
     */
    ["nuxtRating"]: typeof import("nuxt-rating").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-pdf`
     */
    ["pdf"]: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@samk-dev/nuxt-vcalendar`
     */
    ["vcalendar"]?: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-rating`
     */
    ["nuxtRating"]?: typeof import("nuxt-rating").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-pdf`
     */
    ["pdf"]?: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@samk-dev/nuxt-vcalendar", Exclude<NuxtConfig["vcalendar"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-rating", Exclude<NuxtConfig["nuxtRating"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@sidebase/nuxt-pdf", Exclude<NuxtConfig["pdf"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@samk-dev/nuxt-vcalendar`
     * @see https://www.npmjs.com/package/@samk-dev/nuxt-vcalendar
     */
    ["vcalendar"]: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-rating`
     * @see https://www.npmjs.com/package/nuxt-rating
     */
    ["nuxtRating"]: typeof import("nuxt-rating").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-pdf`
     * @see https://www.npmjs.com/package/@sidebase/nuxt-pdf
     */
    ["pdf"]: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@samk-dev/nuxt-vcalendar`
     * @see https://www.npmjs.com/package/@samk-dev/nuxt-vcalendar
     */
    ["vcalendar"]?: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-rating`
     * @see https://www.npmjs.com/package/nuxt-rating
     */
    ["nuxtRating"]?: typeof import("nuxt-rating").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-pdf`
     * @see https://www.npmjs.com/package/@sidebase/nuxt-pdf
     */
    ["pdf"]?: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@samk-dev/nuxt-vcalendar", Exclude<NuxtConfig["vcalendar"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-rating", Exclude<NuxtConfig["nuxtRating"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@sidebase/nuxt-pdf", Exclude<NuxtConfig["pdf"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },
  }
  interface PublicRuntimeConfig {
   apiUrl: string,

   vcalendar: any,

   pdf: {
      defaultDocOptions: {
         size: string,

         bufferPages: boolean,

         margins: {
            top: number,

            left: number,

            right: number,

            bottom: number,
         },
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }