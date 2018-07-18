import React, { Component } from 'react';
import Counter from './Counter';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <MyName />
      </div>
    );
  }
}

export default App;
