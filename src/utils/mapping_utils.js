import { COLOR_SCHEMES, DESCRIPTION_LOOKUP, DESCRIPTION_LOOKUP_PR, LEGEND_LOOKUP, LEGEND_LOOKUP_PR }from "constants/lookup_variables";

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

let _valueConversion = function(label, value) {
	let tempLabel = DESCRIPTION_LOOKUP[label] === undefined ? '' : DESCRIPTION_LOOKUP[label];
	//get metric text
	// if contains   , "poverty rate,", "", "% of Total", , projected change
	if (
		tempLabel.indexOf('Growth') !== -1 ||
		tempLabel.indexOf('Poverty Rate') !== -1 ||
		tempLabel.indexOf('Percent') !== -1 ||
		tempLabel.indexOf('%') !== -1
	) {
		//convert number depending on type
		if (value === 0 || value === null || value === '') {
			return 'Insuff. Data';
		} else {
			return toPercent(value);
		}
	} else if (
		tempLabel.indexOf('Wage') !== -1 ||
		tempLabel.indexOf('Earning') !== -1 ||
		tempLabel.indexOf('Household Income') !== -1
	) {
		if (value === 0 || value === null || value === '') {
			return 'Insuff. Data';
		} else {
			return toCurrency(value);
		}
	} else {
		value = Math.floor(value);
		value = value.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,');
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
	// console.log(sent_props)
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
let getPopupContent = function(feature, metric) {
	// console.log(metric)
	let _location = toTitleCase(feature.properties['LABEL'].substr(2, 20));
	let _content = '<p><b>LOCATION: </b>' + _location;
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

export function basic_popup(feature, layer, metric ) {
	layer.on({
		click: highlightFeature
	});
	// console.log(feature)
	let popupContent = getPopupContent(feature, metric);
	layer.bindPopup(popupContent);
}

export const getColorScheme = function(metric) {
	// console.log(metric)
	if (metric.value === ""){
		return null
	} else if (metric.palette === "sequ"){
		// get number of colorSchemes
		let num_schemes = Object.keys(COLOR_SCHEMES.sequential).length
		// use schemes to randomly select within the given objects
		let rndm_select = Math.floor(Math.random() * num_schemes) + 1;
		return COLOR_SCHEMES.sequential[rndm_select]
	} else if (metric.palette === "diver"){
		// get number of colorSchemes
		let num_schemes = Object.keys(COLOR_SCHEMES.diverging).length
		// use schemes to randomly select within the given objects
		let rndm_select = Math.floor(Math.random() * num_schemes) + 1;
		return COLOR_SCHEMES.diverging[rndm_select]
	} else {
		// get number of colorSchemes
		let num_schemes = Object.keys(COLOR_SCHEMES.qualitativeSchemes).length
		// use schemes to randomly select within the given objects
		let rndm_select = Math.floor(Math.random() * num_schemes) + 1;
		console.log(rndm_select)
		return COLOR_SCHEMES.qualitativeSchemes[rndm_select]
	}
}

export function getDescription(preferredLanguage, val) {
	return (preferredLanguage === 'en' ? DESCRIPTION_LOOKUP[val] : DESCRIPTION_LOOKUP_PR[val]);
}

export function legendHelper(preferredLanguage, min, max, type) {
	let lkp_val = (preferredLanguage === 'en' ? LEGEND_LOOKUP[type] : LEGEND_LOOKUP_PR[type]);
	// console.log(lkp_val)
	if (type === undefined){
		return []
	} else if (type === "none"){
		return [ lkp_val[0] + " " + min, lkp_val[1] + " " + max ]
	} else {	
		return [ lkp_val[0], lkp_val[1] ] 
	}
}

// function popupLocationPR(label) {
// 	return (
// 		'<p><b>LOCALIZAÇÃO: </b>' + toTitleCase(label.substr(2, 20)) + '</p>'
// 	);
// }
// export function basic_popupPR(feature, layer) {
// 	layer.on({
// 		click: highlightFeature
// 	});
// 	let popupContent = popupLocationPR(feature.properties['LABEL']);
// 	layer.bindPopup(popupContent);
// }


/*
let nonPercentArray = 
[
	'AGE',
	'ASSAULTO_IMM_VIC', 
	'BARULHO_IMM_VIC', 
	'BLDG_QLTY', 
	'DROGA_IMM_VIC',
	'FUNK_IMM_VIC',
	'LIXO_IMM_VIC',
	'NADA_IMM_VIC',
	'NUM_FAM_LOT',
	'NUM_FLR',
	'NUM_PPL_HSHD',
	'NUM_SCH_AG',
	'NUM_YR_HSE',
	'NUM_YR_SP'
];
/*
let getTextDisplay = function(columnLookup, layerAttributes){
	if (columnLookup === 'INCOME') {
		return toCurrency(
			layerAttributes
		);
	} else if ($.inArray(columnLookup, nonPercentArray) >= 0) {
		if (layerAttributes) {
			return parseFloat(
				layerAttributes
			).toFixed(1);
		} else {
			return layerAttributes;
		}
	} else {
		if (layerAttributes) {
			return toPercent(
				layerAttributes
			);
		} else {
			return layerAttributes;
		}
	}
}*/