import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const balanceReducer = createReducer(28000, {

})

const financeDataReducer = createReducer([], {

})

export default combineReducers({
    totalBalance: balanceReducer,
    data: financeDataReducer,
});