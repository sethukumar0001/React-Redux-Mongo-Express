import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReucer";
import addDataReducer from "./addDataReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  addData:addDataReducer
});
