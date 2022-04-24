import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ThreadViewVue from "@/views/ThreadView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/thread/:threadId",
      name: "Thread",
      component: ThreadViewVue,
      props: (route) => ({ threadId: route.params.threadId }),
    },
  ],
});

export default router;
