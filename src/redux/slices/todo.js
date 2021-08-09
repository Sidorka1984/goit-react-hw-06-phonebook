import { createSlice } from "@reduxjs/toolkit";
// import { number, string } from "prop-types";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  reducers: {
    addContact: (state, action) => {
      state.push({
        id: uuidv4(),
        name: action.payload,
        number: action.payload.number,
      });
    },
    onDelete: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const { addContact, onDelete } = todoSlice.actions;
export default todoSlice.reducer;
