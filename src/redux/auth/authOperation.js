import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { walletApi } from '../../services';

// axios.defaults.baseURL = 'https://wallet-coconat.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4040';
const tokenState = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log('token', token);
  },
  cleanToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async dataUser => {
  const { data } = await axios.post('/api/user/signup', dataUser);
  // const data = await walletApi.login(dataUser);

  return data;
});

export const login = createAsyncThunk('auth/login', async dataUser => {
  console.log(document.cookie);
  // const res = await axios.post('/api/user/login', dataUser);
  console.log(111111111110000000000);
  const { data } = await walletApi.login(dataUser);
  console.log(data);

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

// export const fetchByToken = createAsyncThunk(
//   'auth/fetchByToken',
//   async (_, thunkApi) => {
//     const token = thunkApi.getState().auth.token;
//     tokenState.setToken(token);
//     const { data } = await axios('api/users/current');
//     return data;
//   },
// );

export const getCurrentUSer = createAsyncThunk(
  'auth/fetchByToken',
  async (_, { rejectWithValue }) => {
    // try {
    const res = await walletApi.getCurrentUser();

    return res.data;
    // } catch (e) {
    //   return rejectWithValue(e.response.data);
    // }
  },
);

// export function addTokenReducer(token) {
//   'auth / fetchByToken';
// }
