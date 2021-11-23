import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
  getCurrentUSer,
  verify,
} from './authOperation';

const initialState = {
  user: { name: null, email: null, balance: null },
  isLoader: false,
  loginToken: null,
  error: false,
  isLoggedIn: false,
  isRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToken(state, action) {
      state.loginToken = action.loginToken;
    },
  },
  extraReducers: {
    [register.pending]: state => {
      state.isLoader = true;
      state.error = false;
      state.isRegister = false;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.response;
      state.isLoader = false;
      state.isRegister = true;
    },

    [register.rejected]: state => {
      state = { ...initialState, error: true };
    },

    [verify.pending]: state => {
      state.isLoader = true;
      state.error = false;
      state.isRegister = true;
    },
    [verify.fulfilled]: (state, { payload }) => {
      state.user = payload.response;
      state.isLoader = false;
      state.isRegister = true;
    },

    [verify.rejected]: state => {
      state = { ...initialState, error: true };
      state.isRegister = false;
    },

    [login.pending]: state => {
      state.isLoader = true;
      state.error = false;
      state.isRegister = false;
      state.loginToken = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = {
        name: payload.response.name,
        email: payload.response.email,
        balance: payload.response.balance,
      };
      state.loginToken = payload.loginToken;
      state.isLoader = false;

      state.isLoggedIn = true;
    },
    [login.rejected]: state => {
      state.user = { name: null, email: null, balance: null };
      state.loginToken = null;
      state.isLoader = false;

      state.isLoggedIn = false;
      state.error = true;
    },
    [logOut.pending]: state => {
      state.error = false;
    },
    [logOut.fulfilled]: state => {
      state.isLoader = false;
      state.token = null;
      state.isLoggedIn = false;
      state.loginToken = null;
      state.user = { name: null, email: null };
    },
    [logOut.rejected]: state => {
      state.error = true;
      state.isLoader = false;
    },
    [getCurrentUSer.pending]: state => {
      state.error = false;
      state.isLoader = true;
    },
    [getCurrentUSer.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoader = false;
      state.isLoggedIn = true;
      state.loginToken = payload.loginToken;
      state.user = {
        name: payload.response.name,
        email: payload.response.email,
        balance: payload.response.balance,
      };
    },
    [getCurrentUSer.rejected]: state => {
      state.error = true;
      state.isLoader = false;
      state.loginToken = null;
      state.isLoggedIn = false;
      state.user = { name: null, email: null, balance: null };
    },
  },
});

export const { addToken } = authSlice.actions;

export default authSlice.reducer;
