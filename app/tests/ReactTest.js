import React from 'react';
import ReactDOM from 'react-dom';
import TestCon from './TestCon';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './style.scss';


const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<TestCon appName="testcon"/>, app);
