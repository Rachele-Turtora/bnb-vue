//? importiamo il router:
import { createRouter, createWebHistory } from "vue-router";

//? importiamo le pagine del progetto:
import HomePage from './pages/HomePage.vue';
import ResultsPage from './pages/ResultsPage.vue';

//? creiamo rotte:
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/results",
      name: "results",
      component: ResultsPage,
    },
    // {
    //   path: "/Name/:slug", //? rotta parametrica per il detteglio
    //   name: "detail",
    //   component: NomeDetail,
    // },
  ],
});
export { router };