import React from 'react';
import style from './Registration.module.css';
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';
import { Formik } from 'formik';
import * as yup from 'yup';

const RegistrationUser = () => {
  const dispatch = useDispatch();

  
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
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
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательно'),
  });

  return (
    <div className={style.registration__main_container}>
      <div className={style.registration__purple}></div>
      <div className={style.registration__pink}></div>
      <div className={style.registration__man}></div>

      <div className={style.registration__container}>
        <svg className={style.registration__logo} width="24px" height="24px">
          <use className={style.mail} xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>

        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
            repeatPassword: '',
          }}
          onSubmit={values => {
            dispatch(
              register({
                name: values.name,
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
            <form onSubmit={handleSubmit} className={style.registration__form}>
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
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={style.registration__input}
                />
                {touched.email && errors.email && (
                  <p className={style.error}>{errors.email}</p>
                )}
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
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={style.registration__input}
                />
                {errors.password && touched.password && (
                  <p className={style.error}>{errors.password}</p>
                )}
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
                  placeholder="Подтвердите пароль"
                  type="password"
                  name="repeatPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatPassword}
                  className={style.registration__input}
                />
                {touched.repeatPassword && errors.repeatPassword && (
                  <p className={style.error}>{errors.repeatPassword}</p>
                )}
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
                  type="name"
                  placeholder="Ваше имя"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={style.registration__input}
                />
                {touched.name && errors.name && (
                  <p className={style.error}>{errors.name}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid && !dirty}
                className={style.registration__button}
              >
                Регистрация
              </button>
            </form>
          )}
        </Formik>
        {/* eslint-disable-next-line no-sequences*/}
        <NavLink to="/login">
          <button className={style.registration__button}>Вход</button>
        </NavLink>
      </div>
    </div>
  );
};

export default RegistrationUser;
