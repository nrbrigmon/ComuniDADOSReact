import { LOGIN_SCHEMA, REGISTER_SCHEMA, RESET_SCHEMA } from "schemas/loginSchema";
import { navigateTo } from "utils/nav_utils";
import { interpretErrorMessage } from "utils/language_utils";

/// USER LOCATION
let errorState = {
	show: false,
	lat: 0,
	long: 0,
	accurMeters: 0,
	err: true,
	errMsg: "There was an error of some kind... Sorry!"
}

function requestPosition() {
  // additionally supplying options for fine tuning, if you want to
  let options = {
    enableHighAccuracy: true,
    timeout:    5000,   // time in millis when error callback will be invoked
    maximumAge: 0,      // max cached age of gps data, also in millis
  };

  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      pos => { resolve({
				show: true,
				lat: pos.coords.latitude,
				long: pos.coords.longitude,
				accurMeters: pos.coords.accuracy, 
				err: false,
				errMsg: "success"
			}); }, 
      err => { reject (errorState); }, 
      options);
  });
}

export const getUserCoordinates = async () => {
	let userState = {}
	// // console.log('trying to get user coordinates...')
	if (navigator.geolocation) {
		
		userState = await requestPosition();
		// (position) => {			//
	} else {
		userState = errorState;
	}

	if (userState === undefined){
		userState = {}
	}
	return  userState;
	
};

//USER TOKEN FUNCTIONS
// let createExpiryToken = function(){
//     let dateObj = new Date();
//     let dateMilliseconds = dateObj.getTime() //convert to milliseconds
//     let encryptedToken = (dateMilliseconds + Number(process.env.TOKEN_ADDITION) ).toString(16) //add custom addition and then HEX
//     let dubdubToken = String(encryptedToken) + String(encryptedToken)
//     return dubdubToken
// }

const decryptExpiryToken = (token) => {
	let halfToken = token.substring(0, token.length/2) //token is doubled, so we half it
	return parseInt(halfToken, 16) - 3005 //convert back to decimal and use 3005 as adjustment
}

export const checkExpiryToken = (token) => {
	// this function decrypts the token and returns true or false depending on 24 hr time constraint
	let decryptedToken = decryptExpiryToken(token)
	let dateObj = new Date();
	let dateMilliseconds = dateObj.getTime() //convert to milliseconds
	let timeBalance = (( (dateMilliseconds - decryptedToken) / 1000 ) / 60 / 60 ) //current timestamp in milliseconds vs token milliseconds (hours)
	// console.log(timeBalance)
	return ( timeBalance > 24 ? true : 
			 timeBalance === undefined ? true :
			 isNaN(timeBalance) ? true : false ) //true -> has expired
}

//USER LOGIN FUNCTIONS

const validateSchema = (state) => {
	let results;
	if (state.view === 'Login'){
		results = LOGIN_SCHEMA.validate({username: state.username, password: state.password});
	} else if (state.view === 'Register'){
		results = REGISTER_SCHEMA.validate({username: state.username, password: state.password, email: state.email});
	} else {
		//there is no view state and this is password reset
		results = RESET_SCHEMA.validate({password: state.password, email: state.email});
	}
	return results;
}


export const handleLoginEvent = (_props, _state) => {
	//put loading animation in play
	_props.startLoadingAnimation()
	
	let validCredentials = validateSchema(_state)
	//test credentials 
	if (validCredentials.error !== undefined){
		
		let errMsg = interpretErrorMessage(validCredentials.error.details[0].message, _props.preferredLanguage);
		_props.userLoginFail(errMsg)
		// this.props.updateLoadingAnimation()

	} else {
		// basic validation is passed
		/// USER iS LOGGING IN
		if (_state.view === 'Login'){
			_props.userLogin(_state)
			//if success will navigate home
			navigateTo("home", _props);
		} else {
			/// USER IS REGISTERING OR UPDATING PASSWORD
			if (_state.password !== _state.passwordConfirm) {
				let pwErr = interpretErrorMessage("password match", _props.preferredLanguage)
				_props.userLoginFail(pwErr)

			} else if (_state.view === 'Register'){
				//success
				_props.userRegister(_state);
				//if success will navigate home
				navigateTo("home", _props);
				
			} else {
				//USER IS UPDATING PASSWORD
				_props.userUpdatePassword(_state);
				navigateTo("home", _props);

			}
			_props.stopLoadingAnimation() //stop loading animation

		}
	}
}
