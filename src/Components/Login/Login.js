import React from 'react';
import style from './Login.module.css';
import sprite from '../../images/sprite.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperation';
<<<<<<< HEAD
import { useCookies } from 'react-cookie';

const LoginUser = () => {
  const [cookies, setCookie] = useCookies(['refreshToken']);
  // setCookie('refreshToken', 'hello', { path: '/' });
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  console.log('cookies', cookies);
  const dispatch = useDispatch();
=======
import { Formik } from 'formik';
import * as yup from 'yup';
import { getError } from '../../redux/auth/authSelector';

// import

const LoginUser = () => {
  const getErr = useSelector(getError);
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
>>>>>>> main

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

  const dispatch = useDispatch();

  return (
    <div className={style.login__main_container}>
      <div className={style.login__purple}></div>
      <div className={style.login__pink}></div>
      <div className={style.login__man}></div>

      <div className={style.login__container}>
        <svg className={style.login__logo} width="24px" height="24px">
          <use className={style.mail} xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
<<<<<<< HEAD
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

=======
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
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
            <form onSubmit={handleSubmit} className={style.login__form}>
              <div className={style.login__form_container}>
                <svg className={style.login__icons} width="24px" height="24px">
                  <use xlinkHref={`${sprite}#icon-email`}></use>
                </svg>
                <input
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={style.login__input}
                />
                {touched.email && errors.email && (
                  <p className={style.error}>{errors.email}</p>
                )}
              </div>
              <div className={style.login__form_container}>
                <svg className={style.login__icons} width="24px" height="24px">
                  <use xlinkHref={`${sprite}#icon-lock`}></use>
                </svg>
                <input
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={style.login__input}
                />
                {errors.password && touched.password && (
                  <p className={style.error}>{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={!isValid && !dirty}
                className={style.login__button}
              >
                Войти
              </button>
            </form>
          )}
        </Formik>
>>>>>>> main
        {/* eslint-disable-next-line no-sequences*/}
        <NavLink to="/registration">
          <button className={style.login__button}>Регистрация</button>
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
