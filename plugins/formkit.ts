import { usePrimeInputs } from "@sfxcode/formkit-primevue";

// optional: import styles
import "@sfxcode/formkit-primevue/dist/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Formkit plugin running");

  const app = nuxtApp.vueApp;
  // register inputs needed for primevue
  const { registerInputs } = usePrimeInputs();
  registerInputs(app);
});
