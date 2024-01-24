import { createRouter, createWebHistory } from "vue-router";
import Portafolio from "../components/Portafolio.vue";
import Cv from "../components/Cv.vue";
import Cronos from "../PortafolioViews/Cronos.vue";
import MeetEase from "../PortafolioViews/MeetEase.vue";
import BarrazaInvestors from "../PortafolioViews/BarrazaInvestors.vue";
import Idtly from "../PortafolioViews/Idtly.vue";
import Balto from "../PortafolioViews/Balto.vue";
import Pokememory from "../PortafolioViews/Pokememory.vue";

const routes = [
  {
    path: "/",
    redirect: () => {
      return {
        name: "portafolio",
      };
    },
  },
  {
    path: "/portafolio",
    name: "portafolio",
    component: Portafolio,
  },
  {
    path: "/cv",
    name: "cv",
    component: Cv,
  },
  {
    path: "/cronos",
    name: "cronos",
    component: Cronos,
  },
  {
    path: "/meetease",
    name: "meetease",
    component: MeetEase,
  },
  {
    path: "/barrazainvestors",
    name: "barrazainvestors",
    component: BarrazaInvestors,
  },
  {
    path: "/idtly",
    name: "idtly",
    component: Idtly,
  },
  {
    path: "/balto",
    name: "balto",
    component: Balto,
  },
  {
    path: "/pokememory",
    name: "pokememory",
    component: Pokememory,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
