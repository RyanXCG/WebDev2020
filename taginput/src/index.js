import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import tagReducer from "./reducers/tagReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const reducers = combineReducers({ tags: tagReducer });

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
