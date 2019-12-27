export const fetchRandomId = () => {
  const action = {
    type: "FETCH_RANDOM_ID"
  };
  return action;
};

export const startLoadingAnimation = () => {
  const action = {
    type: "START_LOADING_ANIMATION"
  };
  return action;
};

export const stopLoadingAnimation = () => {
  const action = {
    type: "STOP_LOADING_ANIMATION"
  };
  return action;
};

export const closeToast = () => {
  const action ={
    type: "CLOSE_TOAST"
  }
  return action;
}