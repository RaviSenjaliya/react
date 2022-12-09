import { createStore } from "redux";
import CounterReduser from "../Reduser/CounterReduser";

const store = createStore(CounterReduser);

export default store;
