import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import reducers from "reducers";
import getSchemas from "schemas/initialStates";

const initialState = getSchemas;
const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App height={"100vh"} />
  </Provider>,
  document.getElementById("root")
);
