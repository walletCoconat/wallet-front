import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login/Login.js';
import { Switch } from 'react-router-dom';
import RegistrationUser from './Registration/Registration.js';
import PrivateRoute from './PrivatRoute/PrivatRoute.js';
import PublicRoute from './PublicRoute/PublicRoute.js';
import { useDispatch } from 'react-redux';
import { getToken } from '../redux/auth/authSelector.js';
import * as authOperation from '../redux/auth/authOperation';
import Header from './Header/Header.js';
import Container from './Container/Container';
import ButtonAddTransaction from './ButtonAddTransaction';
import Modal from './ModalAddTransaction';
import Dashboard from './Dashboard/index'

function App() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const [modalActive, setModalActive] = useState(true);

  useEffect(() => {
    if (token === null) {
      return;
    }

    dispatch(authOperation.fetchByToken());
  }, [dispatch, token]);

  return (
    <>
    <Header/>

      <Suspense>
        <Switch>

          <PublicRoute exact path="/login" urlFToRedirect="/">
              <Login />
          </PublicRoute>

          <PublicRoute exact path="/registration" urlFToRedirect="/">
              <RegistrationUser />
          </PublicRoute>

          <PrivateRoute exact path="/">
              <>
                <Dashboard/>
                <ButtonAddTransaction />
              </>
          </PrivateRoute>

          <PrivateRoute path="/statistics">
              <Dashboard/>
          </PrivateRoute>

          <PrivateRoute path="/exchange_rates">
              <Dashboard/>
          </PrivateRoute>

                {/* <ButtonAddTransaction onClick={() => setModalActive(true)} />
                <Modal active={modalActive} setActive={setModalActive} /> */}
             
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
