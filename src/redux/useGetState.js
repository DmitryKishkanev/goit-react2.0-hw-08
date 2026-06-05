import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
  selectError,
} from './contacts/selectors';
import { selectFilter, selectFilteredContacts } from './filters/selectors';
import {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from './auth/selectors';

export const useGetState = () => {
  return {
    contacts: useSelector(selectContacts),
    isLoading: useSelector(selectLoading),
    error: useSelector(selectError),
    filter: useSelector(selectFilter),
    filteredContacts: useSelector(selectFilteredContacts),
    userName: useSelector(selectUserName),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
