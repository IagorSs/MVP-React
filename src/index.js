import React from 'react';
import ReactDOM from 'react-dom';
import Controller from './components/scripts/Controller';
import * as serviceWorker from './serviceWorker';
import './components/css/Generic.css'

ReactDOM.render(
  <React.StrictMode>
      <div id="genericBackground">
        <h1>List of things to do</h1>
        <Controller/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
