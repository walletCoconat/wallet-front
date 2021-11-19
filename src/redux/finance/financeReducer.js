import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { initState } from '../../Components/HomeTab/initState'


const balanceReducer = createReducer(28000, {

})

const financeDataReducer = createReducer([], {

})

export default combineReducers({
    totalBalance: balanceReducer,
    data: financeDataReducer,
});