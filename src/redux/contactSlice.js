import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Source phone contacts
const phoneContacts = {
  items: [
    { id: 'id-1', name: 'Steve Jobs', number: '459-12-56' },
    { id: 'id-2', name: 'Bill Gates', number: '443-89-12' },
    { id: 'id-3', name: 'Elon Musk', number: '645-17-79' },
    { id: 'id-4', name: 'Mark Zuckerberg', number: '227-91-26' },
  ],
};

// Creating a slice of contacts using createSlice
const contactsSlice = createSlice({
  name: 'contacts', // Name of slice contacts
  initialState: phoneContacts, // Initial state of contacts
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload); //Add a new contact to the contact list
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact }, // Preparing data for adding a contact with a unique identifier
      };
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1);
      // Deleting a contact from the contact list
    },
  },
});

// Exporting addContact and removeContact actions from a slice of contacts
export const { addContact, removeContact } = contactsSlice.actions;

// Creating a persistent reduser to save the state of contacts using redux-persist
export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
