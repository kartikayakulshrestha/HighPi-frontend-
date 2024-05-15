import React, { useEffect,useState } from "react";
import image from "./assets/magicstudio-art (1).jpg"
import Navbar from "./components/Navbar";
import { TypeAnimation } from "react-type-animation";
import Footer from "./components/Footer";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    // Listen to scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="relative body">
      <Navbar />
      
      <div className="text-6xl font-bold text-center mt-[120px]">
        AI Powered{" "}
        <TypeAnimation
          sequence={[`Creative`, "Productive", "Automatic", 2000, ""]}
          speed={1}
          style={{ whiteSpace: "pre-line", fontSize: "1em" }}
          repeat={Infinity}
          className="text-pink-600"
        />
        <br /> Visual Design Platform
      </div>
      <br />
      <br />
      <p
        
        className={`mx-[15vw] mt-[300px] text-2xl  font-bold text-center my-5 invisible lg:visible`}
      >
        We leverage the power of artificial intelligence and computer vision to
        deliver a wide range of products both available for individual use and
        business application & workflows to achieve efficiency and creation.
      </p>

      
      <div className="px-[50px] md:px-[320px]  md:py-[300px] " style={{transform:`rotate(${scrollPercentage-100}deg)`}}>
      <p className="text-4xl font-semibold mb-5"> Some of Our <span className="text-pink-400">AI</span> Generated...</p>
      <div className="grid grid-cols-2  gap-4  max-w-5xl">
        <img src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt="Photo 1" className="rounded-lg" />
        <img src="https://forum.endeavouros.com/uploads/default/original/3X/4/7/476508c73970811f7ea89ff12cd144a416f3edec.png" alt="Photo 2" className="rounded-lg" />
        <img src={image} alt="Photo 3" className="rounded-lg" />
        <img src="https://opendream.ai/assets/img/page/homepage-anime-2.png?v=4.2.7" alt="Photo 4" className="rounded-lg" />
        
      </div>
      
    </div>
    
    
    </div>
  );
}

export default App;
