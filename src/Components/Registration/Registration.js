import React from 'react';
import './Registration.scss';
import sprite from '../../images/sprite.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authOperation';
import { Formik } from 'formik';
import * as yup from 'yup';
import { getError } from '../../redux/auth/authSelector';


const RegistrationUser = () => {
  const dispatch = useDispatch();
  const getErr = useSelector(getError)
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
    <div className='registration__main_container'>
      <div className='registration__purple'></div>
      <div className='registration__pink'></div>
      <div className='registration__man'></div>

      <div className='registration__container'>
        <svg className='registration__logo' width="24px" height="24px">
          <use className='mail' xlinkHref={`${sprite}#icon-logo`}></use>
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
            <form onSubmit={handleSubmit} className='registration__form'>
              <div className='registration__form_container'>
                <svg
                  className='registration__icons'
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
                  className='registration__input'
                />
                {touched.email && errors.email && (
                  <p className='error'>{errors.email}</p>
                )}
              </div>
              <div className='registration__form_container'>
                <svg
                  className='registration__icons'
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
                  className='registration__input'
                />
                {errors.password && touched.password && (
                  <p className='error'>{errors.password}</p>
                )}
              </div>
              <div className='registration__form_container'>
                <svg
                  className='registration__icons'
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
                  className='registration__input'
                />
                {touched.repeatPassword && errors.repeatPassword && (
                  <p className='error'>{errors.repeatPassword}</p>
                )}
              </div>
              <div className='registration__form_container'>
                <svg
                  className='registration__icons'
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
                  className='registration__input'
                />
                {touched.name && errors.name && (
                  <p className='error'>{errors.name}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid && !dirty}
                className='registration__button'
                onClick={notify}
              >
                Регистрация
              </button>
            </form>
          )}
        </Formik>

        {/* eslint-disable-next-line no-sequences*/}
        <NavLink to="/login">
          <button className='registration__button'>Вход</button>
        </NavLink>
      </div>    
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  );
};

export default RegistrationUser;
