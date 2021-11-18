import React, { useState } from 'react';
import style from './Login.module.css';
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperation';

const LoginUser = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onChangeInput = ev => {
    console.log(ev.target.name);
    setState(prevState => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(state));
    setState({ email: '', password: '' });
  };

  return (
    <div className={style.login__main_container}>
      <div className={style.login__purple}></div>
      <div className={style.login__pink}></div>
      <div className={style.login__man}></div>

      <div className={style.login__container}>
        <svg className={style.login__logo} width="24px" height="24px">
          <use className={style.mail} xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
        <form className={style.login__form} onSubmit={onSubmit}>
          <div className={style.login__form_container}>
            <svg className={style.login__icons} width="24px" height="24px">
              <use
                className={style.mail}
                xlinkHref={`${sprite}#icon-email`}
              ></use>
            </svg>
            <input
            name="email"
              placeholder="E-mail"
              className={style.login__input}
              onChange={onChangeInput}
            />
          </div>

          <div className={style.login__form_container}>
            <svg className={style.login__icons} width="24px" height="24px">
              <use
                className={style.mail}
                xlinkHref={`${sprite}#icon-lock`}
              ></use>
            </svg>
            <input
            name="password"
              placeholder="Пароль"
              className={style.login__input}
              onChange={onChangeInput}
            />
          </div>
          <button type="submit" className={style.login__button}>
            Вход
          </button>
        </form>

        {/* eslint-disable-next-line no-sequences*/}
        <NavLink to="/registration">
          <button className={style.login__button}>Регистрация</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginUser;
