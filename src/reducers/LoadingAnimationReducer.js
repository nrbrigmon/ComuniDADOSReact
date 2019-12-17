import getSchemas from "schemas/initialStates"

export default function(state = getSchemas.loadAnimation, { type } ) {
    switch (type) {
        case "START_LOADING_ANIMATION":
            return true;
        case "STOP_LOADING_ANIMATION":
            return false;
        default:
            return state;
    }
}