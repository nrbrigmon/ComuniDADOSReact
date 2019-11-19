export const updatePopOver = (event) => {
	const action = {
		type: "UPDATE_POPOVER",
		payload: event
	}
	return action
}