
export const updateStateValue = (state, attribute, value) => {
	// console.log(payload)
	let newState = {
		...state,
		[attribute] : value
	}
	return newState
}
