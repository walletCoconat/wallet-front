import React, { Suspense, useEffect } from 'react';
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
import useModal from './ModalAddTransaction/useModal';
import Modal from './ModalAddTransaction';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const { isShowing, toggle } = useModal();

  useEffect(() => {
    if (token === null) {
      return;
    }

    dispatch(authOperation.fetchByToken());
  }, [dispatch, token]);

  return (
    <>
      <Suspense>
        <Switch>
          <PrivateRoute exact path="/">
            <>
              <Header />
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
          <PublicRoute exact path="/registration" urlFToRedirect="/">
            <RegistrationUser />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
