import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { privateApiConnections, set, unset } from './apiConnections';

axios.defaults.baseURL = 'https://68dfdefa93207c4b4793043b.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await privateApiConnections.post(
        '/users/signup',
        credentials,
      );
      // Запись token для всех последующих операций
      set(data.token);
      // Сохраняем токен в localStorage
      // localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await privateApiConnections.post(
        '/users/login',
        credentials,
      );
      // Запись token для всех последующих операций
      set(data.token);
      // Сохраняем токен в localStorage
      // localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async (__, thunkAPI) => {
  try {
    await privateApiConnections.post('/users/logout');
    // Очищаем token после logOut
    unset();
    // Удаляем токен из localStorage
    // localStorage.removeItem('token');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.massage);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (__, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    set(persistedToken);
    try {
      const { data } = await privateApiConnections.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  },
);
