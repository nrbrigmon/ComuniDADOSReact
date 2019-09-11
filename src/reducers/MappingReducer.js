function updateMapLayer(state, payload, id){
	let newState = {
		...state,
		[id] : payload,
	}
	// console.log(newState)
	return newState
}

	// mapLayers: {
	// 	helio: {},
	// 	sao: {},
	// 	type: "districts"
	// },

export default function(state = {}, { type, payload, id }) {
  // console.log(state);
  switch (type) {
    case "GET_MAP_LAYER":
			return payload;
		case "GET_MAP_LAYER_BY_ID":
			// console.log(payload);
			return updateMapLayer(state, payload, id);
    default:
      return state;
  }
}
