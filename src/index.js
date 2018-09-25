import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import rootReducer from "./reducers";
import { rootSaga } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>,
  document.getElementById("root")
);
