import React, { useState } from "react";
import axios from "axios";
import img from "../assets/preview (3).webp";
import image from "../assets/biglogo.png";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { theemail } from "../redux/counter/counterSlice";
const Signup = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const navigate= useNavigate()
  const dispatch = useDispatch()
  
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handlesubmit = async (e) => {
    console.log(fname, lname, email, password);
    
    try {

      if (validateEmail(email)) {
        let da = {
          email: email,
          password: password,
          firstname: fname,
          lastname: lname,
        };

        console.log(da);
        dispatch(theemail(email))
        navigate("/verify")
        let res = await axios.post("http://localhost:8000/signin", da, {
          withCredentials: true,
        });
        
        /* if(res){
          return window.location.href('/login')
        }else{
          return window.location.href('/')
        } */
        
        
      }else{
        alert("mail is not correct")
      }
    } catch (err) {
      alert(err)
      console.log(err);
    }
  };
  return (
    <div>
       


      {/* sign up
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="name"
          onChange={(e) => {
            setfname(e.target.value);
          }}
          value={fname}
          name="firstname"
          required
        ></input>

        <label htmlFor="lastname">lastname</label>
        <input
          type="name"
          onChange={(e) => {
            setlname(e.target.value);
          }}
          value={lname}
          name="lasttname"
          required
        ></input>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}
          name="email"
          required
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => {
            setpass(e.target.value);
          }}
          value={password}
          name="password"
        ></input>

        <button>Submit</button>
      </form> */}

      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-12 sm:col-span-8 lg:col-span-6">
          <div className=""></div>
          <div className=" min-h-[600px] mt-24 mr-[20px] ml-[20px] xl:ml-[150px] lg:mr-[150px]  ">
            <text className="font-extrabold text-3xl mt-1 flex">
              Sign up to HighPI
              <figure>
                <img src={image} height={30} width={50}></img>
              </figure>
            </text>
            <form onSubmit={handlesubmit}>
              <div className="grid lg:grid-cols-6 mt-6 mb-8">
                <div className="lg:col-span-3 ">
                  <label className="text-lg font-bold">Firstname</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Firstname"
                    onChange={(e) => {
                      
                      setfname(e.target.value);
                    }}
                    value={fname}
                    className="rounded-lg min-h-10 min-w-[90%]  p-3"
                    required
                  ></input>
                </div>
                <div className="lg:col-span-3">
                  <label className="text-lg font-bold">Lastname</label>
                  <br></br>
                  <input
                    type="text"
                    onChange={(e) => {
                      setlname(e.target.value);
                    }}
                    value={lname}
                    className="rounded-lg min-h-10 min-w-[90%]  p-3"
                    placeholder="Lastname"
                    required
                  ></input>
                </div>
              </div>

              <label className="text-lg font-bold ">Email</label>
              <br></br>
              <input
                type="text"
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
                onChange={(e) => {
                  setpass(e.target.value);
                }}
                value={password}
                name="password"
                placeholder="6+ Characters"
                required
              ></input>
              <br />
              <div className="grid grid-cols-12">
                <div className="col-span-1 py-2 px-3">
                  <input type="checkbox" required></input>
                </div>
                <div className="col-span-11">
                  <text className="">
                    Creating an account means you're okay with our{" "}
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
                Create Account
              </button>
            </form>
            <br />
            <text className="">
              Already have an account?
              <a href="/login" className="text-[#5A47BC]">
                {" "}
                Login
              </a>
            </text>
          </div>
        </div>
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
            className=" sm:block absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
