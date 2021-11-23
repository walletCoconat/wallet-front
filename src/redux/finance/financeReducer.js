import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchAllTransactions, fetchTransactions, addTransaction, fetchAllStatistic, fetchStatistic, fetchUserCurrent } from './financeOperations'
import { login } from '../auth/authOperation'

const categoryDecrement = createReducer([], {
  [login.fulfilled]: (state, { payload }) => payload.response.categoryDecrement,
})

const categoryIncrement = createReducer([], {
  [login.fulfilled]: (state, { payload }) => payload.response.categoryIncrement,
})

const balanceReducer = createReducer(0, {
  [fetchUserCurrent.fulfilled]: (state, { payload }) => payload,
  [addTransaction.fulfilled]: (state, { payload }) => payload.balance,
})

const financeDataReducer = createReducer([], {
  [fetchAllTransactions.fulfilled]: (state, { payload }) => payload,
  [fetchTransactions.fulfilled]: (state, { payload }) => [...state, ...payload],
  // добавть проверку на пустой массив при запросе првой страницы
  // не забудь про пагинацию
  // [addTransaction.fulfilled]: (state, { payload }) => [...state, payload],
  [addTransaction.fulfilled]: (state, { payload }) => state,
})

const StatisticReducer = createReducer(null, {
  [fetchAllStatistic.fulfilled]: (_, { payload }) => payload,
  [fetchStatistic.fulfilled]: (_, { payload }) => payload,
})

const error = createReducer(null, {
  [fetchAllTransactions.rejected]: (_, { payload }) => payload,
  [fetchAllTransactions.pending]: () => false,
  [fetchTransactions.rejected]: (_, { payload }) => payload,
  [fetchTransactions.pending]: () => false,
  [addTransaction.rejected]: (_, { payload }) => payload,
  [addTransaction.pending]: () => false,
  [fetchAllStatistic.rejected]: (_, { payload }) => payload,
  [fetchAllStatistic.pending]: () => false,
  [fetchStatistic.rejected]: (_, { payload }) => payload,
  [fetchStatistic.pending]: () => false,
  [fetchUserCurrent.rejected]: (_, { payload }) => payload,
  [fetchUserCurrent.pending]: () => false,
});

const loading = createReducer(false, {
  [fetchAllTransactions.pending]: () => true,
  [fetchAllTransactions.rejected]: () => false,
  [fetchAllTransactions.fulfilled]: () => false,
    
  [fetchTransactions.pending]: () => true,
  [fetchTransactions.rejected]: () => false,
  [fetchTransactions.fulfilled]: () => false,

  [addTransaction.pending]: () => true,
  [addTransaction.rejected]: () => false,
  [addTransaction.fulfilled]: () => false,

  [fetchAllStatistic.pending]: () => true,
  [fetchAllStatistic.rejected]: () => false,
  [fetchAllStatistic.fulfilled]: () => false,

  [fetchStatistic.pending]: () => true,
  [fetchStatistic.rejected]: () => false,
  [fetchStatistic.fulfilled]: () => false,

  [fetchUserCurrent.pending]: () => true,
  [fetchUserCurrent.rejected]: () => false,
  [fetchUserCurrent.fulfilled]: () => false,
});

export default combineReducers({
  totalBalance: balanceReducer,
  financeData: financeDataReducer,
  statistic: StatisticReducer,
  error,
  loading,
  categoryDecrement,
  categoryIncrement,
});