import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from './selectors';

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
