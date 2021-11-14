import React from 'react';
import Login from './Login/Login.js';
import { Route, Routes } from 'react-router-dom';
import RegistrationUser from './Registration/Registration.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationUser/>}/>
      </Routes>
    </>
  );
}

export default App;
