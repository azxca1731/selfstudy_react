import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { About, Concat, Events, Products, Whoops404 } from './pages';
import Home from './pages/Home';
import NavigationBar from './template/NavigationBar';
import Footer from './template/Footer';
const App = () =>
    <HashRouter>
        <div className="name">
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/concat" component={Concat} />
                <Route path="/events" component={Events} />
                <Route path="/products" component={Products} />
                <Route component={Whoops404} />
            </Switch>
            <Footer />
        </div>
    </HashRouter>
export default App;