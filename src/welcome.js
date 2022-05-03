import React, { Component } from "react"
class Welcome extends Component
{
    constructor()
    {
        super();
        this.state={name:"Nandhini",course:"React"}
    }
     update=()=>{
        this.setState({name:"sharmila"});
        console.log(this.state.name)
    }
    render()
    {
        return (<div>
            <h1>Name:{this.state.name}</h1>
            <button onClick={this.update}>UpdateName</button>
            <button onClick={()=>this.setState({course:"Angular"})}>UpdateCourse</button>
            </div>)
    }
   
}
export default Welcome;