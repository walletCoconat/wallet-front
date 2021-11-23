import React from 'react';
import style from './Reenter.module.scss';
import { useHistory, Switch } from 'react-router-dom';
import * as authOperation from '../../redux/auth/authOperation';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getEmail } from '../../redux/auth/authSelector';
import { verify } from '../../redux/auth/authOperation';
import Button from '../Button/Button';

const Reenter = ({ toggleIsVisible }) => {
  const history = useHistory();
  const email = useSelector(getEmail);

  const dispatch = useDispatch();
  const onClick = () => {
    toggleIsVisible();
  };

  return (
    <div className={style.Modale}>
      <div className={style.Content}>
        <p> Почти там…</p>

        <p>
          {' '}
          Проверьте свою электронную почту{' '}
          <span className={style.Email}>`${email}`</span> для подтверждения
          учетной записи.{' '}
        </p>

        <p>
          Если <span className={style.Email}>`${email}`</span>не является
          адресом электронной почты, вернитесь{' '}
        </p>
        <Button
          onClick={() => {
            history.push('/registration');
          }}
        >
          {' '}
          Назад
        </Button>
        <p> и введите нужный адрес.</p>

        <p>
          Если вы не получили наше электронное письмо в течение 15 минут,
          проверьте папку со спамом
        </p>
        <p>Всё ещё не можете найти?</p>

        <Button
          type="button"
          onClick={() => {
            dispatch(verify({ email }));
          }}
        >
          Отправить еще раз
        </Button>

        {/*  */}
      </div>
    </div>
  );
};

export default Reenter;
