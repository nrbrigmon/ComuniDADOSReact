// import axios from "axios";

export const selectMetricLayer = (layerId) => {
		// console.log(select)
		const action = {
			type: "SELECT_LAYER_BY_ID",
			payload: layerId
		};
		return action;
};

export const selectMetricAttribute = (metricId) => {
		const action = {
			type: "SELECT_METRIC_BY_ID",
			payload: metricId
		};
		return action;
};


export const translateMetric = (language) => {
	const action = {
		type: "TRANSLATE_METRIC",
		payload: language
	}
	return action
}