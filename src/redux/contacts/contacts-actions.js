// import types from './contacts-types';
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/change');

export default { addContact, deleteContact, changeFilter };

// const addContact = (name, number) => ({
//   type: types.ADD,

//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
//   });

//   const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
//   });
