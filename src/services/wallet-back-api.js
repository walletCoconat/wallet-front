import { current } from '@reduxjs/toolkit';
import axios from 'axios';
// import { CookiesProvider } from 'react-cookie';
// var jwt = require('jsonwebtoken');

class WalletApi {
  BASE_URL = 'http://localhost:4040';
  API;
  TOKEN = null;
  withCookie = { withCredentials: true };
  withoutCookie = { withCredentials: false };
  COUNT_TOKEN_UPDATE = false;
  DISPATCH;
  ADD_TOKEN;
  LOGIN = false;

  setToken(token) {
    this.API.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.TOKEN = token;
    if (!this.LOGIN) {
      this.DISPATCH(this.ADD_TOKEN({ loginToken: token }));
    }

    this.LOGIN = false;
  }
  cleanToken() {
    this.API.defaults.headers.common.Authorization = '';
  }

  isValidToken() {
    this.API.interceptors.response.use(
      config => {
        return config;
      },
      async error => {
        const originalRequest = error.config;

        if (
          error.response.status === 423 &&
          error.config &&
          !error.config._isRetry
        ) {
          originalRequest._isRetry = true;

          try {
            const response = await this.API.get(
              `${this.BASE_URL}/api/user/refresh`,
              this.withCookie,
            );

            this.setToken(response.data.loginToken);
            return this.API.request(originalRequest);
          } catch (e) {
            console.log('НЕ АВТОРИЗОВАН');
            e.config._isRetry = true;
            throw e;
          }
        }
        throw error;
      },
    );
  }

  getCurrentUser = () => this.API.get('/api/user/current', this.withoutCookie);

  initApi(token, dispatch, currentUser, updateToken) {
    this.DISPATCH = dispatch;
    this.ADD_TOKEN = updateToken;
    if (this.COUNT_TOKEN_UPDATE) return;

    this.API = axios.create({
      withCredentials: true,
      baseURL: this.BASE_URL,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
      },
    });
    this.isValidToken();
    if (token) {
      this.setToken(token);
      dispatch(currentUser());
      this.COUNT_TOKEN_UPDATE = true;
    }
  }

  async login(dataUser) {
    const res = await this.API.post('/api/user/login', dataUser);

    this.LOGIN = true;
    this.setToken(res.data.loginToken);

    return res;
  }

  getAllTransactions = () => this.API.get('/api/user/test', this.withoutCookie);
}

export default WalletApi;
