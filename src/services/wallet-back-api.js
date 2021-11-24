import axios from 'axios';
// import { CookiesProvider } from 'react-cookie';
// var jwt = require('jsonwebtoken');

class WalletApi {
  BASE_URL = 'http://localhost:4040';
  // BASE_URL = 'https://wallet-coconat.herokuapp.com';
  API;
  OLD_TOKEN = null;
  TOKEN = null;
  withCookie = { withCredentials: true };
  withoutCookie = { withCredentials: false };
  COUNT_TOKEN_UPDATE = false;
  DISPATCH;
  ADD_TOKEN;
  LOGIN = false;
  IS_RE_LOGIN = false;
  page = 1;
  perPage = 10;
  year = 2021;
  month = 11;

  cleanToken() {
    this.API.defaults.headers.common.Authorization = '';
  }

  isValidToken() {
    this.API.interceptors.request.use(options => {
      console.log('this.TOKEN', this.TOKEN);

      console.log('options', options);
      if (this.TOKEN) {
        options.headers['Authorization'] = `Bearer ${this.TOKEN}`;
      }
      return options;
    });
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
            // this.IS_RE_LOGIN = true;
            console.log(9999999999999);
            console.log(response.data.loginToken);
            console.log(9999999999999);
            this.TOKEN = response.data.loginToken;

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
      this.TOKEN = token;
      dispatch(currentUser());
    }
    this.COUNT_TOKEN_UPDATE = true;
  }

  async login(dataUser) {
    const res = await this.API.post(
      '/api/user/login',
      dataUser,
      this.withCookie,
    );
    console.log(22222222222222, res);
    this.LOGIN = true;
    this.TOKEN = res.data.loginToken;

    return res;
  }

  logout = async () => {
    const res = await this.API.get('/api/user/logout');
    this.cleanToken();
    return res;
  };

  async getMyStat(year, month) {
    let options = '';
    if (month || year) {
      options = `?${year ? `year=${this.year}` : ''}${year ? `&` : ''}${
        month ? `month=${this.month}` : ''
      }`;
    }

    return await this.API.get(
      `/api/transaction/statistic${options}`,
      this.withoutCookie,
    ).catch(console.error);
  }
  // getAllTransactions = () => this.API.get('/api/user/test', this.withoutCookie);

  getAllTransactions = () =>
    this.API.get(`/api/transaction/`, this.withoutCookie);

  // async getTransactions() {
  //   const { data } = await axios.get(
  //     `/api/transaction/?offset=${this.page}&limit=${this.perPage}`,
  //   );
  //   return data;
  // }
  getTransactions = async () => {
    const { data } = await this.API.get(
      `/api/transaction/?offset=${this.page}&limit=${this.perPage}`,
      this.withoutCookie,
    );
    return data;
  };

  postTransaction = async newTransaction => {
    const { data } = await this.API.post(
      '/api/transaction/',
      newTransaction,
      this.withoutCookie,
    );
    return data;
  };

  getAllStatistic = async () => {
    const { data } = await this.API.get(
      '/api/transaction/statistic/',
      this.withoutCookie,
    );
    return data;
  };

  // async getStatistic() {
  //   const { data } = await this.API.get(
  //     `/api/transaction/statistic/?year=${this.year}&month=${this.month}`,
  //   );
  //   return data;
  // }
  getStatistic = async () => {
    const { data } = await this.API.get(
      `/api/transaction/statistic/?year=${this.year}&month=${this.month}`,
      this.withoutCookie,
    );
    return data;
  };

  incrementPage() {
    this.page += 1;
  }
}

export default WalletApi;
