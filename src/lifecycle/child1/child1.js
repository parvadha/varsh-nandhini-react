import React, { Component } from "react";

class Child1 extends Component {
  constructor()
  {
    super();
    this.state={color:"red"}

    console.log("child1 constr")
  }
  //  static getDerivedStateFromProps(props,state)
  // {
  //    return {color:props.color}
  //  }
  componentDidMount()
  {
setTimeout(()=>this.setState({color:"green"}),1000)
    console.log("CDM in child")
  }
  shouldComponentUpdate()
  {
if(this.state.color=="green")
{
return true;
}
else{
  return false
}
  }
  getSnapshotBeforeUpdate(prevprops,prevstate)
  {
console.log(prevprops.color)
console.log(prevstate.color)
  }
componentDidUpdate()
{
  console.log("componentDidupdate in child")
}
componentWillUnmount()
{
  console.log("child hiding")
}
  render() {
    console.log("child1 render")
    return <div>{this.state.color}</div>;
  }
}

export default Child1;
