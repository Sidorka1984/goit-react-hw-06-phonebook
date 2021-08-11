// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import { rootReduser } from "../reducers";
import todo from "../slices/todo";

const rootReduser = {
  todo,
};

// const store = createStore(rootReduser, devToolsEnhancer());
const store = configureStore({
  reducer: rootReduser,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
