import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import UtilityReducer from "./UtilityReducer";
import MappingReducer from "./MappingReducer";
import MetricReducer from "./MetricReducer";

export default combineReducers({
  randomId: UtilityReducer,
  authUser: UserReducer,
	mapLayers: MappingReducer,
	metricSelection: MetricReducer
});
