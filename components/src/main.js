import { createApp } from "vue";
import App from "./App.vue";
/* import Greeting from "@/component/Greeting.vue"; */

let vm = createApp(App);

/* vm.component("Greenting", Greeting); */

vm.mount("#app");
