import _ from 'lodash';
import { createSelector } from 'reselect';
import formatName from './helpers/formatName.js';

const getContacts = state => state.contacts.all;
const getKeyword = state => state.contacts.keyword;

const dataToSearch = ({ general, job, address, contact }) => {
  return [
    formatName(general.firstName, general.lastName, ' '),
    job.company,
    job.title,
    contact.email,
    contact.phone,
    address.country,
    address.city,
    address.street,
    address.zipCode
  ];
}

export const getContactsBySearch = createSelector(
	[getContacts, getKeyword],
	(contacts, keyword) => {
		if (keyword.length < 1) return contacts;

	    let reg = new RegExp(_.escapeRegExp(keyword), 'i');
	    let isMatch = searchData => reg.test( dataToSearch(searchData) );

	    return _.filter(contacts, isMatch);
	}
)
