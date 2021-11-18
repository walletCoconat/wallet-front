import React, { useState } from 'react';
import style from './Registration.module.css';
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';

const RegistrationUser = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: "",
    repeatPassword: ''
    
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
    console.log(state)
    dispatch(register({
      name: state.name,
      email: state.email,
      password: state.password
    }));
    setState({ name: '', email: '', password: '' });
    
  };

  return (
    <div className={style.registration__main_container}>
      <div className={style.registration__purple}></div>
      <div className={style.registration__pink}></div>
      <div className={style.registration__man}></div>

      <div className={style.registration__container}>
        <svg className={style.registration__logo} width="24px" height="24px">
          <use className={style.mail} xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
        <form className={style.registration__form} onSubmit={onSubmit}>
          <div className={style.registration__form_container}>
            <svg
              className={style.registration__icons}
              width="24px"
              height="24px"
            >
              <use xlinkHref={`${sprite}#icon-email`}></use>
            </svg>
            <input
              placeholder="E-mail"
              name="email"
              className={style.registration__input}
              onChange={onChangeInput}
              value={state.email}
            />
          </div>
          <div className={style.registration__form_container}>
            <svg
              className={style.registration__icons}
              width="24px"
              height="24px"
            >
              <use xlinkHref={`${sprite}#icon-lock`}></use>
            </svg>
            <input
              name="password"
              placeholder="Пароль"
              className={style.registration__input}
              onChange={onChangeInput}
              value={state.password}
            />
          </div>
          <div className={style.registration__form_container}>
            <svg
              className={style.registration__icons}
              width="24px"
              height="24px"
            >
              <use xlinkHref={`${sprite}#icon-lock`}></use>
            </svg>
            <input
              name="repeatPassword"
              placeholder="Подтвердите пароль"
              className={style.registration__input}
              onChange={onChangeInput}
              value={state.repeatPassword}
            />
          </div>
          <div className={style.registration__form_container}>
            <svg
              className={style.registration__icons}
              width="24px"
              height="24px"
            >
              <use xlinkHref={`${sprite}#icon-account`}></use>
            </svg>
            <input
              name="name"
              placeholder="Ваше имя"
              className={style.registration__input}
              onChange={onChangeInput}
              value={state.name}
            />
          </div>
          <button type="submit" className={style.registration__button}>
            Регистрация
          </button>
        </form>
        {/* eslint-disable-next-line no-sequences*/}
        <NavLink to="/login">
          <button className={style.registration__button}>Вход</button>
        </NavLink>
      </div>
    </div>
  );
};

export default RegistrationUser;
