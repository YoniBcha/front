// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  antd: {},
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@ant-design-vue/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
