import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "main",
  //   component: () => import("../views/Main.vue"),
  //   children: [
  //     {
  //       path: "/index",
  //       name: "index",
  //       component: () => import("../views/Index.vue"),
  //     },
  //     {
  //       path: "/user",
  //       name: "userInfo",
  //       component: () => import("../views/user/Users")
  //     },
  //     {
  //       path: "/userRole",
  //       name: "userRole",
  //       component: () => import("../views/user/UserRole")
  //     },
  //     {
  //       path: "/domain",
  //       name: "domain",
  //       component: () => import("../views/module/Domains")
  //     },
  //     {
  //       path: "/menu",
  //       name: "menu",
  //       component: () => import("../views/module/Menus")
  //     }
  //   ]
  // }  
];

const router = new VueRouter({
  routes
});

export default router;
