import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/AuthStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/shop",
      name: "shop",

      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/product",
      name: "product",

      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      meta: { requiresAuth: true },

      component: () => import("../views/CheckoutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",

      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // If route needs auth and user not logged in, redirect
  if (to.meta.requiresAuth && !authStore.user) {
    // Delay toast until after redirect
    next({ name: "login", query: { reason: "auth" } });
  } else {
    next();
  }
});

export default router;
