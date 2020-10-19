import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
import http from "./api/http";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.property.$http=http;

Vue.use(ElementUI);
// Vue.use(axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
