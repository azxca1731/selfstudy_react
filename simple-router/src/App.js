import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './template/NavigationBar';
import Footer from './template/Footer';
import About from './pages/About';
import Whoops404 from './pages/Whoops404'
const App = () =>
    <HashRouter>
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" component={Home} />
                <Route path="/concat" component={Home} />
                <Route component={Whoops404} />
            </Switch>
            <Footer />
        </div>
    </HashRouter>
export default App;