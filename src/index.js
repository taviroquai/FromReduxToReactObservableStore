import React from 'react'
import ReactDOM from 'react-dom'
//import { createStore } from 'redux'
import Counter from './components/Counter'
//import counter from './reducers'
import Store from 'react-observable-store'
//const store = createStore(counter)

Store.init({
    counter: {
        value: 0
    }
})

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
