import React, { useContext } from 'react';
import {userContext,courseContext} from './App'
import CompD from './compD';
function CompC(props) {

    const user=useContext(userContext);
    const course=useContext(courseContext);
    return (
        <div>
            {user} is taking 
            {course} course
            <CompD/>
            
         </div>
    );
}

export default CompC;