import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: () => "../views/Home.vue" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
