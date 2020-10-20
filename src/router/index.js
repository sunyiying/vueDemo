import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/Main.vue")
  },
  {
    path:"/user",
    name:"User",
    component:() => import("../views/user/Users")
  },
  {
    path:"/userRole",
    name:"userRole",
    component:() => import("../views/user/UserRole")
  }
  ,
  {
    path:"/module",
    name:"domain",
    component:() => import("../views/module/Domains")
  },
  {
    path:"/menu",
    name:"menu",
    component:() => import("../views/module/Menus")
  }


  // {
  //   path: "/Home",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import("../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
