import { combineReducers } from "redux";
import userApiReducer from "./users-api";

const rootReducer = combineReducers({
  userApiReducer: userApiReducer,
});

export default rootReducer;
