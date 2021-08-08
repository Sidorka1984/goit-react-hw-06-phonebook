import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReduser } from "../reducers";

const store = createStore(rootReduser, devToolsEnhancer());

export default store;
