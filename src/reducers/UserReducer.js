import getSchemas from "schemas/initialStates";
import { setCache, getCache } from "utils/cache_utils";

function updateUserInfo(state, payload){
	// console.log(payload)
	let newState = {
		...state,
		[payload._id] : payload._val
	}
	return newState
}

function passwordMatchFail(state, payload){
	let errorText = ( payload === 'en' ? 'Sorry! Your passwords do not match! Try again.' : 'Desculpa! Suas senhas não coincidem! Tente novamente.')
	let newState = {
		...state,
		err: true,
		errMsg: errorText
	}
	return newState
}

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
		case "PASSWORD_MATCH_FAIL":
			return passwordMatchFail(state, payload);
		case "USER_REGISTER_FAIL":
			return registerUserResults(state, { err: true, errMsg: payload} )
		case "UPDATE_USER_INFO":
			return updateUserInfo(state, payload)
		case "SIGN_OUT_USER":
			return removeUserState();
    default:
      return state;
  }
}
