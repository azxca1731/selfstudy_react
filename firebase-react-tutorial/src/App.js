import React, { Component } from 'react';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import { Home, Queue, About } from './pages/index';

class App extends Component {

  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/queue" component={Queue} />
        <Route path="/About" component={About} />
      </div>
    );
  }
}

export default App;