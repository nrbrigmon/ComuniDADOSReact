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