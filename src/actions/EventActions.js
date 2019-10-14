import axios from 'axios';

export const postNewEvent = (event) => async dispatch => {
	
	const res = await axios.post('/api/chapa_event/', event);	
	// console.log(res)

	dispatch({ type: 'NEW_CHAPA_EVENT', payload: res.data });
}