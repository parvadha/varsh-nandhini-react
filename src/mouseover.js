import React,{useState} from 'react';
import Counter from './counter';
function MouseoverCount(props) {
    return (
        <div>
            <button onMouseEnter={props.incrementCount}>MouseOver{props.count} times</button>
        </div>
    );
}

export default Counter(MouseoverCount);