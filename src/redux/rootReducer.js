import { combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducer';

export default combineReducers({
  contacts: contactsReducer,
});
