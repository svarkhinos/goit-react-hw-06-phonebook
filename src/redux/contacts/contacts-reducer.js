import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';
import actions from './contacts-actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    if (state.find(contact => contact.name === payload.name)) {
      toast(`${payload.name}is already in contacts`);
      return state;
    } else {
      return [...state, payload];
    }
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case [actions.changeFilter]:
//       return payload;

//     default:
//       return state;
//   }
// };
