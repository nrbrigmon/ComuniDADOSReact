import { district_metrics } from "constants/metrics";

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

export const translatePlaceholder = function(new_lang, lkp_value) {
	//if there is nothing to translate, get out of the function
	if (lkp_value === ''){
		return ''
	}

	// takes the new chosen language, and the attribute's label and returns the translated value
	let translatedMetric = '';
	//loop through metrics and return the Object that has the same LABEL
	let foundMetric = district_metrics.filter( item => {
		return lkp_value === item.value
	})[0]
	if (new_lang === 'en'){
		translatedMetric = foundMetric.label;
	} else {
		translatedMetric = foundMetric.labelPR;
	}
	return translatedMetric
}