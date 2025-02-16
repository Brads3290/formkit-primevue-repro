import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@formkit/nuxt", "@primevue/nuxt-module"],
  primevue: {
    components: {
      include: "*",
      exclude: ["Form", "FormField"],
    },
    autoImport: false,
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  devtools: { enabled: true },
});
