// import * as _ from "lodash";
import { setCache, getCache } from "utils/cache_utils";

function filterEventsByMetric(state, metric) {
	// console.log(state)
	// console.log(metric)
	let newState = (metric.value === 'All' ? getCache("chapaEvents") :
		getCache("chapaEvents").filter( evt => {
			// console.log(evt.eventcategory, metric.value, evt.eventcategory.toUpperCase() === metric.value.toUpperCase())
			return evt.eventcategory.toUpperCase() === metric.value.toUpperCase()
		})
	);
	// console.log(newState)
	return newState
}

function addNewEvent( state, newEvent ){
	let newEventState = [...state, newEvent ]; 
	
	setCache("chapaEvents", newEventState)
	// console.log( newEvent )
	return newEventState;
}

// let newState;
export default function (state = [], {type, payload}) {
	// console.log('action called', action);
	// if ( getCache("chapaEvents") ){
		// console.log('getting chapa events')
		// console.log(type, payload)
		// state = getCache("chapaEvents")
	// }
	// console.log(state)
	switch (type) {
		case "NEW_CHAPA_EVENT":		
			// return newState;
			return addNewEvent( state, payload );
		case "ALL_CHAPA_EVENTS":
			// console.log(payload)
			setCache("chapaEvents", payload)
			return payload;
		case "FILTER_EVENTS_BY_METRIC":
			// console.log('filtering metrics')
			return filterEventsByMetric(state, payload)
		default:
			return state;
	}
}
