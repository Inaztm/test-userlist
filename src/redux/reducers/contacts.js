import { SELECT_CONTACT, FETCH_CONTACTS } from "../actionTypes";

const initialState = {
  all: [],
  selected: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        all: action.payload.contacts
      };

    case SELECT_CONTACT:
      return {
        ...state,
        selected: action.payload.contact
      };

    default:
      return state;
  }
}
