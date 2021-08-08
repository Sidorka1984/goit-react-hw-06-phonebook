import { v4 as uuidv4 } from "uuid";
import { ADD_CONTACT, DELETE_CONTACT, VALUES_FILTER } from "../types";

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});
export const onDelete = (Id) => ({
  type: DELETE_CONTACT,
  payload: Id,
});
export const veluesFilter = (value) => ({
  type: VALUES_FILTER,
  payload: value,
});
