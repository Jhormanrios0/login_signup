import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../HomeView.vue";
import SignInView from "../components/views/SignInViews.vue";
import SignUpView from "../components/views/SignUpViews.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignInView,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUpView,
    },
  ],
});

export default router;
