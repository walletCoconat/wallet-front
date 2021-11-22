import React, { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Switch } from 'react-router-dom';
import Login from './Login/Login.js';
import RegistrationUser from './Registration/Registration.js';
import PrivateRoute from './PrivatRoute/PrivatRoute.js';
import PublicRoute from './PublicRoute/PublicRoute.js';
import { getRegister } from '../redux/auth/authSelector';
import Header from './Header/Header.js';
// import Container from './Container/Container';
import ButtonAddTransaction from './ButtonAddTransaction';
import useModal from './ModalAddTransaction/useModal';
import Modal from './ModalAddTransaction';

import Reexit from './Reexit/Reexit.js';
import Reenter from './Reenter/Reenter.js';

import Dashboard from './Dashboard/index';

function App() {
  const { isShowing, toggle } = useModal();

  const history = useHistory();
  const register = useSelector(getRegister);
  // const [modalActive, setModalActive] = useState(true);
  const [visible, setVisible] = useState(false);

  const toggleIsVisible = () => {
    setVisible(!visible);
  };

  history.push(register ? '/verify' : '/login');

  return (    
  <> 
      <Suspense>
        <Switch>
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
            <Header toggleIsVisible={toggleIsVisible}/>
              <Dashboard />
              <ButtonAddTransaction onClick={toggle} />
              <Modal isShowing={isShowing} hide={toggle} />
            </>
          </PrivateRoute>

          <PrivateRoute path="/statistics">
          <Header toggleIsVisible={toggleIsVisible}/>
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/exchange_rates">
          <Header toggleIsVisible={toggleIsVisible}/>
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Suspense>

      {visible && <Reexit toggleIsVisible={toggleIsVisible} />}
    </>
  );
}

export default App;
