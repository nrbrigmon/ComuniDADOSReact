
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