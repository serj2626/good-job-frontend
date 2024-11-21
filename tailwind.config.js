/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   ".src/pages/**/*.{js,vue,ts}",
  //   ".src/widgets/**/*.{js,vue,ts}",
  //   ".src/pages/**/*.{js,vue,ts}",
  //   ".src/features/**/*.{js,vue,ts}",
  //   ".src/shared/**/*.{js,vue,ts}",
  //   ".src/*.{js,vue,ts}",
  //   "./app/layouts/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./app/index.vue",
  //   "./error.vue",
  // ],
  content: ['app/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'src/**/*.vue'],
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

