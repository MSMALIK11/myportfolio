import React,{useEffect,useRef} from 'react'
import '../style/header.scss'
import bg1 from './images/bg1.jpg';

import { init } from 'ityped'
import AboutMe from './AboutMe';



const Header = () => {
        const text=useRef();
useEffect(() => {
   
   
    init(text.current,{
        typeSpeed:200,
        backDelay:1000,
        showCursor:true,
        strings:[
 "Front-End Developer ",
 "MERN Stack developer",
 "UI/UX Designer",

        ]

    })
}, [])
    return (
        <div>
          <div className="banner">
             <div className="img-box img">
             <img src={bg1} alt="" className="img-fluid " />
             </div>
           <div className="info-wraper mt-4 ">
           <h4 className="banner-title my-3">Hii There!</h4>
              <h1 className="banner-heading my-4">I'm a <span ref={text} className="green"></span> </h1>
              <h3 className="para my-4">Hii i'm a  <span className="green">WEB  DESIGNER AND  DEVELOPER </span> i can develop any kind of website for your business.
              i'm <span className="green"> UI/UX</span> designer 
              </h3>
       
              <button className=" btn hiremebtn">Hire Me </button>
            
             

           </div>
         
           
              
          </div>
         
          <div className="aboutme">
              <AboutMe />
              {/* <Services /> */}
          </div>

            
        </div>
    )
}

export default Header
