import React from 'react';


function WithCounter(OriginalComponent) {
    class EnhancedComponent extends React.Component{
        constructor(){
            super();
            this.state={counter:0}
        }
        incrementCounter=()=>{
            this.setState((prev)=>{ return {counter:prev.counter+1}});
        }
        render(){
            return <OriginalComponent counter={this.state} incrementCounter={this.incrementCounter} />
        }
    }
    return EnhancedComponent
}

export default WithCounter;