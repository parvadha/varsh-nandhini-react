import React, { Component } from 'react'
import WithCounter from './withCounter';

class ClickCounter extends Component {
  render() {
    return (
      <div>
          <button onClick={this.props.incrementCounter}>clicked {this.props.counter.counter} times</button>
      </div>
    )
  }
}
export default WithCounter(ClickCounter);