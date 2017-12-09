import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './containers/Counter'
import Store from 'react-observable-store'

// Init store with 'counter' namespace
Store.init({
    counter: { value: 0 }
}, true)

const rootEl = document.getElementById('root')

ReactDOM.render(<Counter />, rootEl)
