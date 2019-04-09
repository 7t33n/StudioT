import Vue from "vue";
import Router from "vue-router";

import page_signin from './../views/page_signin/page_signin';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main_page",
      redirect: "/reg"
    },
    {
      path: "/reg",
      name: "registration",
      component: page_signin,
    }
  ]
});
