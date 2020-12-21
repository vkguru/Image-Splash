import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Skeleton from "vue-loading-skeleton";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Skeleton,
  render: h => h(App)
}).$mount("#app");
