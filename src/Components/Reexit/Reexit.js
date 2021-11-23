import React from 'react';
import { useDispatch } from 'react-redux';

import style from './Reexit.module.scss';
import sprite from '../../images/sprite.svg';
import * as authOperation from '../../redux/auth/authOperation';

import Button from '../Button/Button';
import Close from '../Close';

const Reexit = ({ toggleIsVisible }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    toggleIsVisible();
    dispatch(authOperation.logOut());
  };

  return (
    <div className={style.Modale}>
      <div className={style.Container}>
        <Close
          onClick={onClick}
          style={{
            border: '1px solid #ffffff',
            backgroundColor: '#ffffff',
          }}
        >
          <svg className={style.Icon}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </Close>

        <h1>Вы действительно хотите выйти?</h1>

        <ul>
          <li className={style.Item}>
            <Button onClick={()=>{onClick()}}>Да</Button>
          </li>
          <li>
            <Button
              onClick={() => {
                toggleIsVisible();
             
                
              }}
            >
              Нет
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reexit;
