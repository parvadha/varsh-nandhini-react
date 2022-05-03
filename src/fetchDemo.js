import React, { useEffect } from 'react';

function FetchDemo(props) {
    useEffect(()=>
    {
        fetch("chitra.txt").then((res)=>console.log(res))
    })
    return (
        <div>
            <h1>Fetch</h1>
        </div>
    );
}

export default FetchDemo;