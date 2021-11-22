import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchTransactions, addTransaction, fetchStatistic } from './financeOperations'


const balanceReducer = createReducer(28000, {

})

const financeDataReducer = createReducer([], {
  [fetchTransactions.fulfilled]: (state, { payload }) => [...state, ...payload],
  // добавть проверку на пустой массив при запросе првой страницы
  // не забудь про пагинацию
  [addTransaction.fulfilled]: (state, { payload }) => [...state, payload],
})

const StatisticReducer = createReducer(null, {
  [fetchStatistic.fulfilled]: (_, { payload }) => payload,
})

const error = createReducer(null, {
  [fetchTransactions.rejected]: (_, { payload }) => payload,
  [fetchTransactions.pending]: () => false,
  [addTransaction.rejected]: (_, { payload }) => payload,
  [addTransaction.pending]: () => false,
  [fetchStatistic.rejected]: (_, { payload }) => payload,
  [fetchStatistic.pending]: () => false,
});

const loading = createReducer(false, {
  [fetchTransactions.pending]: () => true,
  [fetchTransactions.rejected]: () => false,
  [fetchTransactions.fulfilled]: () => false,
  [addTransaction.pending]: () => true,
  [addTransaction.rejected]: (_, { payload }) => payload,
  [addTransaction.fulfilled]: () => false,
  [fetchStatistic.pending]: () => true,
  [fetchStatistic.rejected]: (_, { payload }) => payload,
  [fetchStatistic.fulfilled]: () => false,
});

export default combineReducers({
  totalBalance: balanceReducer,
  financeData: financeDataReducer,
  statistic: StatisticReducer,
  error,
  loading,
});