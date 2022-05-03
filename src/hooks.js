import React, {  useEffect, useState } from 'react'

const Hooks =()=> {
   const [count,changeCount] =useState(0) 

   
  useEffect(() => {
   console.log("count updated");
  }, [count]);
 
    return (
      <div>count :{count}
      <button onClick={()=>setTimeout(changeCount(200),5000)}>+</button> 
      </div>
    )
  
}
export default Hooks;