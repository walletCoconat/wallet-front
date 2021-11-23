import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchByToken, verify } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  isLoader: false,
  loginToken: null,
  error: false,
  isLoggedIn: false,
  isRegister: false,
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
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
      state.user = payload.response;
      state.loginToken = payload.loginToken;
      state.isLoader = false;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected]: state => {
      console.log('aaaaaaa',state);
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
    [fetchByToken.pending]: state => {
      state.error = false;
      state.isLoader = true;
    },
    [fetchByToken.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoader = false;
      state.isLoggedIn = true;
    },
    [fetchByToken.rejected]: state => {
      state.error = true;
      state.isLoader = false;
    },
  },
});

export default authSlice.reducer;
