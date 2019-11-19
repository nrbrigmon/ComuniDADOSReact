// import * as _ from "lodash";
import { setCache, getCache } from "utils/cache_utils";

function filterEventsByMetric(state, metric) {
	console.log(state)
		let newState = getCache("chapaEvents").filter( evt => {
			// console.log(evt.eventcategory, metric.value, evt.eventcategory.toUpperCase() === metric.value.toUpperCase())
			return evt.eventcategory.toUpperCase() === metric.value.toUpperCase()
		})
		// console.log(newState)
		return newState
}

function addNewEvent( state, newEvent ){
	// console.log(state)
	// console.log( newEvent )
	return [...state, newEvent ]
}

let newState;
export default function (state = [], {type, payload}) {
		// console.log('action called', action);
		// if ( getCache("chapaEvents") ){
		// 	state = getCache("chapaEvents")
		// }
		// console.log(state)
		switch (type) {
				case "NEW_CHAPA_EVENT":
						addNewEvent( state, payload )
						// setCache("chapaEvents", newState)
						// return newState;
						return state;
				case "ALL_CHAPA_EVENTS":
					// console.log(payload)
						setCache("chapaEvents", payload)
						return payload;
				case "FILTER_EVENTS_BY_METRIC":
						return filterEventsByMetric(state, payload)
				default:
						return state;
		}
}
