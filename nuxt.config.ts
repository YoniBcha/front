// nuxt.config.ts
export default defineNuxtConfig({
  antd: {},
  css: ["~/assets/css/main.css"],
  devtools: { enabled: false },
  modules: [
    "@ant-design-vue/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  plugins: ["~/plugins/vue-apexcharts.js"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
