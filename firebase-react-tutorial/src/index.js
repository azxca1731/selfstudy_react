import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import * as firebase from 'firebase';
import config from './config/firebase';

import './styles/index.css';
import Root from './Root';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(config);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <Root />
</Provider>, document.getElementById('root'));
registerServiceWorker();
