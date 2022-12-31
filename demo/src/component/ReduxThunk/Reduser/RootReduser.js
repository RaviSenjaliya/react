import { combineReducers } from "redux";
import ReduserT from "./ReduserT";
import ApiReduser from "./ApiReduser";
import ReduserU2 from "./ReduserU2";

export default combineReducers({
  counter: ReduserT,
  user: ApiReduser,
  user2: ReduserU2,
});
