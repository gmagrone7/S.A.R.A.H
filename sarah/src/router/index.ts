import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/Home.vue"; // Dovrai creare questo componente
import ContactsView from "../views/Contacts/Contacts.vue"; // Dovrai creare questo componente
import SplashView from "../views/Splash/Splash.vue"; // Dovrai creare questo componente

const routes = [
  {
    path: "/splash",
    name: "Splash",
    component: SplashView,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsView,
  },
  {
    path: "/",
    redirect: "/splash", // Reindirizza la root a /home
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
