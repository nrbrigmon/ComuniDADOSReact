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
	// 	type: "districts",
	//	metrics: ''
	// },

export default function(state = {}, { type, payload, id }) {
  // console.log(state);
  switch (type) {
    case "GET_MAP_LAYER":
			return payload;
		case "UPDATE_LAYER_TYPE":
			let newState = updateMapLayer(state, payload, "type");
			return updateMapLayer(newState, { label: "" }, "metric")
		case "UPDATE_LAYER_STYLE":
			return updateMapLayer(state, payload, "metric")
		case "GET_MAP_LAYER_BY_ID":
			// console.log(payload);
			return updateMapLayer(state, payload, id);
    default:
      return state;
  }
}
