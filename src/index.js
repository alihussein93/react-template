import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const DOM_NODE = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(DOM_NODE, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
