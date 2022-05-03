import React,{useState} from 'react';

function Student(props) {
const [name,setName]=useState("");



const [course,updateCourse]=useState("")
const display=(stuName,courseName)=>
{
    alert("hi "+stuName +"and course "+courseName)
}

    return (
        <div>
            <h1>Welcome React</h1>
            <div>Name :{props.name}<br>

            
            </br>
           Course: {props.course}
           <br/>
           <input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
           <br/>
           <input placeholder="Course" onChange={(e)=>updateCourse(e.target.value)}/><br/>
           <button onClick={()=>display(name,course)}>Display</button>
           </div>
        </div>
    );
}

export default Student;