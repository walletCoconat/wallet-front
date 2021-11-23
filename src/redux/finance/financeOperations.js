import { createAsyncThunk } from "@reduxjs/toolkit";
import { TransactionApi} from '../../servises/api-servise'

const Transaction = new TransactionApi()

export const fetchAllTransactions = createAsyncThunk(
  "allTransactions/",
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await Transaction.getAllTransactions();
      if (response.hasNextPage) {
          Transaction.incrementPage()
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
  "transactions/",
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await Transaction.getTransactions();
      if (response.hasNextPage) {
          Transaction.incrementPage()
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
  "allStatistic/",
  async (_, { rejectWithValue }) => {
    try {
      const {response} = await Transaction.getAllStatistic();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchStatistic = createAsyncThunk(
  "statistic/",
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await Transaction.getStatistic();
      // const statistic = await Transaction.getStatistic();
      // console.log('res-statistic', statistic)
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTransaction = createAsyncThunk(
  "addTransaction/post",
  async (objdata, { rejectWithValue }) => {
    try {
      const { response } = await Transaction.postTransaction(objdata);
      // console.log('res-newTransaction', response)
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchUserCurrent = createAsyncThunk(
  "userCurrent/",
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await Transaction.getUserCarrent();
      // console.log('res-USER-USER', response)
      return response.balance;
    } catch (error) {
      // console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);