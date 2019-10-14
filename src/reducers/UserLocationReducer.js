import getSchemas from "schemas/initialStates";

function updateUserLocation(payload){
	//should we find the user?
	if (payload.show === true){
		return payload
	} else {
		// reset userLocation
		return getSchemas.userLocation
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
	// console.log(state)
  switch (type) {
    case "NO_LOCATION":
      return getSchemas.userLocation;
		case "ADD_USER_LOCATION":
			return updateUserLocation(payload)
    default:
      return state;
  }
}
