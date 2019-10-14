export const setCache = (name, object) => {
	// let cache;
	try {
			localStorage.setItem(name,JSON.stringify(object));  
	} catch (e) {
			console.log("ERROR SETTING LOCAL STORAGE");
			console.log(e)
	}

}

export const getCache = (name) => {
	return JSON.parse(localStorage.getItem(name));
}
