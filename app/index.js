import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';

import './style.scss';

// for redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// for action enhancer
const thunk = require('redux-thunk').default;
// for console test
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const app = document.createElement('div');
document.body.appendChild(app);

let store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk, logger)
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
)