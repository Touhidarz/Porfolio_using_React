import { Link } from "react-router-dom";
import "./AboucontentStyles.css";
import web from "../assets/web.jpeg"

import React from 'react'

const Aboucontent = () => {
  return (
    <div className="about">
      <div className="left">
          <h1>Who am I?</h1>
          <p>kjfgk;fjghfdkjg</p>
          <Link to = "/contact">
            <button className="btn">Contact</button>
          </Link>
      </div>
      <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src = {web} className="img" alt="true"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aboucontent

