import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// UI component
class Counter extends Component {

  render() {
    const {value, onIncrease} = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncrease}>increase</button>
      </div>
    )
  }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrease: PropTypes.func.isRequired
  }
// connect to UI: generate container
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// implement stateToProps, it will subscribe state
function mapStateToProps(state) {
  return { value: state.count }
}

// implement propsToState
function mapDispatchToProps(dispatch) {
  return {
    onIncrease : () => dispatch(increaseAction)
  }
}
// action
const increaseAction = {
  type: 'increase'
}
// reduce
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return {count: count + 1}
    default:
      return state
  }
}

const store = createStore(counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
