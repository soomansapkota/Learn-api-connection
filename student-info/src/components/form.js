import React, { useEffect, useState } from 'react'
import '../App.css'

const FormData = () => {
  const[name,setName]=useState('');
  const[age,setAge] =useState();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  

  const handleClick=(e)=>{
    e.preventDefault()
    const student ={name,age,email,password}
    console.log(student)
    fetch("http://localhost:8090/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>
    console.log("New Student Added"))
    
  }



  return (
    <div className='form-container'>
        <div className='card'>
          <h2>Registration Form</h2>
          <form method="POST" >
          <div className="fields">
          <label htmlFor="text">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
          <label htmlFor="age">Age</label>
          <input type="age" id="age" name="age" value={age} onChange={(e)=>setAge(e.target.value)}></input>
          <label htmlFor="email" >Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  onChange={(e)=>setPassword(e.target.value)}></input>
          <input type="button" value="Submit" name="submit" onClick={handleClick}></input>
          </div>
          </form>
   
        </div>
        
    </div>
  )
}

export default FormData;
