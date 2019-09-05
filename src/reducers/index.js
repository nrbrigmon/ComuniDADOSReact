import { combineReducers } from "redux";
import * as shortid from "shortid";

import UserReducer from "./UserReducer";

const getRandomId = (state = [], action) => {
  // console.log('action called', action);
  switch (action.type) {
    case "FETCH_RANDOM_ID":
      return shortid.generate();
    default:
      return state;
  }
};

export default combineReducers({
  randomId: getRandomId,
  user: UserReducer
});
