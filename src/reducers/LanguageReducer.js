
import { setCache, getCache } from "utils/cache_utils";

export default function(state = [], { type, payload }) {
	// console.log('action called', action);
	if ( getCache("preferredLanguage") ){
		state = getCache("preferredLanguage")
	}
  switch (type) {
    case "SET_LANGUAGE":
			setCache("preferredLanguage", payload)
      return payload;
    default:
      return state;
  }
}