import React, { Component } from 'react'
import WithCounter from './withCounter'

 class HoverCounter extends Component {
  render() {
    return (
      <div><button onMouseOver={this.props.incrementCounter}>clicked {this.props.counter.counter} times</button></div>
    )
  }
}
export default WithCounter( HoverCounter);
