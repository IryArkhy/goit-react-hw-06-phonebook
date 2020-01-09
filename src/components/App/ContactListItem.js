// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as contactActions from '../../redux/contacts/contactsActions';
// import contactsSelectors from '../../redux/contacts/contactsSelectors';

// // eslint-disable-next-line react/prefer-stateless-function
// class ContactListItem extends Component {
//   render() {
//     const { text, onDelete } = this.props;

//     return (
//       <li>
//         <span>{text}</span>
//         <button onClick={onDelete}>Delete</button>
//       </li>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   const note = contactsSelectors.getContactById(state, ownProps.id);

//   return {
//     ...note,
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onDelete: () => dispatch(contactActions.remove(ownProps.id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
