import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import MemberLogin from "./pages/MemberLogin.vue";
import Home from "./pages/Home.vue";
import SignUp from "./pages/SignUp.vue";
import "./index.css";

const routes = [
  { path: "/cannaExchange/", component: Home },
  { path: "/cannaExchange/about", component: About },
  { path: "/cannaExchange/contact", component: Contact },
  { path: "/cannaExchange/member-login", component: MemberLogin },
  { path: "/cannaExchange/sign-up", component: SignUp },
  { path: "/cannaExchange/*", redirect: "/cannaExchange/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router);
app.mount("#app");
