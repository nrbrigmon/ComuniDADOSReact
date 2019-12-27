import getSchemas from "schemas/initialStates";
import { setCache, getCache } from "utils/cache_utils";
import { updateStateValue } from "utils/state_utils";

function registerUserResults(state, payload){
	let registeredUser;
	// console.log(payload)
	//this error means that something doesnt match our password requirements
	if (payload.err === true){
		registeredUser = {
			...state,
			"err": payload.err,
			"errMsg": payload.errMsg
		}
	} else {
		registeredUser = {
			...payload,
			"err": false,
			"errMsg": ""
		}
		setCache("userInfo", registeredUser)
	}
	return registeredUser
}

function removeUserState(){
	setCache("userInfo", null)
	return getSchemas.userInfo
}

export default function(state = getSchemas.userInfo, { type, payload }) {
	// console.log(state)
	if ( getCache("userInfo") ){
		state = getCache("userInfo")
		// debugger
	}
	switch (type) {
		case "DEFAULT_USER":
			return state;
		case "NEW_USER_REGISTER":
			return registerUserResults(state, payload);
		case "EXISTNG_USER_LOGIN":
			return registerUserResults(state, payload);
		case "USER_LOGIN_FAIL":
			return registerUserResults(state, { err: true, errMsg: payload} )
		case "USER_LOGIN_NETWORK_FAIL":
			return registerUserResults(state, { err: true, errMsg: payload} )
		case "UPDATE_USER_INFO":
			return updateStateValue(state, payload._id, payload._val)
		case "SIGN_OUT_USER":
			return removeUserState();
    default:
      return state;
  }
}
