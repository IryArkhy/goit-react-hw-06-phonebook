import { combineReducers } from 'redux';
import * as contactTypes from './contactTypes';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case contactTypes.ADD_CONTACT:
      return [...state, payload.contacts];

    case contactTypes.REMOVE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case contactTypes.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
