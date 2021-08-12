import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as actions from "./actions";

const todo = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ todo, filter });
