import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SpinnerLoader from './Components/SpinnerLoader/SpinnerLoader';
import './styles/index.scss';
import App from './Components/App';
import * as store from './redux/store';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <Provider store={store.store}>
        <PersistGate loading={<SpinnerLoader />} persistor={store.persist}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root'),
);
