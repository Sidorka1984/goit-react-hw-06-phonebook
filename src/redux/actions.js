import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const changeFilter = createAction("todo/Change");
export const deleteContact = createAction("todo/Delete");
export const addContact = createAction("todo/Save", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
