import React from 'react';
import T from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => (
  <ul className={styles.List}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.List_item}>
        <p>
          <span>Name :</span> {contact.name}
        </p>
        <p className={styles.List_number}>
          <span>Number :</span> {contact.number}
        </p>
        <button
          type="button"
          onClick={() => removeContact(contact.id)}
          className={styles.Button}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string,
      number: T.string,
    }),
  ).isRequired,

  removeContact: T.func.isRequired,
};

export default ContactList;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import ContactListItem from './ContactListItem';
// import contactsSelectors from '../../redux/contacts/contactsSelectors';

// // eslint-disable-next-line react/prefer-stateless-function
// class ContactList extends Component {
//   render() {
//     const { contacts = [] } = this.props;
//     return (
//       <ul>
//         {contacts.map(({ id }) => (
//           <ContactListItem key={id} id={id} />
//         ))}
//       </ul>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     contacts: contactsSelectors.getFilteredContact(state),
//   };
// };

// export default connect(mapStateToProps)(ContactList);
