import axios from 'axios';

export const postNewEvent = (event) => async dispatch => {
	
	const res = await axios.post(process.env.REACT_APP_API_URL+'api/chapa_event/', event);	
	// console.log(res)

	dispatch({ type: 'NEW_CHAPA_EVENT', payload: res.data });
}

export const fetchAllEventsA = () => async dispatch => {

	const res = await axios.get('http://172.31.54.66:5000/api/chapa_event/');	
	// console.log('returnning all events')
	console.log(res)
	dispatch({ type: 'ALL_CHAPA_EVENTS', payload: res.data });

}
export const fetchAllEventsB = () => async dispatch => {

	const res = await axios.get('http://3.233.186.17:5000/api/chapa_event/');	
	// console.log('returnning all events')
	console.log(res)
	dispatch({ type: 'ALL_CHAPA_EVENTS', payload: res.data });

}

export const fetchAllEvents = () => async dispatch => {

	const res = await axios.get(process.env.REACT_APP_API_URL+'api/chapa_event/');	
	// console.log('returnning all events')
	dispatch({ type: 'ALL_CHAPA_EVENTS', payload: res.data });

}


export const selectEventCategory = (cat) => {
	const action = {
		type: "SELECT_EVENT_CATEGORY",
		payload: cat
	}
	return action
}

export const filterChapaEvents = (metric) => {
	const action = {
		type: "FILTER_EVENTS_BY_METRIC",
		payload: metric
	}
	return action
}