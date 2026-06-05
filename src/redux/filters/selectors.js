import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '@/redux/contacts/selectors';

export const selectFilter = state => state.filters.name;

// Мемоизируем через createSelector
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const result = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return result.length > 0 ? result : contacts;
  },
);
