import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReduser from "../Reduser/RootReduser";

const middleware = [thunk];
const store = createStore(RootReduser, applyMiddleware(...middleware));

export default store;
