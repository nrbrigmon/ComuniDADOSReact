import React from "react";
import MappingPage from "views/MappingPage";
import LandingPage from "views/LandingPage";
import NotFound404 from "views/NotFound404";
import HowToPage from "views/HowToPage";
import CreateSurveyPage from "views/CreateSurveyPage";

import MapIcon from "@material-ui/icons/Map"
import InfoIcon from "@material-ui/icons/Info"
import ListAltIcon from '@material-ui/icons/ListAlt';
import HelpIcon from '@material-ui/icons/Help';
import LanguageIcon from '@material-ui/icons/Language';


var indexRoutes = [
  { path: "/", enName: "MAP", prName: 'MAPA', component: MappingPage, exact: true, icon: <MapIcon /> },
	{ path: "/about", enName: "ABOUT", prName: 'SOBRE', component: LandingPage, exact: true, icon: <InfoIcon /> },
  { path: "/how-to", enName: "HOW TO USE", prName: 'COMO USAR', component: HowToPage, exact: true, icon: <HelpIcon /> },
  { path: "/survey", enName: "SURVEY", prName: 'PESQUISA', component: CreateSurveyPage, exact: true, icon: <ListAltIcon /> },
  { path: "/portugues", enName: "PORTUGUÊS", prName: 'ENGLISH', component: LandingPage, exact: true, icon: <LanguageIcon /> },
  { path: false, component: NotFound404 }
];

export default indexRoutes;
