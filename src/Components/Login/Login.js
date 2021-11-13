import React, { useState } from 'react';
import style from './Login.module.css';
import sprite from '../../images/sprite.svg';
// import logo from "";

const LoginUser = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = ev => {
    console.log(ev.target.name);
    setState(prevState => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={style.login__main_container}>

      <div className={style.login__container}>
        {/* <img src={logo} alt="wallet" className={style.login__logo} /> */}
        <form className={style.login__form}>
          <div className={style.login__form_container}>
            <svg className={style.login__icons} width="24px" height="24px">
              <use class="mail" xlinkHref={`${sprite}#icon-email`}></use>
            </svg>
            <input
              placeholder="E-mail"
              className={style.login__input}
              onChange={onChangeInput}
            />
          </div>

          <div className={style.login__form_container}>
            <svg className={style.login__icons} width="24px" height="24px">
              <use class="mail" xlinkHref={`${sprite}#icon-lock`}></use>
            </svg>
            <input
              placeholder="Пароль"
              className={style.login__input}
              onChange={onChangeInput}
            />
          </div>
          <button className={style.login__button_login}>Вход</button>
        </form>

        {/* eslint-disable-next-line no-sequences*/}

        <button className={style.login__button}>Регистрация</button>
      </div>
    </div>
  );
};

export default LoginUser;
