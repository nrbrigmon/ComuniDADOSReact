
export default function(state = {}, { type, payload }) {
  // console.log('action called', action);
  switch (type) {
    case "NEW_CHAPA_EVENT":
      return payload;
    default:
      return state;
  }
}
