import { SELECT_CONTACT, FETCH_CONTACTS, SET_KEYWORD } from "../actionTypes";

const initialState = {
  all: [],
  selected: {},
  keyword: ''
}

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

    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword
      };

    default:
      return state;
  }
}
