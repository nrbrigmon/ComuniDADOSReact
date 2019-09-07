
export default function(state = false, { type }) {
  // console.log('action called', action);
  switch (type) {
    case "TOGGLE_DRAWER":
      return !state; //return the opposite of current state
    default:
      return state;
  }
}