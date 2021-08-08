import { ADD_CONTACT, DELETE_CONTACT } from "../types";
const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};
export default todoReducer;
