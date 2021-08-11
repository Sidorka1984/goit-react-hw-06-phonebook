import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const changeFilter = createAction("items/Change");
export const deleteContact = createAction("items/Delete");
export const addContact = createAction("items/Save", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
