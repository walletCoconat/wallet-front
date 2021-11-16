import React from 'react';
import style from './ButtonAddTransaction.module.scss';
import sprite from '../../images/sprite.svg';

const ButtonAddTransaction = ({ onClick }) => (
  <button className={style.Button} onClick={onClick}>
    <svg>
      <use xlinkHref={`${sprite}#icon-add`}></use>
    </svg>
  </button>
);

export default ButtonAddTransaction;
