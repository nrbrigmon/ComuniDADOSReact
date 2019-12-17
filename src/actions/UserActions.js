import axios from 'axios';
import { getUserCoordinates } from "utils/user_utils";
import { API_CONFIG } from "constants/axios_config";

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
	
	API_CONFIG.data = user;
	
	await axios.post(process.env.REACT_APP_API_URL+'api/existing_user/', API_CONFIG)
		.then( (response) => {
			dispatch({ type: 'EXISTNG_USER_LOGIN', payload: response.data });
		})
		.catch( (error) => {
			console.log(Object.keys(error))
			console.log(Object.values(error))
			if (error.isAxiosError){
				dispatch({ type: 'USER_LOGIN_NETWORK_FAIL', payload: 'Network error. Please try again later :(' });
			}
		})	

}

export const userRegister = (user) => async dispatch => {
	console.log('registering new user...')
	// console.log(user)
	API_CONFIG.data = user;
	const res = await axios.post(process.env.REACT_APP_API_URL+'api/new_user/', API_CONFIG);		
	// const res = await axios.post('/api/new_user/', user);	
	console.log('received registered response...')
	// console.log(res)

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

export const addFeauxLocation = (coords) => {
	let res = {
		show: true,
		lat: coords[0],
		long: coords[1],
		accurMeters: 0, 
		err: false,
		errMsg: "success"	
	}
	const action = {
		type: "ADD_FEAUX_USER_LOCATION"
		,payload: res
	};
	return action
}

export const userSignOut =  () => {
	const action = {
		type: "SIGN_OUT_USER"
	};
	return action

}