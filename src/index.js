import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



import "../src/css/index.css";
import App from "./Components/App";
import * as store from './redux/store';

ReactDOM.render(
  

  <React.StrictMode>
   <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persist}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
,
  document.getElementById("root")
);
