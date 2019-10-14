import getSchemas from "schemas/initialStates";

import { translatePlaceholder, getColorPalette } from "utils/mapping_utils";


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
	// colorPalette: []
	//	metrics: ''
	//  	{category:"Social", palette:'sequ', max:'75', min:'20', breaks:'20,39.483,44.511,49.54', value:'AGE', legend:'none', label:'Age', labelPR:'Idade'},
	// },


let newState, colorPalette;

export default function(state = {}, { type, payload, id }) {
  // console.log(state);
  switch (type) {
    case "GET_MAP_LAYER":
			return payload;
		case "UPDATE_LAYER_TYPE":
			//update the type attribute (either district or blocks)
			newState = updateMapLayer(state, payload, "type");
			//restore the inital state for the palette
			newState = updateMapLayer(newState, getSchemas.mapLayers.colorPalette, "colorPalette")
			//restore the inital state for the metric field
			return updateMapLayer(newState, getSchemas.mapLayers.metric, "metric")
		case "UPDATE_LAYER_METRIC":
			//update the metric
			//first we add the new metric to the
			newState = updateMapLayer(state, payload, "metric");
			//second we get a color palette
			colorPalette = getColorPalette(newState.metric.palette);
			// console.log(colorPalette)
			return updateMapLayer(newState, colorPalette, "colorPalette")
		case "UPDATE_COLOR_PALETTE":
			
			return updateMapLayer(state, payload, "colorPalette")
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
