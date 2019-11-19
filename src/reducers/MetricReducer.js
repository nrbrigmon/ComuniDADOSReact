import getSchemas from "schemas/initialStates";

export default function(state = getSchemas.metricSelection, { type, payload }) {
	// console.log('action called', action);
	// if ( getCache("preferredLanguage") ){
	// 	state = getCache("preferredLanguage")
	// }
  switch (type) {
    case "SELECT_EVENT_CATEGORY":
			// setCache("preferredLanguage", payload)
      return payload;
    default:
      return state;
  }
}