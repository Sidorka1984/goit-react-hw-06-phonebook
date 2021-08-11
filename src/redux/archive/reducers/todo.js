import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "../actions/todo";

const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [contactsActions.addContact]: (state, { payload }) => [...state, payload],
    [contactsActions.onDelete]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  }
);

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});
export default combineReducers({ items, filter });

// import { ADD_CONTACT, DELETE_CONTACT } from "../types";
// const initialState = [
// { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// { id: "id-3", name: "Eden Clements", number: "645-17-79" },
// { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
//
// const todoReducer = (state = initialState, action) => {
// switch (action.type) {
// case ADD_CONTACT:
// return [...state, action.payload];
// case DELETE_CONTACT:
// return state.filter((todo) => todo.id !== action.payload);
//
// default:
// return state;
// }
// };
// export default todoReducer;
//
