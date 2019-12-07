import getSchemas from "schemas/initialStates";
import { translatePlaceholder, getColorPalette } from "utils/mapping_utils";
import { updateStateValue } from "utils/state_utils";


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
			newState = updateStateValue(state, "type", payload);
			//restore the inital state for the palette
			newState = updateStateValue(newState, "colorPalette", getSchemas.mapLayers.colorPalette)
			//restore the inital state for the metric field
			return updateStateValue(newState, "metric", getSchemas.mapLayers.metric)
		case "UPDATE_LAYER_METRIC":
			//update the metric
			//first we add the new metric to the
			newState = updateStateValue(state, "metric", payload);
			//second we get a color palette
			colorPalette = getColorPalette(newState.metric.palette);
			// console.log(colorPalette)
			return updateStateValue(newState, "colorPalette", colorPalette )
		case "UPDATE_COLOR_PALETTE":
			
			return updateStateValue(state, "colorPalette", payload )
		case "UPDATE_LAYER_OPACITY":
			return updateStateValue(state, "baseMapOpacity", payload )
		case "UPDATE_BASE_LAYER":
			return updateStateValue(state, "baseMapSelection", payload )
		case "GET_MAP_LAYER_BY_ID":
			return updateStateValue(state, id, payload);
		case "TRANSLATE_METRIC":
				// console.log(state);
				let translatedValue = translatePlaceholder(payload, state.metric.value)
				// console.log(state.metric)
				let updateMetricState = updateStateValue(state.metric, "label", translatedValue )
				// console.log(translatedValue)
				// console.log(updateMetricState)
				// let newState = translatePlaceholder(state, payload)
				return updateStateValue(state, "metric", updateMetricState )
    default:
      return state;
  }
}
