
export default function(state = [], { type, payload }) {
  // console.log('action called', action);
  switch (type) {
    case "SET_LANGUAGE":
      return payload;
    default:
      return state;
  }
}