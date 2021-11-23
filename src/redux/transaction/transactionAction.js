import { createAction } from '@reduxjs/toolkit';
import {
  FETCH_TRANSACTION_REQUEST,
  ADD_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_ERROR,
  ADD_TRANSACTION_REQUEST,
  ADD_TRANSACTION_ERROR,
  FETCH_TRANSACTION_SUCCESS,
} from './transactionTypes';

export const fetchTransactionRequest = createAction(FETCH_TRANSACTION_REQUEST);
export const fetchTransactionSuccess = createAction(FETCH_TRANSACTION_SUCCESS);
export const fetchTransactionError = createAction(FETCH_TRANSACTION_ERROR);

export const addTransactionRequest = createAction(ADD_TRANSACTION_REQUEST);
export const addTransactionSuccess = createAction(ADD_TRANSACTION_SUCCESS);
export const addTransactionError = createAction(ADD_TRANSACTION_ERROR);
