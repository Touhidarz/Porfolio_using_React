import { FaDiscord, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left-footer">
                <div className="location">
                    <FaHome size={20} style={{color :"#fff" , marginRight:"2rem"}}/>
                    <div> <p>xyz Housing Society , Pune 411015</p>
                        
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
                        touhidxyz123@gmail.com
                    </h4>
                
                </div>
            </div>

            <div className="right-footer">
                <h4> About Me </h4>
                <p>abc abc abc abc </p>
                <div className="social">
                
                <FaInstagram size={30} style={{color :"#E4405F", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color :"#0A66C2" , marginRight:"1rem"}}/>
                <FaYoutube size={30} style={{color :"#FF0000" , marginRight:"1rem"}}/>
                <FaDiscord size={30} style={{color :"#5865F2" , marginRight:"1rem"}}/>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer