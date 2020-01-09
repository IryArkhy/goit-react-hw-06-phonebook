import React from 'react';
import T from 'prop-types';

const ContactFilter = ({ value, onChange }) => (
  <label>
    Filter contacts
    <input type="text" value={value} onChange={onChange} />
  </label>
);

ContactFilter.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};
export default ContactFilter;

// import React from 'react';
// import { connect } from 'react-redux';
// import contactsSelectors from '../../redux/contacts/contactsSelectors';
// import * as contactActions from '../../redux/contacts/contactsActions';

// const ContactsFilter = ({ value, onChangeFilter }) => (
//   <label>
//     Filter contacts
//     <input
//       type="text"
//       value={value}
//       onChange={e => onChangeFilter(e.target.value)}
//     />
//   </label>
// );

// const mapStateToProps = state => {
//   return {
//     value: contactsSelectors.getFilter(state),
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onChangeFilter: value => dispatch(contactActions.changeFilter(value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
