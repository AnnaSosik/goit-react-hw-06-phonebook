// Returns the list of contacts from the state
export const getContacts = state => state.contacts.items;

// Returns the current filter from the state
export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state); // Gets the list of contacts
  const filter = getFilter(state); // Gets the current filter
  const normalizedFilter = filter.toLowerCase(); // Converts the filter to lower case


  // Filters contacts to return only those whose names contain the filter substring (in lower case)
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
