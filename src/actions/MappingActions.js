import axios from "axios";

export const fetchMapLayer = map_layer_id => async dispatch => {
		// map_layer_id = "sao_districts"
		const res = await axios.get("../temp_data/" + map_layer_id + ".json");
		// console.log(res.data.);
		dispatch({type: "GET_MAP_LAYER", payload: res.data});
};

export const fetchMapLayerById = (map_layer_id, geo_type) => async dispatch => {
	// map_layer_id = "sao_districts"
	// console.log(map_layer_id, geo_type)
	let _url =  "../temp_data/" + map_layer_id + "_" + geo_type + ".json";
	// console.log(_url)
	const res = await axios.get(_url);
	// console.log(res.data);
	dispatch({type: "GET_MAP_LAYER_BY_ID", payload: res.data, id: map_layer_id });
};

export const updateLayerStyles = (obj) => {
	const action = {
		type: "UPDATE_LAYER_STYLE",
		payload: obj
  };
  return action;
}