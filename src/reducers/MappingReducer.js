// import getSchemas from "schemas/initialStates";

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
	//  { category: "Social", value: "sequ", max: "5.469", min: "0", breaks: "0,0.1,1.281,2.61", label: "NUM_FAM_LOT", legend: "none", label: "Lot Occupation" }
	// },

export default function(state = {}, { type, payload, id }) {
  // console.log(state);
  switch (type) {
    case "GET_MAP_LAYER":
			return payload;
		case "UPDATE_LAYER_TYPE":
			let newState = updateMapLayer(state, payload, "type");
			return updateMapLayer(newState, { value: "" }, "metric")
		case "UPDATE_LAYER_STYLE":
			return updateMapLayer(state, payload, "metric")
		case "GET_MAP_LAYER_BY_ID":
			return updateMapLayer(state, payload, id);
    default:
      return state;
  }
}
