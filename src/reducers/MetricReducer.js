export default function(state = '', { type, payload }) {
  // console.log('action called', action);
  switch (type) {
    case "SELECT_LAYER_BY_ID":
      return payload;
    default:
      return state;
  }
}
