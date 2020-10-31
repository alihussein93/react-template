import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'containers/App';

import reportWebVitals from './reportWebVitals';
import history from './history';
import store from './store';

import 'styles/_main.scss';

const ROOT_NODE = document.getElementById('root');
const APP = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(APP, ROOT_NODE);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
