import React, { useState, useEffect, useReducer, useMemo } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import localStorage from '../../localStorage';
import ContactForm from '../ContactForm';
import ContactFilter from '../ContactFilter';
import ContactList from '../ContactList';
import styles from './App.module.css';

toast.configure();

const Message = {
  NOT_COMPLETE_DATA: 'Please, enter needed information!',
  REPETED_NAME: 'This name already exists in your phonebook',
  SUCCESSFULL: 'Success!',
};

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
    localStorage.saveToLocalStorage('contacts', contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (!contact.name || !contact.number) {
      toast.error(Message.NOT_COMPLETE_DATA);
      return;
    }
    const isNameUnique = contacts.find(user => user.name === contact.name);

    if (isNameUnique) {
      toast.warn(Message.REPETED_NAME);
      return;
    }

    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        contact,
      },
    });
    toast.success(Message.SUCCESSFULL);
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
    <div className={styles.App}>
      <h1>Phonebook</h1>
      <main>
        <ContactForm onSave={addContact} />
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={onChangeFilter} />
        <ContactList contacts={contactsFilter} removeContact={removeContact} />
      </main>
    </div>
  );
}
