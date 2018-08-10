import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './template/NavigationBar';
import Footer from './template/Footer';
import { Home, About, Whoops404, Posts } from './pages/index'
const App = () =>
    <HashRouter>
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" component={Posts} />
                <Route path="/concat" component={Home} />
                <Route component={Whoops404} />
            </Switch>
            <Footer />
        </div>
    </HashRouter>
export default App;