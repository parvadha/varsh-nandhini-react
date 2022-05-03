import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from '../student';
import Welcome from '../welcome';
function Rout(props) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/selva' element={<Welcome></Welcome>}/>
            <Route path='/student' element={<Student></Student> }/>
        </Routes>
        </BrowserRouter>
        
    );
}

export default Rout;