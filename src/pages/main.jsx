import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";

const Main = () => {
  const email = useSelector((state) => state.counter.email);
  const [image, setImage] = useState("");
  const [imgurl,setImageurl]=useState("")
  const [selectedOption,setSelectedOption]=useState("backgroundremoving")
  const navigate = useNavigate();
  const [anwers,setanswers]=useState("")
  const [flag,setflag]=useState(0)
  async function handleOnClick(e) {
    e.preventDefault();
    const highPiCookie = Cookies.get('highpiId');
    setflag(1)
    setanswers("")
    if (highPiCookie) {
      try {
        
        const response = await axios.post("http://localhost:8000/uploadphoto", { image: image ,optionSelected: selectedOption }, { withCredentials: true });
        
        let rr= response.data
        if(rr){
          setflag(0)
        }
        
        setanswers(rr)
      } catch (err) {
        console.log("Error in submit", err);
        /* alert("Bad Request Made please Login")
        navigate("/login") */
      }
    } else {
      alert("Please Login");
      navigate("/login");
    }
  }
  function swingChange(e){
    
    let l = e.target.value 
    console.log(l)
    setSelectedOption(l)
  }
  function handleOnChange(e) {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (err) => {
      console.log(err);
    };
  }
  async function parseURI(d){
    var reader = new FileReader();  
    reader.readAsDataURL(d);          
    return new Promise((res,rej)=> {  
      reader.onload = (e) => {        
        res(e.target.result)
      }
    })
  } 
  
  async function getDataBlob(url){
    var res = await fetch(url);
    var blob = await res.blob();
    var uri = await parseURI(blob);
    return uri;
  }
  async function urlingImage(e){
    const m=e.target.value
    setImageurl(m)
    let l = await getDataBlob(m)
    setImage(l)
  }
  
  return (
    <div>
      <Navbar />
      <div className="mt-5 mx-[35vw]">
        <div className="box-img text-center mb-4">
          {image === "" ? (
            <>
              <p>Drop image here</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleOnChange}
              />
            </>
          ) : (
            <img src={image} alt="Uploaded" className="image-size" />
          )}
        </div>
        <div className="text-center  mb-4">
          <span className="block">or</span>
          <span>(You can also paste the URL of the image)</span>
        </div>
        <input
          type="text"
          placeholder="Image URL"
          className="url-img mb-4 ml-32"
          onChange={urlingImage}
          value={imgurl}
        />
        <br/>
        <div className="mb-4 ml-24">
          <span>Select an option:</span>
          <select className="ml-2" value={selectedOption} onChange={swingChange}>
            <option value="backgroundremoving">Background Removal</option>
            <option value="pencilsketch">Pencil Sketch</option>
            <option value="facecutout">Face Cut-Out</option>
            <option value="cartoony">Cartoon Effect</option>
            <option value="greyscale">Grayscale Conversion</option>
            <option value="contrast">Contrast Adjustment</option>
            <option value="brightnesss">Brightness Adjustment</option>
            <option value="sharpen">Sharpening Adjustment</option>
            <option value="resize">Resize 200%</option>
            <option value="coloredpencilsketch">Colored Pencil Sketch</option>
          </select>
        </div>
        <button className="bg-pink-500 ml-40 text-white py-2 px-4 rounded" onClick={handleOnClick}>Upload</button>
      </div>
      {flag?
      
      <div role="status">
    <svg aria-hidden="true" class="inline w-8 h-8 mx-[35%] mt-10 max-w-[500px] max-h-[700px] text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>:"" }
      {anwers==""?"":<img className="mx-[35%] mt-10 max-w-[500px] max-h-[700px]" src={anwers}></img>}

      <div className="min-h-[100px]" ></div>
    </div>
  );
};

export default Main;