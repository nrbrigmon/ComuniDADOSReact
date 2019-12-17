import { MAP_CENTER_COORDS } from "constants/mapping";

export default {
	randomId: "32432",
	mapLayers: {
		helio: {},
		sao: {},
		survey: {},
		type: "districts",
		baseMapOpacity: 0.5,
		colorPalette: [],
		baseMapSelection: 0,
		metric: {
			value: '',
			label: '',
			labelPR: ''
		}
	},
	loadAnimation: false,
	preferredLanguage: 'en',
	metricSelection: {	
		id: ""
		,row: -1
		,value:""
		,label:""
	},
	userInfo: {
		user_id: '',
		username: '',
		password: '',
		email: '',
		token: '',
		err: false,
		errMsg: ''
	},
	userLocation: {
		show: false,
		lat: null,
		long: null,
		accurMeters: 0,
		err: false,
		errMsg: ''
	},
	surveyMap: {
		mapCenterCoordinates: MAP_CENTER_COORDS,
		mapZoom: 15
	},
	// chapaEvents: {
	// 	eventid: '',
	// 	eventname: '',
	// 	eventcategory: '',
	// 	eventdescription: '',
	// 	eventlatitude: '',
	// 	eventlongitude: '',
	// 	createdby: '',
	// 	createddate: ''
	// },
	popover: {
		open: false,
		anchor: null
	}
};
