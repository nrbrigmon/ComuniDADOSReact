import * as _lkp from "constants/lookup_variables";

/* UTILITY FUNCTIONS*/
let toTitleCase = function(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

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

let setMetricStyle = function(feature, metric){
	return {
		color: 'rgb(0,0,0)',
		dashArray: '',
		lineCap: 'butt',
		lineJoin: 'miter',
		weight: 1.0,
		opacity: myStrokeOpacity(feature, metric),
		fillOpacity: myFillOpacity(feature, metric),
		fillColor: myFillColor(feature, metric)
	}
} 
// export function legendHelper(cue) {
// 	return _lkp.legendLookup[cue];
// }

// export function getDescription(val) {
// 	return _lkp.descriptionLookup[val];
// }

// export function getDescriptionPR(val) {
// 	return _lkp.descriptionLookupPR[val];
// }

export function highlightFeature(e) {
	var highlightLayer = e.target;
	highlightLayer.openPopup();
	//there was previous code to highlight on click
	//or highlight on hover...
}

export function updateKey(){
	return Math.random()
}

export function set_style(feature, metric) {
	let newStyle = {}
	if (metric.label.length <= 1){
		newStyle = setInitialStyle()
	} else {
		newStyle = setMetricStyle(feature, metric)
	}
	return newStyle
}

function getPopupContent(feature, metric) {
	let _location = toTitleCase(feature.properties['LABEL'].substr(2, 20));
	let _content = '<p><b>LOCATION: </b>' + _location + '</p>';
	let _value = feature.properties[metric.label];
	if (metric.label.length > 1){
		_content += '<p><b>'+metric.alias_name +': </b>'+ _value +'</p>';
	}
	return  _content;
}

// function popupLocationPR(label) {
// 	return (
// 		'<p><b>LOCALIZAÇÃO: </b>' + toTitleCase(label.substr(2, 20)) + '</p>'
// 	);
// }

export function basic_popup(feature, layer, metric ) {
	layer.on({
		click: highlightFeature
	});
	// console.log(feature)
	var popupContent = getPopupContent(feature, metric);
	layer.bindPopup(popupContent);
}

// export function basic_popupPR(feature, layer) {
// 	layer.on({
// 		click: highlightFeature
// 	});
// 	var popupContent = popupLocationPR(feature.properties['LABEL']);
// 	layer.bindPopup(popupContent);
// }


export function myFillOpacity(x) {
	// console.log(x)
	if (x == null) {
		return 0.1;
	} else {
		return 0.7;
	}
}

export function myStrokeOpacity(x) {
	if (x == null) {
		return 0.1;
	} else {
		return 0.6;
	}
}

let chosenPallete = ['#a6611a', '#dfc27d', '#f5f5f5', '#80cdc1', '#018571'];
export function myFillColor(feature, sent_props) {
	// console.log(sent_props);
	// console.log(feature);
	// debugger
	let { breaks, max, legend, label } = sent_props;
	let value = feature.properties[label];

	//get values, break into an array of numbers and cleanup a touch
	breaks = breaks.split(',').map(function(elem, index) {
		return parseFloat(Math.round(elem * 100) / 100).toFixed(5);
	});

	if (value === null) {
		return '#999999';
	} else {
		if (legend === 'diver') {
			return value >= max
				? chosenPallete[4]
				: value >= breaks[3]
					? chosenPallete[3]
					: value >= breaks[2]
						? chosenPallete[2]
						: value >= breaks[1]
							? chosenPallete[1]
							: chosenPallete[0];
		} else {
			return value > breaks[3]
				? chosenPallete[4]
				: value > breaks[2]
					? chosenPallete[3]
					: value > breaks[1]
						? chosenPallete[2]
						: value > breaks[0] ? chosenPallete[1] : chosenPallete[0];
		}
	}
}
/*
var toCurrency = function(num) {
	if (num == null) {
		return 'N/A';
	}
	var txt = parseFloat(num)
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
*/
/*
var toPercent = function(num) {
	var a = parseFloat(num * 100).toFixed(1);
	return a + '%';
};

var _valueConversion = function(label, value) {
	// console.log(label);
	var tempLabel = _lkp.descriptionLookup[label];
	//get metric text
	// if contains   , "poverty rate,", "", "% of Total", , projected change
	if (
		tempLabel.indexOf('Growth') !== -1 ||
		tempLabel.indexOf('Poverty Rate') !== -1 ||
		tempLabel.indexOf('Percent:') !== -1 ||
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
*/
/*
var nonPercentArray = 
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
var getTextDisplay = function(columnLookup, layerAttributes){
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