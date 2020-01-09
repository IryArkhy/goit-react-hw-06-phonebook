import shortid from 'shortid';
import * as contactTypes from './contactTypes';

export const add = ({ name, number }) => {
  return {
    type: contactTypes.ADD_CONTACT,
    payload: {
      contacts: {
        id: shortid.generate(),
        name,
        number,
      },
    },
  };
};

export const remove = id => {
  return {
    type: contactTypes.REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};

export const changeFilter = filter => {
  return {
    type: contactTypes.CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};
