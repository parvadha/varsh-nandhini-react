import React from "react";
import './App.css';
function Hello(props)
{
    return(
        <div className="box">
hi {props.name}{props.course}
        </div>
    )
}
export default Hello;