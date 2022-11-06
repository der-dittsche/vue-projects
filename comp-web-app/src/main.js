import { createApp } from "vue";
import { createPinia } from "pinia";

const pinia = createPinia();

import App from "@/App.vue";
import router from "@/router";
import VeeValidatePlugin from "@/includes/validation.js";

import "@/assets/base.css";
import "@/assets/main.css";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VeeValidatePlugin);

app.mount("#app");
