import React from 'react';
import style from './ButtonAddTransaction.module.scss';
import sprite from '../../images/sprite.svg';

const ButtonAddTransaction = ({ onClick }) => {
  return (
    <button className={style.Button} onClick={onClick}>
      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-add`}></use>
      </svg>
    </button>
  );
};

export default ButtonAddTransaction;
