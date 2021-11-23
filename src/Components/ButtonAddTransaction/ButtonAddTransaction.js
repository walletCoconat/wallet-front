import React from 'react';
import style from './ButtonAddTransaction.module.scss';
import sprite from '../../images/sprite.svg';
import { transactionOperations } from '../../redux/transaction';
import { useDispatch } from 'react-redux';

// const ButtonAddTransaction = ({ onClick }) => (
const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  console.log(1111, transactionOperations);
  function onClick(e) {
    console.log('hello');
    dispatch(transactionOperations.fetchTransaction());
  }
  return (
    <button className={style.Button} onClick={onClick}>
      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-add`}></use>
      </svg>
    </button>
  );
};

export default ButtonAddTransaction;
