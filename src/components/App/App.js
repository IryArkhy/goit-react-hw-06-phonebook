import React, { useState, useEffect, useReducer, useMemo } from 'react';
import shortid from 'shortid';
import localStorage from '../../localStorage';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import ContactList from './ContactList';

const phoneBookReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT':
      return [...state, payload.contact];

    case 'REMOVE_CONTACT':
      return state.filter(contact => contact.id !== payload.id);

    case 'SET_ALL_CONTACTS':
      return payload.contacts;

    default:
      return state;
  }
};
export default function App() {
  const [contacts, dispatch] = useReducer(phoneBookReducer, []);

  useEffect(() => {
    const contacts = localStorage.getLocalStorage('contacts');
    if (contacts) {
      dispatch({
        type: 'SET_ALL_CONTACTS',
        payload: {
          contacts,
        },
      });
    }
  }, []);

  useEffect(() => {
    localStorage.saveLocalStorage('contacts', contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        contact,
      },
    });

    if (!contact.name || !contact.number) {
      alert('Please input name and number');
      return;
    }

    const findUniqueName = contacts.find(user => user.name === contact.name);

    if (findUniqueName) {
      alert(`${contact.name} is alredy in contacts`);
      return;
    }
  };

  const removeContact = id => {
    dispatch({
      type: 'REMOVE_CONTACT',
      payload: {
        id,
      },
    });
  };

  const [filter, setFilter] = useState('');

  const onChangeFilter = e => setFilter(e.target.value);

  const contactsFilter = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [contacts, filter]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSave={addContact} />
      <h2>Contacts</h2>
      <ContactFilter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={contactsFilter} removeContact={removeContact} />
    </div>
  );
}
