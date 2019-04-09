import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import vSelect from 'vue-select'


import "./registerServiceWorker";


Vue.component('v-select', vSelect)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
