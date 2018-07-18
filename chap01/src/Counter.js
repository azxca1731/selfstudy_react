import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.state = {
            number: 0
        };
    }

    handleIncrease = () => {
        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        );
    }

    handleDecrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;