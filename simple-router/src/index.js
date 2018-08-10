import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome//css/font-awesome.min.css';
import './css/clean-blog.min.css';


import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
