import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Login from './Login/Login.js';
import { Switch } from 'react-router-dom';
import RegistrationUser from './Registration/Registration.js';
import PrivateRoute from './PrivatRoute/PrivatRoute.js';
import PublicRoute from './PublicRoute/PublicRoute.js';
import { useDispatch } from 'react-redux';
import { getToken } from '../redux/auth/authSelector.js';
import {getRegister} from '../redux/auth/authSelector';
import * as authOperation from '../redux/auth/authOperation';
import Header from './Header/Header.js';
import Container from './Container/Container';
import ButtonAddTransaction from './ButtonAddTransaction';
import Modal from './ModalAddTransaction';
import Reexit from './Reexit/Reexit.js';
import Reenter from './Reenter/Reenter.js';

function App() {
  const history = useHistory();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const register = useSelector(getRegister);
  const [modalActive, setModalActive] = useState(true);
  const [visible, setVisible] = useState(false);


  const toggleIsVisible = () => {
  setVisible(!visible);
  };





history.push(register ? '/verify':'/login');


  // useEffect(() => {
  //   if (token === null) {
  //     return;
  //   }

  //   dispatch(authOperation.fetchByToken());
  // }, [dispatch, token]);

  return (
    <>
      <Suspense>
        <Switch>
          <PrivateRoute exact path="/">
            <>
              <Header toggleIsVisible={toggleIsVisible}/>
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
          <PublicRoute path='/verify'>
          <Reenter/>
          </PublicRoute>

          
          <PublicRoute exact path="/registration" urlFToRedirect="/">
            <RegistrationUser />
          </PublicRoute>
        </Switch>
      </Suspense>

     {visible && <Reexit toggleIsVisible={toggleIsVisible}/>}
     
    </>
  );
}

export default App;
