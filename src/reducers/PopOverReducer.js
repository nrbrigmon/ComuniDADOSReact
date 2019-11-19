import getSchemas from "schemas/initialStates";


let toggleState = (state, event ) => {
	return ( state.open ? 
			{
				anchor: null, 
				open: false
			} : {
				anchor: event.currentTarget, 
				open: true
			})
}

export default function(state = getSchemas.popover, { type, payload }) {
  // console.log('action called', action);
  switch (type) {
    case "UPDATE_POPOVER":
      return toggleState(state, payload)
    default:
      return state;
  }
}
