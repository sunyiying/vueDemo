import Vue from "vue";
import Vuex from "vuex";
import Tabs from "./tabs";
import menuRouters from "./menuRouters"

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    Tabs,
    menuRouters
  }
});
