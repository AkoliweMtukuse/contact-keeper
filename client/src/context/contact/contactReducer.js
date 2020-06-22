import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_CONTACT,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};
