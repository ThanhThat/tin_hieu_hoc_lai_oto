// import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import BaseBtn from "@/components/base/BaseBtn.vue";
import useAuthStore from "./stores/modules/auth";

const app = createApp(App);
const pinia = createPinia();
app.component("base-btn", BaseBtn);

app.use(pinia);
const authStore = useAuthStore();
app.use(router);
app.mount("#app");
