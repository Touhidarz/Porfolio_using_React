import { Link } from "react-router-dom";
import "./AboucontentStyles.css";
import webd from "../assets/web.jpeg"

import React from 'react'

const Aboucontent = () => {
  return (
    <div className="about">
      <div className="left">
          <h1>Who am I?</h1>
          <p>Hi there, I'm Touhid A Tamboli, and i'm pursuing my B.E degree at SPPU Pune. 

I have always been passionate about Data Science  and i'm fortunate  to have pursue it as a career.

I am constantly learning and growing in my field, and enjoy taking on new challenges and expanding my knowledge. </p>
<p> Aside from work I enjoy playing Baskeyball, participate in Sports Activities and do take part in the Societies such as TEDx DYP chapter, YIN DYPCOE and ACES DYPCOE. I find that these activities help me stay creative and inspired in my work.

</p>
          <Link to = "/contact">
            <button className="btn">Contact</button>
          </Link>
      </div>
      <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src = {webd} className="img" alt="true"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aboucontent

