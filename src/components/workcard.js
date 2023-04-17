import "./workcardStyles.css";
import React from 'react'
import projectcard1 from "../assets/projectcard1.jpg";
import { NavLink } from "react-router-dom";

const workcard = () => {
  return (
    <div className="work-container">
        {/* <h1 className="project-heading">Projects</h1> */}
        <div className="project-container">
            <div className="project-card">
                <img src = {projectcard1} alt = "image123" />
                <h2 className="project-title">Portfolio using React</h2>
                <div className="pro-details">
                        <p>
                           Project description 
                        </p>
                        <div className="pro-btns">
                                <NavLink to = "#" className= "btn" >View</NavLink>
                                <NavLink to = "https://github.com/Touhidarz/Porfolio_using_React.git" className= "btn" target="_blank">Source</NavLink>
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default workcard