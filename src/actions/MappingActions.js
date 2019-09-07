import axios from "axios";

export const fetchMapLayer = map_layer_id => async dispatch => {
		// map_layer_id = "sao_districts"
		const res = await axios.get("../temp_data/" + map_layer_id + ".json");
		// console.log(res.data.);
		dispatch({type: "GET_MAP_LAYER", payload: res.data});
};