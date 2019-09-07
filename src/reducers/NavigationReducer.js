
export default function(state = [], { type, payload }) {
  // console.log('action called', action);
  switch (type) {
    case "SET_NAV":
      return payload;
    default:
      return state;
  }
}