/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/index.vue",
    "./error.vue",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

