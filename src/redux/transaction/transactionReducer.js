import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from './transactionAction';

const items = createReducer([], {
  [fetchTransactionRequest]: (_, { payload }) =>
    payload.sort((a, b) => a.name.localeCompare(b.name)),
  [addTransactionRequest]: (state, { payload }) => [payload, ...state],
});

const error = createReducer(null, {
  [fetchTransactionError]: (_, { payload }) => payload,
  [addTransactionError]: (_, { payload }) => payload,

  [fetchTransactionRequest]: () => null,
  [fetchTransactionSuccess]: () => null,

  [addTransactionSuccess]: () => null,
  [addTransactionError]: () => null,
});

export default combineReducers({
  items,
  error,
});
