import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Veriff = () => {
    const navigate=useNavigate()
    const email = useSelector((state) => state.counter.email)
    const [f,setf]=useState(1)
    async function func(){
      
      if(f){
        const res = await axios.post("http://localhost:8000/verifyy",{email:email},{ withCredentials: true})
        if(res.data){
         return navigate("/login")
        }
        else{
          setf(0)
        } 
        setInterval(()=>{},5000)
        setf(0)
       
      }else{
        const res = await axios.post("http://localhost:8000/verifyy",{email:email},{ withCredentials: true})
        if(res.data){
         return navigate("/login")
        }
        else{
          setf(0)
        } 
        setInterval(()=>{},5000)
        setf(1)
        
      }
      
    }
    useEffect(()=>{
      if(email===""){
        navigate("/login")
      }
      func()
      console.log(1)
    },[f])
  return (
    <div>
      {email}
    </div>
  )
}

export default Veriff
