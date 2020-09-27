import Vue from "vue";
import VueRouter from "vue-router";
import Map from "./pages/Map.vue";
import Home from "./pages/Home.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/map", component: Map },
  ],
});
