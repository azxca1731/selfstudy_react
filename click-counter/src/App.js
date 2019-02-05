import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleIncreaseButtonClicked = () => {
    if (this.state.error) {
      this.setState({
        error: false,
        counter: this.state.counter + 1
      });
    } else {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  };

  handleDecreaseButtonClicked = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.error ? (
          <h3 data-test="error-display" style={{ color: "red" }}>
            Counter can't be under 0
          </h3>
        ) : null}
        <button
          data-test="increase-button"
          onClick={this.handleIncreaseButtonClicked}
        >
          increase here!
        </button>
        <button
          data-test="decrease-button"
          onClick={this.handleDecreaseButtonClicked}
        >
          decrease here!
        </button>
      </div>
    );
  }
}

export default App;
