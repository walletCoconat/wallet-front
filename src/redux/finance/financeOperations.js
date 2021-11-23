import { createAsyncThunk } from '@reduxjs/toolkit';
import { transactionApi } from '../../servises/api-servise';

// const Transaction = new transactionApi()

export const fetchAllTransactions = createAsyncThunk(
  'allTransactions/',
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await transactionApi.getAllTransactions();
      if (response.hasNextPage) {
        transactionApi.incrementPage();
      }
      // console.log('res-transactions', response)
      return response.docs;
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
      const { response } = await transactionApi.getTransactions();
      if (response.hasNextPage) {
        transactionApi.incrementPage();
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
      const { response } = await transactionApi.getAllStatistic();
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
      const { response } = await transactionApi.getStatistic();
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
    try {
      const { response } = await transactionApi.postTransaction(objdata);
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
      const { response } = await transactionApi.getUserCarrent();
      // console.log('res-USER-USER', response)
      return response.balance;
    } catch (error) {
      // console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);
