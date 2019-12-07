import getSchemas from "schemas/initialStates";

function addUserLocation(payload){
	//should we find the user?
	if (payload.show === true){
		return payload
	} else {
		// reset userLocation
		return getSchemas.userLocation
	}
}

function updateUserLocation(state, payload){
	// console.log(payload)
	return {
		...state,
		lat: payload.lat,
		long: payload.lng
	}
}
/**
	show: false,
	lat: null,
	long: null,
	err: false,
	errMsg: '' 
*/
export default function(state = getSchemas.userLocation, { type, payload }) {
	console.log(state)
  switch (type) {
    case "NO_LOCATION":
      return getSchemas.userLocation;
		case "ADD_USER_LOCATION":
			return addUserLocation(payload)
		case "ADD_FEAUX_USER_LOCATION":
			return payload;
		case "UPDATE_USER_LOCATION":
			return updateUserLocation(state, payload)
    default:
      return state;
  }
}
