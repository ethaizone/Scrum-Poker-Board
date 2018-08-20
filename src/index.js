import React from 'react';
import ReactDOM from 'react-dom';
import Route from './index2';
import registerServiceWorker from './registerServiceWorker';
import './main.css'

ReactDOM.render(<Route />, document.getElementById('root'));
registerServiceWorker();
