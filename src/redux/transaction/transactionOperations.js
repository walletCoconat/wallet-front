import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from './transactionAction';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchTransaction = () => async dispatch => {
  dispatch(fetchTransactionRequest());

  try {
    const { data } = await axios.get('/transaction');

    dispatch(fetchTransactionSuccess(data));
  } catch (error) {
    dispatch(fetchTransactionError());
    if (error.response.status === 404) {
      toast.info('There is no any transaction!');
    } else if (error.response.status === 500) {
      toast.error('Oops! Server error! Please try later!');
    } else {
      toast.error('Something went wrong! Please reload the page!');
    }
  }
};

const addTransaction = (quantity, date, selectedFile) => async dispatch => {
  const transaction = { quantity, date, selectedFile };

  dispatch(addTransactionRequest());

  try {
    const { data } = await axios.post('/transaction', transaction);

    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionError(error));
    if (error.response.status === 400) {
      toast.error('Transaction creation error!');
    } else {
      toast.error('Something went wrong! Please reload the page!');
    }
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchTransaction, addTransaction };
