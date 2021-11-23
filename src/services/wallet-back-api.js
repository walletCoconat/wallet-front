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
  page = 1;
  perPage = 10;
  year = 2021;
  month = 11;

  setToken(token) {
    this.API.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.TOKEN = token;
    if (!this.LOGIN) {
      console.log(1111111111);
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
    if (this.COUNT_TOKEN_UPDATE) return;
    this.DISPATCH = dispatch;
    this.ADD_TOKEN = updateToken;

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
    }
    this.COUNT_TOKEN_UPDATE = true;
  }

  async login(dataUser) {
    const res = await this.API.post('/api/user/login', dataUser);

    this.LOGIN = true;
    this.setToken(res.data.loginToken);

    return res;
  }

  getAllTransactions = () => this.API.get('/api/user/test', this.withoutCookie);

  async getAllTransactions() {
    const { data } = await axios.get(`/api/transaction/`);
    return data;
  }

  async getTransactions() {
    const { data } = await axios.get(
      `/api/transaction/?offset=${this.page}&limit=${this.perPage}`,
    );
    return data;
  }

  async postTransaction(newTransaction) {
    const { data } = await this.API.post('/api/transaction/', newTransaction);
    return data;
  }

  async getAllStatistic() {
    const { data } = await this.API.get('/api/transaction/statistic/');
    return data;
  }

  async getStatistic() {
    const { data } = await this.API.get(
      `/api/transaction/statistic/?year=${this.year}&month=${this.month}`,
    );
    return data;
  }

  async getUserCarrent() {
    const { data } = await this.API.get('/api/user/current');
    return data;
  }

  incrementPage() {
    this.page += 1;
  }
}

export default WalletApi;
