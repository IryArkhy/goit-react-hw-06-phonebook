import React, { useState, useRef } from 'react';
import shortid from 'shortid';
import T from 'prop-types';
import styles from './ContactForm.module.css';

export default function ContactForm({ onSave }) {
  const [name, setName] = useState('');
  const nameId = useRef(shortid.generate());

  const onChangeName = evt => {
    setName(evt.target.value);
  };

  const [number, setNumber] = useState('');
  const numberId = useRef(shortid.generate());
  const onChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const onSubmit = evt => {
    onSave({ name, number });
    evt.preventDefault();

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit} className={styles.Form}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeName}
        id={nameId.current}
      />
      <label>Phone number: </label>

      <input
        type="text"
        name="number"
        value={number}
        onChange={onChangeNumber}
        id={numberId.current}
      />
      <button type="submit" className={styles.Form_button}>
        Save contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: T.func.isRequired,
};

// class ContactForm extends Component {
//   state = {
//     text: '',
//   };

//   onChange = e => {
//     this.setState({ text: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     this.props.onSave(this.state.text);
//     this.setState({ text: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <input type="text" value={this.state.text} onChange={this.onChange} />
//         <button type="submit">Save contact</button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onSave: text => dispatch(contactActions.add(text)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactForm);
