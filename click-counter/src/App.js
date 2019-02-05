import React, { Component } from "react";

class App extends Component {
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
