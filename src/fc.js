import React, { useState } from 'react';

function Fc(props) {
    const [name,changeName]=useState("mohan")
      return (
        <div>
            {props.parentName}
            <button onClick={()=>props.updateParent("React")}>Update</button>
        </div>
    );
}

export default Fc;