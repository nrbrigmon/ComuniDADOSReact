import axios from 'axios';
import { getUserCoordinates } from "utils/user_utils"

/* USER ACTIONS */
export const defaultUser = () => {
  const action = {
    type: "DEFAULT_USER"
  };
  return action;
};

export const handleUserUpdate = (_id, _val) => {
	// console.log(_id)
	// console.log(_val)
	const action = {
		type: "UPDATE_USER_INFO"
		,payload: {
			_id,
			_val
		}
	};
	return action
}

// const PROXY_PORT = process.env.REACT_APP_API_URL.substring( process.env.REACT_APP_API_URL.length - 5, process.env.REACT_APP_API_URL.length-1)
// const PROXY_URL =  process.env.REACT_APP_API_URL.substring( 7, process.env.REACT_APP_API_URL.length-6)

const API_CONFIG = {
	headers: {
		'Content-Type':'application/json'
	}
}
// 	proxy: {
// 		host: PROXY_URL,
// 		port: PROXY_PORT,
// 	}
// }

export const userLogin = (user) => async dispatch => {
	console.log('user logging in with proxy...')
	// console.log(process.env.REACT_APP_API_URL+'api/existing_user/')
	// console.log(API_CONFIG)
	API_CONFIG.data = user;
	// const res = await axios.post(process.env.REACT_APP_API_URL+'api/existing_user/', API_CONFIG);		
	const res = await axios.post('/api/existing_user/', API_CONFIG);	
	console.log(res)
	console.log('received login response...')
	// console.log(res)

	dispatch({ type: 'EXISTNG_USER_LOGIN', payload: res.data });
}

export const userRegister = (user) => async dispatch => {
	console.log('registering new user...')
	console.log(user)
	// const res = await axios.post(process.env.REACT_APP_API_URL+'api/new_user/', user);		
	const res = await axios.post('/api/new_user/', user);	
	console.log('received registered response...')
	console.log(res)

	dispatch({ type: 'NEW_USER_REGISTER', payload: res.data });
}

export const userPasswordsNoMatch = (lang) => {
	const action = {
		type: "PASSWORD_MATCH_FAIL"
		,payload: lang
	};
	return action
}

export const userRegisterFail = (msg) => {
	const action = {
		type: "USER_REGISTER_FAIL"
		,payload: msg
	};
	return action
}

export const addUserLocation = (show) => async dispatch => {
	//if we decide to show, get usercoordinates
	if (show){
		const res = await getUserCoordinates();
		// console.log(res)
		dispatch({ type: "ADD_USER_LOCATION",	payload: res });
	} else {
		//if we decide not to show, we remove location
		dispatch({ type: "NO_LOCATION",	payload: show });
	}
}

export const updateUserLocation = (coords) => {
	const action = {
		type: "UPDATE_USER_LOCATION",
		payload: coords
	}
	return action;
}

export const userSignOut =  () => {
	const action = {
		type: "SIGN_OUT_USER"
	};
	return action

}