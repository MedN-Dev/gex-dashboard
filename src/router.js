import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./components/Home.vue")
    },
    {
      path: "/users",
      component: () => import("./components/About.vue")
    }
  ]
});
