import MappingPage from "../views/MappingPage";
import LandingPage from "../views/LandingPage";
import NotFound404 from "../views/NotFound404";

var indexRoutes = [
  { path: "/about", name: "LandingPage", component: LandingPage, exact: true },
  {
    path: "/",
    name: "MappingPage",
    component: MappingPage,
    exact: true
  },
  { path: false, component: NotFound404 }
];

export default indexRoutes;
