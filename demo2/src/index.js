import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'


// create store with a reducer
const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render (
    // UI is just a counter
    <Counter
        value={store.getState()}
        // dispatch action
        onIncrement={() => store.dispatch({type:'INCREMENT'})}
        onDecrement={() => store.dispatch({type:'DECREMENT'})}
    />,
    rootEl // change the root element
)



// refresh view
render()
// refresh when state changes
store.subscribe(render)
