import React, { useState } from 'react';
import style from './Switch.module.scss';
import sprite from '../../images/sprite.svg';

const Switch = onClick => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(true) : setToggle(false);
  };

  return (
    <div className={style.SwitchBox} onClick={toggler}>
      <label for="income" className={style.Text}>
        Доход
      </label>
      <label className={style.Switch}>
        <input type="checkbox" />
        <span className={style.Slider}>
          <svg width="20" height="20">
            <use xlinkHref={`${sprite}#icon-add`}></use>
          </svg>
        </span>
      </label>
      <label for="spend" className={style.Text}>
        Расход
      </label>
    </div>
  );
};

export default Switch;
