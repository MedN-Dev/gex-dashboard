import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  linkActiveClass: "nav__link_active",
  routes: [
    {
      path: "/",
      component: () => import("../components/Main/Overview/OverviewData.vue")
    },
    {
      path: "/users",
      component: () => import("../components/Main/Users/UserList.vue")
    },
    {
      path: "/add",
      component: () => import("../components/Main/Add/AddUser.vue")
    },
    {
      path: "/edit/:id",
      component: () => import("../components/Main/Edit/EditUser.vue")
    }
  ]
});
