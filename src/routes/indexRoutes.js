import MappingPage from "views/MappingPage";
import LandingPage from "views/LandingPage";
import NotFound404 from "views/NotFound404";
import HowToPage from "views/HowToPage";
import CreateSurveyPage from "views/CreateSurveyPage";

var indexRoutes = [
  { path: "/", enName: "MAP", prName: 'MAPA', component: MappingPage, exact: true },
	{ path: "/about", enName: "ABOUT", prName: 'SOBRE', component: LandingPage, exact: true },
  { path: "/how-to", enName: "HOW TO USE", prName: 'COMO USAR', component: HowToPage, exact: true },
  { path: "/create-survey", enName: "CREATE SURVEY", prName: 'CRIAR PESQUISA', component: CreateSurveyPage, exact: true },
  { path: "/portugues", enName: "PORTUGUÊS", prName: 'ENGLISH', component: LandingPage, exact: true },
  { path: false, component: NotFound404 }
];

export default indexRoutes;
