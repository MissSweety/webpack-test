import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);