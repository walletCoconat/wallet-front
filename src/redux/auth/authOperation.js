import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-coconat.herokuapp.com';

const tokenState = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  cleanToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async dataUser => {
  console.log(1111111, dataUser);
  const result = await axios.post('/api/user/signup', dataUser);
  // tokenState.setToken(data.token);
  console.log(22222222, result);
  const {data} = result;
  console.log(333333333, data);
  return data;
});

export const login = createAsyncThunk('auth/login', async dataUser => {
  const { data } = await axios.post('api/user/login', dataUser);
  tokenState.setToken(data.token);
  return data;
});

export const verify = createAsyncThunk('auth/verify', async emailAddress => {
  const { data } = await axios.post('api/user/verify', emailAddress);
  console.log(data);
  return data;
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  await axios.post('api/user/logout');
  tokenState.cleanToken();
});

export const fetchByToken = createAsyncThunk(
  'auth/fetchByToken',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    tokenState.setToken(token);
    const { data } = await axios('api/users/current');
    return data;
  },
);