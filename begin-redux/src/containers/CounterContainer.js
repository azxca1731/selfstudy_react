// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.increment();
    }

    handleDecrement = () => {
        this.props.decrement();
    }

    render() {
        const { handleIncrementm, handleDecrement } = this;
        const { number } = this.props

        return (
            <Counter
                onIncrement={handleDecrement}
                onDecrement={handleDecrement}
                number={number}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    number: state.counter.number
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterActions.increment),
    decrement: () => dispatch(counterActions.decrement)
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);