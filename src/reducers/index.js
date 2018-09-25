import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  tasks: tasksReducer,
  isLoading: loadingReducer
});
