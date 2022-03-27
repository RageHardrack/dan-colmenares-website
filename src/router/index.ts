import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: () => import("../views/Home.vue") },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog/Blog.vue"),
  },
  {
    path: "/blog/:slug",
    name: "Post",
    component: () => import("../views/Blog/Post.vue"),
  },
  {
    path: "/social-share",
    name: "SocialShare",
    component: () => import("../views/LinkTree/SocialShare.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
