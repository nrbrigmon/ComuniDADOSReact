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

export const userLogin = (user) => async dispatch => {
	// console.log('user logging in...')
	// console.log(process.env.REACT_APP_API_URL+'api/existing_user/',)
	const res = await axios.post(process.env.REACT_APP_API_URL+'api/existing_user/', user);	
	console.log(res)
	console.log('received login response...')
	// console.log(res)

	dispatch({ type: 'EXISTNG_USER_LOGIN', payload: res.data });
}

export const userRegister = (user) => async dispatch => {
	console.log('registering new user...')
	console.log(user)
	const res = await axios.post(process.env.REACT_APP_API_URL+'api/new_user/', user);	
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