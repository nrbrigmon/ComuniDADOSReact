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
	
	const res = await axios.post('/api/existing_user/', user);	
	// console.log(res)

	dispatch({ type: 'EXISTNG_USER_LOGIN', payload: res.data });
}

export const userRegister = (user) => async dispatch => {
	// console.log(user)
	const res = await axios.post('/api/new_user/', user);	
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

export const addUserLocation = (show) => async dispatch => {
	const res = await getUserCoordinates();
	// console.log(res)
	dispatch({ type: "ADD_USER_LOCATION",	payload: res });
}

export const userSignOut =  () => {
	const action = {
		type: "SIGN_OUT_USER"
	};
	return action

}