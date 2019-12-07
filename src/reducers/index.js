import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import UtilityReducer from "./UtilityReducer";
import MappingReducer from "./MappingReducer";
import NavigationReducer from "./NavigationReducer";
import LanguageReducer from "./LanguageReducer";
import DrawerReducer from "./DrawerReducer";
import UserLocationReducer from "./UserLocationReducer";
import EventReducer from "./EventReducer";
import MetricReducer from "./MetricReducer";
import PopOverReducer from "./PopOverReducer";
import SurveyMapReducer from "./SurveyMapReducer";


export default combineReducers({
	chapaEvents: EventReducer,
	mapLayers: MappingReducer,
	metricSelection: MetricReducer,
	navLocation: NavigationReducer,
	navDrawer: DrawerReducer,
	popover: PopOverReducer,
	preferredLanguage: LanguageReducer,
	randomId: UtilityReducer,
	surveyMap: SurveyMapReducer,
  userInfo: UserReducer,
	userLocation: UserLocationReducer
});
