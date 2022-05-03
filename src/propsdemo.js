import React from 'react';
import propTypes from 'prop-types'
function Propsdemo(props) {
    return (
        <div>
            {props.name}
        </div>
    );
}
Propsdemo.propTypes={
    name:propTypes.string
}
export default Propsdemo;