import Vue from "vue";
import VueRouter from "vue-router";
import ListView from "../views/ListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ListView,
  },
  {
    path: "/ingresar",
    name: "ingresar",

    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/registrarse",
    name: "registrarse",

    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/detalles",
    name: "detalles",

    component: () => import("../views/InfoView.vue"),
  },
  {
    path: "/carrito",
    name: "carrito",

    component: () => import("../views/CartView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
