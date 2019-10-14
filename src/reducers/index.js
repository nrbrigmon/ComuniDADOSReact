import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import UtilityReducer from "./UtilityReducer";
import MappingReducer from "./MappingReducer";
import NavigationReducer from "./NavigationReducer";
import LanguageReducer from "./LanguageReducer";
import DrawerReducer from "./DrawerReducer";
import UserLocationReducer from "./UserLocationReducer";
import EventReducer from "./EventReducer";



export default combineReducers({
	chapaEvent: EventReducer,
	mapLayers: MappingReducer,
	navLocation: NavigationReducer,
	navDrawer: DrawerReducer,
	preferredLanguage: LanguageReducer,
  randomId: UtilityReducer,
  userInfo: UserReducer,
	userLocation: UserLocationReducer
});
