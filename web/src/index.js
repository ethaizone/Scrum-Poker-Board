import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';
import registerServiceWorker from './registerServiceWorker';
import './main.css'

ReactDOM.render(<Route />, document.getElementById('root'));
registerServiceWorker();
