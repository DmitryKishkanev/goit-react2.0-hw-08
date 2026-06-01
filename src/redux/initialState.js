// import initialContact from '@/contacts.json';

export const initialState = {
  contacts: {
    // items: initialContact,
    items: [],
    loading: false,
    error: null,
  },

  filters: {
    name: '',
  },

  auth: {
    user: { name: null, email: null },
    token: null,
    // isLoggedIn: !!localStorage.getItem('token'),
    isLoggedIn: null,
    isRefreshing: false,
  },
};
