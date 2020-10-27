import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//  import axios from "axios";
import http from "./api/http";
import "./mocks/index";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.prototype.$http = http;

router.beforeEach((to, from, next) => {
  console.log('router from :', from.path);
  console.log('router to', to.path);
  var routerAry = store.state.menuRouters.routers;
  console.log('routerAry', routerAry);
  if (routerAry.length == 0) {
    store.dispatch("GenerateRouter").then(res => {
      console.log('route reload');
      router.addRoutes(res);
      next({ ...to, replace: true });
    })
      .catch(err => {
        console.log(err);
      });
  }
  console.log('--------------');
  next();
});


Vue.use(ElementUI);
// Vue.use(axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
