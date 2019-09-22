/* EXPORTED FUNCTIONS */

export const adjustLabelsForPR = function(metrics) {
	return metrics.map( elem => {
		return {
			label: elem.labelPR,
			value: elem.value,
			category: elem.category,
			palette: elem.palette,
			max: elem.max,
			min: elem.min,
			breaks: elem.breaks,
			legend: elem.legend
		}
	});
}
