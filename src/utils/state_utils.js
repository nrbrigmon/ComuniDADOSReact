import { LOGIN_SCHEMA, REGISTER_SCHEMA } from "schemas/loginSchema";

export const updateStateValue = (state, attribute, value) => {
	// console.log(payload)
	let newState = {
		...state,
		[attribute] : value
	}
	return newState
}

export const validateSchema = (state) => {
	let results;
	if (state.view === 'Login'){
		results = LOGIN_SCHEMA.validate({username: state.username, password: state.password});
	} else {
		results = REGISTER_SCHEMA.validate({username: state.username, password: state.password, email: state.email});
	}
	return results;
}