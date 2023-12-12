import { createApp } from "vue";

import "./index.css";

import App_VueComponentInVue from "./VueComponentInVue.vue";
import App_ReactComponentInVue from "./ReactComponentInVue.vue";


createApp(App_VueComponentInVue).mount("#DivVueComponentInVue");
createApp(App_ReactComponentInVue).mount("#DivReactComponentInVue");