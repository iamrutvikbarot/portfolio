import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useState } from "react";

export default function Display() {

  const [width , setWidth] = useState(window.screen.width)
 
  useEffect(() => {
    
    window.addEventListener("resize",()=>{
      setWidth(window.screen.width);
    })

    return () =>{
      window.removeEventListener("resize",()=>{
        setWidth(window.screen.width);
      })
    }
  
   
  }, [width])

  return (
    <div className={` ${width > 1080 &&  'pl-[25%]' }   w-screen back text-white  `}>
      <Home width={width}/>
      <About width={width}/>
      <Resume width={width}/>
      {/* <Projects width={width}/> */}
      <Contact width={width}/>
    </div>
  );
}
