import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleCounterClicked = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button data-test="increase-button" onClick={this.handleCounterClicked}>
          increase here!
        </button>
        <button data-test="decrease-button">decrease here!</button>
      </div>
    );
  }
}

export default App;
