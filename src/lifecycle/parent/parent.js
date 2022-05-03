import React, { Component } from "react";
import Child1 from "../child1/child1";

class Parent extends Component {
  constructor()
  {
    super();
this.state={show:true}
        console.log("parent cons")
  }

  
componentDidMount()
{
console.log("CDM in parent")
}
  render() {
    console.log("parent render")
    return <div>
<button onClick={()=>this.setState({show:!this.state.show})}>showChild</button>
{
this.state.show?<Child1></Child1>:<></>
}
      </div>
  }
}

export default Parent;
