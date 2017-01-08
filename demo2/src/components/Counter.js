import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }
    incrementIfOdd = () => {
        if (this.props.value % 2 === 1) {
            this.props.onIncrement()
        }
    }
    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }
    render() {
        const {value, onIncrement, onDecrement} = this.props
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    increment async
                </button>
            </p>
        )
    }
}

export default Counter
