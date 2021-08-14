import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
import { combineReducers } from "redux";
import initialContacts from "../../Data/contacts.json";

const initialState = {
  contacts:
    JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts,
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, { payload }) => [payload, ...state],
    deleteContact: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState.filter,
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
});

const rootReduser = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;

export default rootReduser;
