import React, { useState } from 'react';
import Counter from './counter';
function Clickcount(props) {
       return (
        <div>
            <button onClick={props.incrementCount}>clicked {props.count}times</button>
        </div>
    );
}

export default  Counter(Clickcount);