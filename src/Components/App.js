import React, { Suspense, useRef, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Switch } from 'react-router-dom';

import Login from './Login/Login.js';
import RegistrationUser from './Registration/Registration.js';
import PrivateRoute from './PrivatRoute/PrivatRoute.js';
import PublicRoute from './PublicRoute/PublicRoute.js';
import { getRegister, getToken } from '../redux/auth/authSelector';
import Header from './Header/Header.js';
import Container from './Container/Container';
import ButtonAddTransaction from './ButtonAddTransaction';
import useModal from './ModalAddTransaction/useModal';
import Modal from './ModalAddTransaction';

import Reexit from './Reexit/Reexit.js';
import Reenter from './Reenter/Reenter.js';

import Dashboard from './Dashboard/index';
import { walletApi } from '../services';
import { getCurrentUSer } from '../redux/auth/authOperation';
import { addToken } from '../redux/auth/authSlice';

function App() {
  const { isShowing, toggle } = useModal();

  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const register = useSelector(getRegister);
  const [modalActive, setModalActive] = useState(true);
  const [visible, setVisible] = useState(false);
  console.log(22222222222, token);

  const toggleIsVisible = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    walletApi.initApi(token, dispatch, getCurrentUSer, addToken);
  }, [token, dispatch]);

  history.push(register ? '/verify' : '/login');

  return (
    <>
      <Header />

      <Suspense>
        <Switch>
          <PrivateRoute exact path="/">
            <>
              <Header toggleIsVisible={toggleIsVisible} />
              <Container>
                <h1>Home</h1>
                <ButtonAddTransaction onClick={toggle} />
                <Modal isShowing={isShowing} hide={toggle} />
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

          <PrivateRoute exact path="/">
            <>
              <Dashboard />
              <ButtonAddTransaction />
            </>
          </PrivateRoute>

          <PrivateRoute path="/statistics">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/exchange_rates">
            <Dashboard />
          </PrivateRoute>

          {/* <ButtonAddTransaction onClick={() => setModalActive(true)} />
                <Modal active={modalActive} setActive={setModalActive} /> */}
        </Switch>
      </Suspense>

      {visible && <Reexit toggleIsVisible={toggleIsVisible} />}
    </>
  );
}

export default App;
