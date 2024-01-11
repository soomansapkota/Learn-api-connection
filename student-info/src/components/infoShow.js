import React, { useEffect, useState } from 'react'
import '../App.css'

const InfoShow = () => {
  const[students,setStudents]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8090/student/get")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result)
      
    })
},[])
console.log(students)
  return (
    <div className='form-container second'>
      <label >Details</label>
    {students.map((students)=>(
    <div className='card second'key={students.id}>
        
        <label>ID:{students.id}</label>
        <label>Name:{students.name}</label>
        <label>Age:{students.age}</label>
        <label>Email:{students.email}</label>
      </div>
    ))}
      
    </div>
  )
}

export default InfoShow
