import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFoundView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: "/detalle/:id",
    name: "detalle",

    component: () => import("../views/InfoView.vue"),
  },
  {
    path: "/carrito",
    name: "carrito",

    component: () => import("../views/CartView.vue"),
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  routes,
});

export default router;
