import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Manage from "@/views/ManageView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/manage-music",
    name: "manage",
    alias: "/manage",
    component: Manage,
    /*     beforeEnter: (to, from, next) => {
      console.log(to, from);
      console.log("come from managed Guard");
      next();
    }, */
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  console.log(to.meta);
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  /*   const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  } */
});

export default router;
