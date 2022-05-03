import React, { useState } from 'react';
import './App.css';

function Login(props) {
    const [name,setName]=useState('');
    const [passwd,setPasswd]=useState('');
function task(){
   if(name==='selva' && passwd==='1234'){
alert('welcome' +name)
   }
else{
alert('chek your name and passwd')
}

}

       
    return (
        <div className="box">
            <input type="text" placeholder='enter user name' onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
            <input type="password" placeholder='password' onChange={(e)=>setPasswd(e.target.value)}></input><br></br>
            <button onClick={()=>task()}>login</button>
            {name}<br></br>
            {passwd}
            
        </div>
    );
}

export default Login;