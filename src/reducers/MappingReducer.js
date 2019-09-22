import getSchemas from "schemas/initialStates";

import { translatePlaceholder }from "utils/metric_utils";

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
	//	baseMapOpacity: 100,
	//  baseMapSelection: 1,
	//	metrics: ''
	//  { category: "Social", value: "sequ", max: "5.469", min: "0", breaks: "0,0.1,1.281,2.61", label: "NUM_FAM_LOT", legend: "none", label: "Lot Occupation" }
	// },

export default function(state = {}, { type, payload, id }) {
  // console.log(state);
  switch (type) {
    case "GET_MAP_LAYER":
			return payload;
		case "UPDATE_LAYER_TYPE":
			//update the type attribute
			let newState = updateMapLayer(state, payload, "type");
			//restore the inital state for the metric field
			return updateMapLayer(newState, getSchemas.mapLayers.metric, "metric")
		case "UPDATE_LAYER_STYLE":
			return updateMapLayer(state, payload, "metric")
		case "UPDATE_LAYER_OPACITY":
			return updateMapLayer(state, payload, "baseMapOpacity")
		case "UPDATE_BASE_LAYER":
			return updateMapLayer(state, payload, "baseMapSelection")
		case "GET_MAP_LAYER_BY_ID":
			return updateMapLayer(state, payload, id);
		case "TRANSLATE_METRIC":
				// console.log(state);
				let translatedValue = translatePlaceholder(payload, state.metric.value)
				// console.log(state.metric)
				let updateMetricState = updateMapLayer(state.metric, translatedValue, "label")
				// console.log(translatedValue)
				// console.log(updateMetricState)
				// let newState = translatePlaceholder(state, payload)
				return updateMapLayer(state, updateMetricState, "metric")
    default:
      return state;
  }
}
