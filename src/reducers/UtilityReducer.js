import * as shortid from "shortid";

export default function(state = [], { type, payload }) {
  // console.log('action called', action);
  switch (type) {
    case "FETCH_RANDOM_ID":
      return shortid.generate();
    default:
      return state;
  }
}
