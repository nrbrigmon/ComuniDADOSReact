import axios from "axios";

// export const fetchMapLayer = map_layer_id => async dispatch => {
// 		// map_layer_id = "sao_districts"
// 		const res = await axios.get("../temp_data/" + map_layer_id + ".json");
// 		// console.log(res.data.);
// 		dispatch({type: "GET_MAP_LAYER", payload: res.data});
// };

export const fetchMapLayerById = (map_layer_id, geo_type) => async dispatch => {
	// map_layer_id = "sao_districts"
	// console.log(map_layer_id, geo_type)
	let _url =  "../temp_data/" + map_layer_id + "_" + geo_type + ".json";
	// console.log(_url)
	const res = await axios.get(_url);
	// console.log(res.data);
	dispatch({type: "GET_MAP_LAYER_BY_ID", payload: res.data, id: map_layer_id });
};

export const updateLayerStyle = (metric) => {
	const action = {
		type: "UPDATE_LAYER_METRIC",
		payload: metric
  };
  return action;
}

export const updateLayerOpacity = (opacity) => {
	const action = {
		type: "UPDATE_LAYER_OPACITY",
		payload: opacity
	}
	return action;
}


export const updateBaseLayer = (selection) => {
	const action = {
		type: "UPDATE_BASE_LAYER",
		payload: selection
	}
	return action;
}


export const updateLayerType = (geoType) => {
	const action = {
		type: "UPDATE_LAYER_TYPE",
		payload: geoType
  };
  return action;
}


export const translateMetric = (language) => {
	const action = {
		type: "TRANSLATE_METRIC",
		payload: language
	}
	return action
}

export const updateColorPalette = (palette) => {
	// console.log(palette)
	const action = {
		type: "UPDATE_COLOR_PALETTE",
		payload: palette
	}
	return action
}

export const updateMapCenterCoordinates = (coords) => {
	const action = {
		type: "UPDATE_MAP_CENTER_COORDINATES",
		payload: coords
	}
	return action
}
export const updateMapZoom = (zoom) => {
	const action = {
		type: "UPDATE_MAP_ZOOM",
		payload: zoom
	}
	return action
}
