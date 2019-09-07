export default function(state = {}, { type, payload }) {
  // console.log('action called', action);
  switch (type) {
    case "GET_MAP_LAYER":
      return payload;
    default:
      return state;
  }
}
