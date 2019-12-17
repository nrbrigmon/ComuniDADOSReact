import axios from 'axios';
import { API_CONFIG } from "constants/axios_config";

export const postNewEvent = (event) => async dispatch => {
	
	API_CONFIG.data = event;
	const res = await axios.post(process.env.REACT_APP_API_URL+'api/chapa_event/', API_CONFIG);	
	console.log(res)

	dispatch({ type: 'NEW_CHAPA_EVENT', payload: res.data.data });
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