import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CounterComponent from '../components/Counter'
import { withStore } from 'react-observable-store'
import { increment, decrement, incrementAsync } from '../actions'

class Counter extends Component {

  render() {
      return (
          <CounterComponent
            value={this.props.value}
            onIncrement={() => increment()}
            onDecrement={() => decrement()}
            onIncrementAsync={() => incrementAsync()}
          />
      )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
}

export default withStore('counter', Counter)
