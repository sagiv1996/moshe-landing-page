import { he } from "vuetify/locale";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    vuetifyOptions: {
      locale: {
        locale: "he",
        fallback: "he",
        messages: he,
        rtl: {
          he: true,
        },
      },
    },
  },
});
