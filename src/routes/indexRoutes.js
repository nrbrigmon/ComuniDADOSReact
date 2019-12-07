import React from "react";
import MappingPage from "views/MappingPage";
import LandingPage from "views/LandingPage";
import NotFound404 from "views/NotFound404";
import HowToPage from "views/HowToPage";
import SurveyPage from "views/SurveyPage";
import LoginPage from "views/LoginPage";

import MapIcon from "@material-ui/icons/Map"
import InfoIcon from "@material-ui/icons/Info"
import ListAltIcon from '@material-ui/icons/ListAlt';
import HelpIcon from '@material-ui/icons/Help';
import LanguageIcon from '@material-ui/icons/Language';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';



var indexRoutes = [
	{ path: "/about", enName: "ABOUT", prName: 'SOBRE', component: LandingPage, exact: true, icon: <InfoIcon /> },
  { path: "/home", enName: "HOME", prName: 'INICIAL', component: LoginPage, exact: true, icon: <HomeIcon /> },
  { path: "/how-to", enName: "HOW TO USE", prName: 'COMO USAR', component: HowToPage, exact: true, icon: <HelpIcon /> },
  { path: "/", enName: "MAP", prName: 'MAPA', component: MappingPage, exact: true, icon: <MapIcon /> },
  { path: "/survey", enName: "SURVEY", prName: 'PESQUISA', component: SurveyPage, exact: true, icon: <ListAltIcon /> },
  { path: "/login", enName: "LOGIN", prName: 'CONECTE', component: LoginPage, exact: true, icon: <ExitToAppIcon /> },
  { path: "/portugues", enName: "PORTUGUÊS", prName: 'ENGLISH', component: LandingPage, exact: true, icon: <LanguageIcon /> },
  { path: false, component: NotFound404 }
];

export default indexRoutes;
