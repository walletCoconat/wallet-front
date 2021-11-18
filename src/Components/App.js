import React, { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Switch } from 'react-router-dom';

import Login from './Login/Login.js';
import RegistrationUser from './Registration/Registration.js';
import PrivateRoute from './PrivatRoute/PrivatRoute.js';
import PublicRoute from './PublicRoute/PublicRoute.js';
import { getRegister } from '../redux/auth/authSelector';
import Header from './Header/Header.js';
import Container from './Container/Container';
import ButtonAddTransaction from './ButtonAddTransaction';
import Modal from './ModalAddTransaction';
import Reexit from './Reexit/Reexit.js';
import Reenter from './Reenter/Reenter.js';

function App() {
  const history = useHistory();
  const register = useSelector(getRegister);
  const [modalActive, setModalActive] = useState(true);
  const [visible, setVisible] = useState(false);

  const toggleIsVisible = () => {
    setVisible(!visible);
  };

  history.push(register ? '/verify' : '/login');

  return (
    <>
      <Suspense>
        <Switch>
          <PrivateRoute exact path="/">
            <>
              <Header toggleIsVisible={toggleIsVisible} />
              <Container>
                <h1>Home</h1>
                <ButtonAddTransaction onClick={() => setModalActive(true)} />
                <Modal active={modalActive} setActive={setModalActive} />
              </Container>
            </>
          </PrivateRoute>
          <PublicRoute exact path="/login" urlFToRedirect="/">
            <Login />
          </PublicRoute>
          <PublicRoute path="/verify">
            <Reenter />
          </PublicRoute>

          <PublicRoute exact path="/registration" urlFToRedirect="/">
            <RegistrationUser />
          </PublicRoute>
        </Switch>
      </Suspense>

      {visible && <Reexit toggleIsVisible={toggleIsVisible} />}
    </>
  );
}

export default App;




import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
