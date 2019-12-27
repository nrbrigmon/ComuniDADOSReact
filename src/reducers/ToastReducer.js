import getSchemas from "schemas/initialStates"

export default function(state = getSchemas.toast, { type, payload}) {
    switch (type){
        case "SEND_TOAST_SUCCESS":
            return { display: true, message: payload, type: "success" }
        case "SEND_TOAST_INFO":
            return { display: true, message: payload, type: "info" }
        case "SEND_TOAST_ERROR":
            return { display: true, message: payload, type: "error" }
        case "CLOSE_TOAST":
            return { display: false, message: '', type: '' }
        default:
            return state;
    }
}