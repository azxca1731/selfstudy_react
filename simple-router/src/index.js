import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';
import { About, Concat, Events, Home, Products } from './pages';

ReactDOM.render(
    <HashRouter>
        <div className="name">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/concat" component={Concat} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
        </div>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
