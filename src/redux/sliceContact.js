import { createSlice, nanoid } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Anthony Kiedis', number: '459-12-56' },
    { id: 'id-2', name: 'Chad Smith', number: '645-17-79' },
    { id: 'id-3', name: 'Damiano David', number: '645-17-79' },
  ],

  reducers: {
    add(state, action) {
      state.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },

    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = sliceContact.actions;
