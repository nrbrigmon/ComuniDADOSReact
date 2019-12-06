import getSchemas from "schemas/initialStates";
import { updateStateValue } from "utils/state_utils";



export default function(state = getSchemas.surveyMap, { type, payload }) {
	// console.log('action called', action);
	// if ( getCache("preferredLanguage") ){
	// 	state = getCache("preferredLanguage")
	// }
  switch (type) {
    case "UPDATE_MAP_CENTER_COORDINATES":
			// setCache("preferredLanguage", payload)
			// console.log(payload)
			// console.log(state)
			return updateStateValue(state, "mapCenterCoordinates", payload);
		case "UPDATE_MAP_ZOOM":
			return updateStateValue(state, "mapZoom", payload)
    default:
      return state;
  }
}