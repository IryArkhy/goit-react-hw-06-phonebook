import { createSelector } from 'reselect';

const getContact = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilteredContact = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactById = (state, id) => {
  const contacts = getContact(state);
  return contacts.find(contact => contact.id === id);
};

export default {
  getContact,
  getFilter,
  getFilteredContact,
  getContactById,
};
