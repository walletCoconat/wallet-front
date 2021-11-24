import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { walletApi } from '../../services';

axios.defaults.baseURL = 'https://wallet-coconat.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4040';

export const register = createAsyncThunk('auth/register', async dataUser => {
  const { data } = await axios.post('/api/user/signup', dataUser);
  // const data = await walletApi.login(dataUser);

  return data;
});

export const login = createAsyncThunk('auth/login', async dataUser => {
  const { data } = await walletApi.login(dataUser);

  return data;
});

export const verify = createAsyncThunk('auth/verify', async emailAddress => {
  const { data } = await axios.post('/api/user/verify', emailAddress);
  console.log(data);
  return data;
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  await walletApi.logout();
});

export const getCurrentUSer = createAsyncThunk(
  'auth/fetchByToken',
  async (_, { rejectWithValue }) => {
    const res = await walletApi.getCurrentUser();

    return res.data;
  },
);
