import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Header/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./components/Header/About.vue")
    }
  ]
});
