import React from 'react'
import '../style/footer/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faInstagram, faLinkedinIn, faWhatsapp,  } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div>
         <div className="footer-wraper">
             <ul>
                 <li>
                <a href="https://www.facebook.com/ms.malik.1291/"> <FontAwesomeIcon icon={faFacebookF}  /></a>
                 </li>
                 <li>
               <a href="https://www.instagram.com/msdesigner111/">  <FontAwesomeIcon icon={faInstagram}  /></a>
                 </li>
                 <li>
             <a href="#"><FontAwesomeIcon icon={faWhatsapp}  /></a>
                 </li>
                 <li>
                <a href="#"> <FontAwesomeIcon icon={faLinkedinIn}  /></a>
                 </li>
             </ul>
            

         </div>
        
            
        </div>
    )
}

export default Footer
