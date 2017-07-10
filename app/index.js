import sub from './sub';
import './style.scss';
import moment from 'moment-mini';

const app  = document.createElement('div');
const node = document.createDocumentFragment();
const timer = document.createElement('p');
timer.innerHTML = 'now is: ' + moment().format('YYYY-MM-DD HH:mm:ss') + R.always('3333')(98);
node.append(timer);
app.innerHTML = '<h1>Hello webpack in es6 hot-loader</h1>';
app.appendChild(sub());
app.appendChild(node);

document.body.appendChild(app); 