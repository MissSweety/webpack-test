import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Test from './TestCon';
import WebCon from './WebContainer';
// for redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// for action enhancer
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './style.scss';

const thunk = require('redux-thunk').default;
// for console test
const logger = store => next => action => {
  console.log('%c 【dispatching】', 'color: #bada55');
  console.log(action);
  let result = next(action)
  console.log('%c 【next state】', 'color: purple');
  console.log(store.getState());
  return result
}

const app = document.createElement('div');
document.body.appendChild(app);

let store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk, logger)
));

render(
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path="/" component={App} />
    	<Route path="/web" component={WebCon} />
    	<Route path="/test" component={Test} />
    </Router>
  </Provider>,
  app
)