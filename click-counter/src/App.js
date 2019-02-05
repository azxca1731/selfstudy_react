import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently</h1>
        <button data-test="increase-button">increase here!</button>
      </div>
    );
  }
}

export default App;
