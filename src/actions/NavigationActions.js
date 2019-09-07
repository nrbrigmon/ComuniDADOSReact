
export const setLocation = (hist) => {
	const action = {
		type: "SET_NAV",
		payload: hist
	}
	return action;
}

export const toggleDrawer = (state) => {
	const action = {
		type: "TOGGLE_DRAWER",
		payload: state
	}
	return action;
}