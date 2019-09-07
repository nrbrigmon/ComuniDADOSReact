import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import UtilityReducer from "./UtilityReducer";
import MappingReducer from "./MappingReducer";
import MetricReducer from "./MetricReducer";
import NavigationReducer from "./NavigationReducer";
import LanguageReducer from "./LanguageReducer";
import DrawerReducer from "./DrawerReducer";



export default combineReducers({
  randomId: UtilityReducer,
  authUser: UserReducer,
	mapLayers: MappingReducer,
	metricSelection: MetricReducer,
	navLocation: NavigationReducer,
	navDrawer: DrawerReducer,
	preferredLanguage: LanguageReducer
});
