import React,{useState} from 'react';
function Counter(OriginalComponent) {
const EnhancedComponent=()=>
{
    const [count,setCount]=useState(0)

    const incrementCount=()=>
    {
        setCount(count+1)
    }
    return(
        <div>
            <OriginalComponent count={count} incrementCount={incrementCount}></OriginalComponent>
        </div>
    )

}

    return   EnhancedComponent;  
}

export default Counter;