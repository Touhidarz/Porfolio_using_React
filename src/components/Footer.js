import { FaDiscord, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left-footer">
                <div className="location">
                    <FaHome size={20} style={{color :"#fff" , marginRight:"2rem"}}/>
                    <div> <p> Pune , Maharashtra</p>
                        
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color :"green" , marginRight:"2rem"}}/>
                    + 91 94xxxxx80
                    </h4>
                
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color :"#fff" , marginRight:"2rem"}}/>
                        touhidtamboli0314@gmail.com
                    </h4>
                
                </div>
            </div>

            <div className="right-footer">
                <h4> About Me </h4>
                <p> I'm an Undergraduate Student at D.Y. Patil College of Engineering , Akurdi 
               
                        I am passionate about creating and learning and I've dedicated myself to constantly improving my skills and knowledge. Each project in my portfolio showcases my creativity, attention to detail and ability to solve complex problems.
      Thank you for visiting and I look forward to hearing from you !
                
                </p>
                <div className="social">
                
                <NavLink to= "https://www.linkedin.com/in/touhid-tamboli-z0314" target="_blank"><FaLinkedin size={30} style={{color :"#0A66C2" , marginRight:"1rem"}} /></NavLink>
                <NavLink to="https://instagram.com/touhidarz_0314?igshid=ZDdkNTZiNTM=" target="_blank" ><FaInstagram size={30} style={{color :"#E4405F", marginRight:"1rem"}}/></NavLink>
                <NavLink to="https://www.youtube.com/channel/UC6DxIEqO-v0_Y-2-xFbLqWA" target="_blank" ><FaYoutube size={30} style={{color :"#FF0000" , marginRight:"1rem"}}/></NavLink>
                <NavLink><FaDiscord size={30} style={{color :"#5865F2" , marginRight:"1rem"}}/></NavLink>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer