import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApiConnections } from '@/redux/apiConnections';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (__, thunkApi) => {
    try {
      const response = await privateApiConnections.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      // Для проверки прерывания http - запроса, при размонтировании компонента
      // await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await privateApiConnections.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await privateApiConnections.delete(
        `/contacts/${contactId}`,
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, contact }, thunkApi) => {
    try {
      const response = await privateApiConnections.patch(
        `/contacts/${contactId}`,
        contact,
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
