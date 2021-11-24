import { createAsyncThunk } from '@reduxjs/toolkit';
import { walletApi } from '../../services';

// const Transaction = new walletApi()

export const fetchAllTransactions = createAsyncThunk(
  'allTransactions/',
  async (_, { rejectWithValue }) => {
    try {
      // console.log('pending');
      const { data } = await walletApi.getAllTransactions();
      // console.log('response', data);
      if (data.response.hasNextPage) {
        walletApi.incrementPage();
      }
      // console.log('res-transactions', response)
      return data.response.docs;
    } catch (error) {
      // console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTransactions = createAsyncThunk(
  'transactions/',
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await walletApi.getTransactions();
      if (response.hasNextPage) {
        walletApi.incrementPage();
      }
      // console.log('res-transactions', response)
      return response.docs;
    } catch (error) {
      // console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);

export const fetchAllStatistic = createAsyncThunk(
  'allStatistic/',
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await walletApi.getAllStatistic();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchStatistic = createAsyncThunk(
  'statistic/',
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await walletApi.getStatistic();
      // const statistic = await Transaction.getStatistic();
      // console.log('res-statistic', statistic)
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTransaction = createAsyncThunk(
  'addTransaction/post',
  async (objdata, { rejectWithValue }) => {
    // console.log('ЗАПРОС УШЕЛ', objdata)
    try {
      const { response } = await walletApi.postTransaction(objdata);
      // console.log('res-newTransaction', response)
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchUserCurrent = createAsyncThunk(
  'userCurrent/',
  async (_, { rejectWithValue }) => {
    try {
      // const { response } = await walletApi.getCurrentUser();
      const { data } = await walletApi.getCurrentUser();
      console.log('res-USER-USER', data.response)
      // return response.balance;
      return data.response;
    } catch (error) {
      // console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);
