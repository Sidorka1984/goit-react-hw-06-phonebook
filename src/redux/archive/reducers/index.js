import { combineReducers } from "redux";
import filterReducer from "./filter";
import todoReducer from "./todo";

export const rootReduser = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
