import React, { Component } from 'react'
import Fc from './fc';
 class Basic extends Component {
   constructor()
   {
       super();
       this.state={name:'boobalan'}
   }  
updateName=(child)=>
{
    this.setState({name:child})
}

  render() {
    return (
      <div>
                             </div>
    )
  }
}
export default Basic;