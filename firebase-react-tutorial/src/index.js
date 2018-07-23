import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import firebase from 'firebase/app';
import 'firebase/database'
import 'bootstrap/dist/css/bootstrap.css'

import './styles/index.css';
import { config } from './config/firebase'
import Root from './Root';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(config);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Root store={createStoreWithMiddleware(reducers)} />, document.getElementById('root'));
registerServiceWorker();
