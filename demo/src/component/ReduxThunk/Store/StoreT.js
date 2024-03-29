import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
import RootReduser from "../Reduser/RootReduser";
// import RootSaga from "../saga/RootSaga";

const middleware = [thunk];
const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

const store = createStore(
  RootReduser,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(RootSaga);

export default store;
