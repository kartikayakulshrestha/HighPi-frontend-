import React,{useState} from 'react'
import img from "../assets/biglogo.png"
import {useNavigate} from "react-router-dom"
const Navbar = () => {
  const [flag,setflag]=useState(0)
  const navigate=useNavigate()
  return (
    <div>
      <nav className=" p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <img className="h-16 w-16" src={img} alt="HighPi Logo" />
          </div>
          {/* Navigation links */}
          <div className="hidden md:flex gap-10 text-xl space-x-4">
            <a href="#" className=" hover:text-gray-300">Home</a>
            <a href="#" className=" hover:text-gray-300">Services</a>
            <a href="#" className=" hover:text-gray-300">About</a>
            <a href="#" className=" hover:text-gray-300">Contact</a>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center">
          {/* Sign in and Login buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600" onClick={()=>{navigate("/signup")}}>Sign In</button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400" onClick={()=>{navigate("/login")}}>Login</button>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden ml-4 text-gray-400 hover:text-white" onClick={()=>{flag?setflag(0):setflag(1)}}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden mt-4">
        <div className={`flex flex-col space-y-2 ${flag===1?'':'hidden'}`}>
          <a href="#" className=" hover:text-gray-300">Home</a>
          <a href="#" className=" hover:text-gray-300">Services</a>
          <a href="#" className=" hover:text-gray-300">About</a>
          <a href="#" className=" hover:text-gray-300">Contact</a>
        </div>
        <div className={`flex flex-col mt-4 space-y-2 ${flag===1?'':'hidden'}`}>
          <button onClick={()=>{navigate("/signup")}} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Sign In</button>
          <button onClick={()=>{navigate("/login")}} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Login</button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
