import { COLOR_SCHEMES, DESCRIPTION_LOOKUP, DESCRIPTION_LOOKUP_PR, LEGEND_LOOKUP, LEGEND_LOOKUP_PR }from "constants/lookup_variables";
import { district_metrics } from "constants/metrics";

/* UTILITY FUNCTIONS */
let toTitleCase = function(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};
let toCurrency = function(num) {
	if (num == null) {
		return 'N/A';
	}
	let txt = parseFloat(num)
		.toFixed(2)
		.toString();
	if (txt.length > 5) {
		return (
			'R$' +
			parseFloat(num)
				.toFixed(0)
				.toString()
				.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
		);
	} else {
		return (
			'R$' +
			parseFloat(num)
				.toFixed(2)
				.toString()
				.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
		);
	}
};


let toPercent = function(num) {
	let a = parseFloat(num * 100).toFixed(1);
	return a + '%';
};

let runArrayTest = function(arr, value){
	//loop through test array and if anything shows up, return true
	//this function filters through the given word array
	//if any word in the label description matches, then it is added to the result array
	let result = arr.filter( wrd => value.toUpperCase().indexOf(wrd) > -1 )
	// finally if the length of the array is greater than 0 we return true, else false
	return (result.length > 0 ? true : false)
}

let testForPercent = function(value){
	let percentArray = ['GROWTH','POVERTY RATE', 'PERCENT', '%', 'RATIO'];
	return runArrayTest(percentArray, value);
} 

let testForCurrency = function(value){
	let currencyArray = ['WAGE','EARNING','HOUSEHOLD INCOME'];
	return runArrayTest(currencyArray, value);
}

let testForAverages = function(value){
	let averageArray = ['AVERAGE NUMBER', 'RATIO OF'];
	return runArrayTest(averageArray, value);
}


let _valueConversion = function(label, value) {
	//get metric text
	let label_desc = DESCRIPTION_LOOKUP[label] === undefined ? '' : DESCRIPTION_LOOKUP[label];
	//test for empty value
	if (value === undefined || value === null || value === '') {
		return 'Insuff. Data';
	}

	// console.log(label, value)
	if ( testForPercent(label_desc) ){
		//convert number to a percent
		return toPercent(value);

	} else if ( testForCurrency(label_desc) ) {
		//convert number to a percent
		return toCurrency(value);

	} else if ( testForAverages(label_desc) ) {
		//convert number to a fixed decimal
		return value = Number(value).toFixed(1);
				
	} else {
		//return number that might have commas and round down
		value = Math.floor(value)
		value = value.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,');
		// console.log(value)
		return value;
	}
};

/* LAYER STYLE FUNCTIONS */
let setInitialStyle = function(){
	return {
		opacity: 0.6,
		color: 'rgb(0,0,0)',
		dashArray: '',
		lineCap: 'butt',
		lineJoin: 'miter',
		weight: 1.0,
		fillOpacity: 0.6,
		fillColor: '#333333'
	}
}

let setMetricStyle = function(feature, metric, palette){
	// console.log(metric)
	return {
		color: 'rgb(0,0,0)',
		dashArray: '',
		lineCap: 'butt',
		lineJoin: 'miter',
		weight: 1.0,
		opacity: myStrokeOpacity(feature, metric),
		fillOpacity: myFillOpacity(feature, metric),
		fillColor: myFillColor(feature, metric, palette)
	}
} 

let myFillOpacity = function(feature, sent_props) {
	let { value } = sent_props;
	let x = feature.properties[value];
	if (x == null) {
		return 0.1;
	} else {
		return 0.7;
	}
}

let myStrokeOpacity = function(feature, sent_props) {
	let { value } = sent_props;
	let x = feature.properties[value];
	if (x == null) {
		return 0.1;
	} else {
		return 0.6;
	}
}

let selectColorValue = function(_x, _br, _max, _pal){
	return _x >= _max
				? _pal[4]
				: _x >= _br[3]
					? _pal[3]
					: _x >= _br[2]
						? _pal[2]
						: _x >= _br[1]
							? _pal[1]
							: _pal[0];
}
let myFillColor = function(feature, sent_props, chosenPalette) {
	// console.log(chosenPalette)
	let { breaks, max, value } = sent_props;
	let metric_value = feature.properties[value];
	// let metric_type = sent_props.value;
	//get values, break into an array of numbers and cleanup a touch
	breaks = breaks.split(',').map(function(elem, index) {
		return parseFloat(Math.round(elem * 100) / 100).toFixed(5);
	});
	
	if (metric_value === null) {
		return '#999999';
	} else {
		return selectColorValue(metric_value, breaks, max, chosenPalette);
	}
}

/* POPUP FUNCTIONS */
let getPopupContent = function(feature, metric, preferredLanguage) {
	// console.log(metric)
	let _location = toTitleCase(feature.properties['LABEL'].substr(2, 20));
	let _location_label = (preferredLanguage === 'en' ? 'LOCATION' : 'LOCALIZAÇÃO');
	let _content = '<p><b>' + _location_label +': </b>' + _location;
	let _value = feature.properties[metric.value];
	if (metric.value.length > 1){
		_content += '<br/><b>'+(metric.label).toUpperCase() +': </b>'+ _valueConversion(metric.value, _value) +'</p>';
	} else {
		_content += '</p>';
	}
	return  _content;
}

let highlightFeature = function(e) {
	let highlightLayer = e.target;
	highlightLayer.openPopup();
	//there was previous code to highlight on click
	//or highlight on hover...
}


/* EXPORTED FUNCTIONS */
export function updateKey(){
	return Math.random()
}

export function set_style(feature, metric, palette) {
	let newStyle = {}
	if (metric.value.length <= 1){
		newStyle = setInitialStyle()
	} else {
		newStyle = setMetricStyle(feature, metric, palette)
	}
	return newStyle
}

export function basic_popup(feature, layer, metric, preferredLanguage ) {
	layer.on({
		click: highlightFeature
	});
	// console.log(feature)
	let popupContent = getPopupContent(feature, metric, preferredLanguage);
	layer.bindPopup(popupContent);
}

export const getColorPalette = function(palette_type) {
	// console.log(metric)
	if (palette_type === "sequ"){
		// get number of colorSchemes
		let num_schemes = Object.keys(COLOR_SCHEMES.sequential).length
		// use schemes to randomly select within the given objects
		let rndm_select = Math.floor(Math.random() * num_schemes) + 1;
		return COLOR_SCHEMES.sequential[rndm_select]
	} else if (palette_type === "diver"){
		// get number of colorSchemes
		let num_schemes = Object.keys(COLOR_SCHEMES.diverging).length
		// use schemes to randomly select within the given objects
		let rndm_select = Math.floor(Math.random() * num_schemes) + 1;
		return COLOR_SCHEMES.diverging[rndm_select]
	} else if (palette_type === "quant"){
		// get number of colorSchemes
		let num_schemes = Object.keys(COLOR_SCHEMES.qualitativeSchemes).length
		// use schemes to randomly select within the given objects
		let rndm_select = Math.floor(Math.random() * num_schemes) + 1;
		console.log(rndm_select)
		return COLOR_SCHEMES.qualitativeSchemes[rndm_select]
	} else {
		return []
	}
} 

export function getDescription(preferredLanguage, val) {
	return (preferredLanguage === 'en' ? DESCRIPTION_LOOKUP[val] : DESCRIPTION_LOOKUP_PR[val]);
}

export function legendHelper(preferredLanguage, min, max, type, label) {
	let lkp_val = (preferredLanguage === 'en' ? LEGEND_LOOKUP[type] : LEGEND_LOOKUP_PR[type]);
	// console.log(lkp_val)
	if (type === undefined){
		return []
	} else if (type === "none"){
		return [ lkp_val[0] + " " + _valueConversion(label, min), lkp_val[1] + " " + _valueConversion(label, max) ]
	} else {	
		return [ lkp_val[0], lkp_val[1] ] 
	}
}



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