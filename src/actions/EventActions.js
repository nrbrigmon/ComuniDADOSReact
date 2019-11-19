import axios from 'axios';

export const postNewEvent = (event) => async dispatch => {
	
	const res = await axios.post('/api/chapa_event/', event);	
	// console.log(res)

	dispatch({ type: 'NEW_CHAPA_EVENT', payload: res.data });
}


export const fetchAllEvents = () => async dispatch => {

	const res = await axios.get('/api/chapa_event/');	
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