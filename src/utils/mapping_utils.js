import { COLOR_SCHEMES, DESCRIPTION_LOOKUP, DESCRIPTION_LOOKUP_PR, LEGEND_LOOKUP, LEGEND_LOOKUP_PR }from "constants/lookup_variables";
import { district_metrics } from "constants/metrics";
import { getCache } from "utils/cache_utils";
import * as turf from '@turf/turf'
import L from 'leaflet'

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
let myFillColor = function(feature, sent_props, chosen_palette) {
	// console.log(chosen_palette)
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
		return selectColorValue(metric_value, breaks, max, chosen_palette);
	}
}

/* POPUP FUNCTIONS */
let getPopupContent = function(feature, metric, pref_lang) {
	// console.log(metric)
	let _location = toTitleCase(feature.properties['LABEL'].substr(2, 20));
	let _location_label = (pref_lang === 'en' ? 'LOCATION' : 'LOCALIZAÇÃO');
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

export function basic_popup(feature, layer, metric, pref_lang ) {
	layer.on({
		click: highlightFeature
	});
	// console.log(feature)
	let popupContent = getPopupContent(feature, metric, pref_lang);
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

export function getDescription(pref_lang, val) {
	return (pref_lang === 'en' ? DESCRIPTION_LOOKUP[val] : DESCRIPTION_LOOKUP_PR[val]);
}

export function legendHelper(pref_lang, min, max, type, label) {
	let lkp_val = (pref_lang === 'en' ? LEGEND_LOOKUP[type] : LEGEND_LOOKUP_PR[type]);
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

/**
 * @param text string representing category of marker
 * @returns leaflet icon object
 */
export const getMarkerIcon = (marker_category) => {
	// console.log(marker_category)
	//source: http://icon-park.com/icon/simple-location-map-pin-icon2-orange-free-vector-data/
	let icon_png = (
		marker_category === 'Noise'		? "../icons/blue_pin.png" : 
		marker_category === 'Pollution' ? "../icons/brown_pin.png" : 
		marker_category === 'Energy' 	? "../icons/green_pin.png" : 
		marker_category === 'Safety' 	? "../icons/yellow_pin.png" : 
		marker_category === 'Other' 	? "../icons/grey_pin.png" : 
										"../icons/turquoise_pin.png" )
	return L.icon({
		iconUrl: icon_png,
		iconSize: [24,32], //width, height
		iconAnchor: [13, 44],
		popupAnchor: [0,-34],
		shadowUrl: null,
		shadowSize: null,
		shadowAnchor: null
	});
}


/**
 * @param array of arrays with latitude and longitude decimal values
 * @returns centroid array pf bounding box around points
 */
const getCentroidFromPoints = (coord_array) => {

	//if there is only one point, return single point
	if (coord_array.length === 1){
		// console.log(coord_array[0].length )
		return coord_array[0]
	} else {
		let bboxPolygon = getBoundingBox(coord_array);
		let centroid = turf.centroid(bboxPolygon);
		return centroid.geometry.coordinates;
	}
}


/**
 * @param array of arrays with latitude and longitude decimal values
 * @returns polygon representing bounding box
 */
const getBoundingBox = (coord_array) => {
	console.log(coord_array)
	//if there is only one point, duplicate point
	if (coord_array.length === 1){
		return coord_array[0]
	}
	let line = turf.lineString(coord_array);
	let bbox = turf.bbox(line);

	return turf.bboxPolygon(bbox);
	
}

/**
 * @param {array} array_of_obj marker objects in array
 * @returns {array} array of values of points only
 */
const convertMarkersToArray = (array_of_obj) => {
	console.log(array_of_obj)
	let singleArray = array_of_obj.map( item => {
		return [ item.eventlatitude, item.eventlongitude]
	})
	// console.log(array_of_obj)
	// console.log(singleArray)
	return singleArray
}

/**
 * 
 * @param {string} selection category of marker
 * @returns {array} filtered array
 */
export const filterSelectedMarkers = (selection) => {
	return (selection === 'All' ? getCache("chapaEvents") : 
		getCache("chapaEvents").filter( item => {
			return selection === item.eventcategory
		})
	)
}
/**
 * 
 * @param {string} selection category of marker
 * @returns {array} centroid array
 */
export const getCentroidFromSelection = (selectedMarkers) => {
	
	let convertedArray = convertMarkersToArray(selectedMarkers)
	// console.log(event_array
	
	return getCentroidFromPoints(convertedArray)
}

/**
 * 
 * @param {string} selection category of marker
 * @returns {Object} Leaflet object representing map bounds
 */
export const getEventBoundsFromSelection = (selectedMarkers) => {
	//get filtered selection
	let convertedArray = convertMarkersToArray(selectedMarkers)
	//get bounding box
	let bboxPolygon = getBoundingBox(convertedArray);
	//get nw and se corner of box
	let bboxCoords = turf.coordAll(bboxPolygon)
	console.log(bboxCoords)
	let corner_1 = L.latLng(bboxCoords[0][0], bboxCoords[0][1])
	let corner_2 = L.latLng(bboxCoords[2][0], bboxCoords[2][1])
	let bounds = L.latLngBounds(corner_1, corner_2);
	return bounds;
}