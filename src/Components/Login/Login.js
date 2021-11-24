import React, { useState } from 'react';
import style from './Login.scss';
import sprite from '../../images/sprite.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperation';
import { Formik } from 'formik';
import * as yup from 'yup';
import { getError } from '../../redux/auth/authSelector';


// setCookie('refreshToken', 'hello', { path: '/' });

// import

const LoginUser = () => {
  const getErr = useSelector(getError);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const notify = () =>
    toast.error('Упсс, что-то пошло не так', {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  if (getErr) {
    console.log(getErr);
    notify();
  }

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Введите правильный E-mail')
      .required('Обязательно'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно')
      .min(6)
      .max(12),
  });

  return (
    <div className='login__main_container'>
      <div className='login__purple'></div>
      <div className='login__pink'></div>
      <div className='login__man'></div>

      <div className='login__container'>
        <svg className='login__logo' width="24px" height="24px">
          <use className='mail' xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
        <Formik
          initialValues={state}
          onSubmit={values => {
            dispatch(
              login({
                email: values.email,
                password: values.password,
              }),
            );
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className='login__form'>
              <div className='login__form_container'>
                <svg className='login__icons' width="24px" height="24px">
                  <use xlinkHref={`${sprite}#icon-email`}></use>
                </svg>
                <input
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className='login__input'
                />
                {touched.email && errors.email && (
                  <p className='error'>{errors.email}</p>
                )}
              </div>
              <div className='login__form_container'>
                <svg className='login__icons' width="24px" height="24px">
                  <use xlinkHref={`${sprite}#icon-lock`}></use>
                </svg>
                <input
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className='login__input'
                />
                {errors.password && touched.password && (
                  <p className='error'>{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={!isValid && !dirty}
                className='login__button'
              >
                Войти
              </button>
            </form>
          )}
        </Formik>

        {/* eslint-disable-next-line no-sequences*/}
        <NavLink to="/registration">
          <button className='login__button'>Регистрация</button>
        </NavLink>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default LoginUser;
