import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store'
import { Auth0Provider } from "@auth0/auth0-react";
import config from './auth_config.json';

import registerServiceWorker from './registerServiceWorker';
import history from './history';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

const store = configureStore({});
ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  rootElement);

registerServiceWorker();

