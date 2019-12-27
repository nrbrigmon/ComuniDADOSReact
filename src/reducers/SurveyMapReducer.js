import getSchemas from "schemas/initialStates";
import { updateStateValue } from "utils/state_utils";



export default function(state = getSchemas.surveyMap, { type, payload }) {
	// console.log('action called', action);
	// if ( getCache("preferredLanguage") ){
	// 	state = getCache("preferredLanguage")
	// }
  switch (type) {
    case "UPDATE_MAP_CENTER_COORDINATES":
		return updateStateValue(state, "mapCenterCoordinates", payload);
	case "UPDATE_MAP_ZOOM":
		return updateStateValue(state, "mapZoom", payload)
	case "UPDATE_MAP_BOUNDS":
		return updateStateValue(state, "mapBounds", payload)
    default:
      return state;
  }
}