import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

const routes = [
  { path: "/Home", component: Home },
  { path: "/AddCard", component: AddCard },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
