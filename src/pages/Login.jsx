import React, { useState } from "react";
import axios from "axios";
import image from "../assets/biglogo.png";
import img from "../assets/preview.webp";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const navigate=useNavigate()
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  async function handleSubmit(e){
    e.preventDefault()
    console.log("pysh")
    try {
      
      
      let res = await axios.post("http://localhost:8000/login", { email: email, password: password }, { withCredentials: true });
      console.log(res.data.message)
      if(res.data.message==="success"){
        alert("Logged in ")
        return 
      }else if (res.data.message==="passwordIsWrong"){
        alert("wrongpassword")
      }else if(res.data.message==="nouser"){
        alert("Do not exist")
        return navigate("/signin")
      }else if(res.data.message==="pleaseverify"){
        alert("you are not verified user, please sign in or check the mail")
        return navigate("/signin")
      }
    } catch (err) {
      alert("error",err)
      console.error("Error:", err); // Log the error object
    }
  }
  
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={(e)=>{setemail(e.target.value)}} value={email} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={(e)=>{setpass(e.target.value)}} value={password} />

        <button type="submit">Submit</button>
      </form> */}
        <div className="grid grid-cols-12 min-h-screen">
        <div
          className="col-span-12 sm:col-span-4 lg:col-span-6 bg-red-500 max-h-screen relative flex sm:flex-col-reverse"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={img}
            className="hidden sm:block absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-6">
          <div className=""></div>
          <div className=" min-h-[600px] mt-24 mr-[20px] ml-[20px] xl:ml-[150px] lg:mr-[150px]  ">
            <text className="font-extrabold text-3xl mt-1 flex">
              Login to HighPI
              <figure>
                <img src={image} height={30} width={50}></img>
              </figure>
            </text>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 mt-6 mb-8">
                <div className="col-span-3 ">
                  <button className="flex shadow-xl bg-[#ce5a51] xl:min-w-[80%]  py-2 rounded-lg px-6">
                    <div>
                      <FaGoogle size={27} />
                    </div>
                    <text className=" font-medium "> Google+</text>
                  </button>
                </div>
                <div className="col-span-3">
                  <button className="flex shadow-xl bg-[#8b9dc3] xl:min-w-[80%]  py-2 rounded-lg px-6">
                    <div>
                      <RiFacebookBoxFill size={28} />
                    </div>
                    <text className=" font-medium "> Facebook</text>
                  </button>{" "}
                </div>
              </div>

              <label className="text-lg font-bold " htmlFor="email">Email</label>
              <br></br>
              <input
                type="text"
                name="email"
                className="rounded-lg min-h-10 min-w-[90%] p-3 mb-8"
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                required
              ></input>
              <label className="text-lg font-bold ">Password</label>
              <br></br>
              <input
                type="password"
                className="rounded-lg min-h-10 min-w-[90%]  p-3 mb-8"
                placeholder="6+ Characters"
                onChange={(e) => {
                  setpass(e.target.value);
                }}
                value={password}
                required
              ></input>
              <br />
              <div className="grid grid-cols-12">
                <div className="col-span-1 py-2 px-3">
                  <input type="checkbox" required></input>
                </div>
                <div className="col-span-11">
                  <text className="">
                    Logging in an account means you're okay with our{" "}
                    <span className="text-[#5A47BC]">
                      Terms of Service, Privacy Policy
                    </span>{" "}
                    , and our default{" "}
                    <span className="text-[#5A47BC]">
                      Notification Settings
                    </span>
                  </text>{" "}
                </div>
              </div>

              <br />
              <button
                type="submit"
                style={{
                  background:
                    "radial-gradient(circle at left bottom, #ff5900 , #021a31)",
                }}
                className=" text-lg shadow-xl rounded-xl text-white px-12 py-2"
              >
                {" "}
                Login Please
              </button>
            </form>
            <br />
            <text className="">
              <a href="/signup" className="text-[#5A47BC]">Create account</a> if do not exist
              
            </text>
            <br />
            <text className="text-xs">
              This site is protected by reCAPTCHA and the Google
              <br />
              <span className="text-[#5A47BC]">Privacy Policy</span> and{" "}
              <span className="text-[#5A47BC]">Terms of Service</span> apply.
            </text>
          </div>
        </div>
      </div> 

      
    </div>
  );
};

export default Login;
