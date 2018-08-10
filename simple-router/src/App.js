import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { About, Concat, Events, Home, Products, Whoops404 } from './pages';
import NavigationBar from './template/NavigationBar';
import PageHeader from './template/PageHeader';
const App = () =>
    <HashRouter>
        <div className="name">
            <NavigationBar />
            <PageHeader title="너도 할 수 있다" subtittle="리액트 노예 계속해서 리액트만한다." />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/concat" component={Concat} />
                <Route path="/events" component={Events} />
                <Route path="/products" component={Products} />
                <Route component={Whoops404} />
            </Switch>
        </div>
    </HashRouter>
export default App;