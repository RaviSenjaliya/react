import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import RootReduser from "../Reduser/RootReduser";
import rootSaga from "../saga/rootSaga";

// const middleware = [thunk];

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(RootReduser, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
