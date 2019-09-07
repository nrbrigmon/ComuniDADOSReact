import MappingPage from "../views/MappingPage";
import LandingPage from "../views/LandingPage";
import NotFound404 from "../views/NotFound404";

var indexRoutes = [
  { path: "/about", name: "ABOUT", component: LandingPage, exact: true },
  { path: "/mapping", name: "MAP", component: MappingPage, exact: true },
  { path: "/how-to", name: "HOW TO USE", component: LandingPage, exact: true },
  { path: "/create-survey", name: "CREATE SURVEY", component: LandingPage, exact: true },
  { path: "/portugues", name: "PORTUGUÊS", component: LandingPage, exact: true },
  { path: false, component: NotFound404 }
];

export default indexRoutes;
