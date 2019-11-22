import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import reducer from "./reducers";
import middleware from "./middleWare";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
