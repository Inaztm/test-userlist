import { SELECT_CONTACT, FETCH_CONTACTS } from "./actionTypes";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function fetchContactsSuccess(contacts) {
  return {
    type: FETCH_CONTACTS,
    payload: {
      contacts
    }
  }
}

export function fetchContacts() {
  return dispatch => {
    fetch('clients.json')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchContactsSuccess(json))
      })
  }
}

export function selectContact(contact) {
  return {
  	type: SELECT_CONTACT,
  	payload: {
  		contact
  	}
  }
}
