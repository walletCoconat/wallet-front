// import React from 'react';
import { useSelector } from 'react-redux';
import { getTotalBalance } from '../../redux/finance/financeSelector'
import style from './TotalBalance.module.scss'

const TotalBalance = () => {
  const balance = useSelector(getTotalBalance);

  return (
    <div className={style.TotalBalanceContainer}>
      <span className={style.TotalBalanceTxt}>Ваш баланс</span>
      <span className={style.TotalBalanceValue}>₴ {balance}</span>
    </div>
  );
};

export default TotalBalance;