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
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/member-login", component: MemberLogin },
  { path: "/sign-up", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router);
app.mount("#app");
