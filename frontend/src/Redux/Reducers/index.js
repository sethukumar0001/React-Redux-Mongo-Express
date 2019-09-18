import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReucer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
