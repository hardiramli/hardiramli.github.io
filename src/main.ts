import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import {createI18n} from "@/i18n/index";
import router from "@/router/index";
import store from "@/store/index";

Vue.config.productionTip = false;

// export async function CretaeApp({
//   start = (x:{}) =>{}
// }={}){

//   const store = createStore()
//   const router = createRouter()

//   const app = new Vue({
//     store,
//     router,
//     vuetify,
//     render:h=>h(App)
//   })

//   const entry = { app,router,store }

//   await start(entry)

//   return entry
// }

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
