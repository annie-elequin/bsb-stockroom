import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes.js';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

const mountNode = document.querySelector('#application');
ReactDOM.render(<Routes />, mountNode);

registerServiceWorker();
