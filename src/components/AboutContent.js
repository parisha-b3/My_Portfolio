import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react'
import s1 from "../assets/s1.PNG";
import s2 from "../assets/s2.PNG";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Skills</h1>
            <p>
            <ul>
                <div className="AB">
            <div className="A">

                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </div>
            <div className="B"> 

                <li>React.js</li>
                <li>Python</li>
                <li>Django</li>
            </div>
                </div>
            </ul>
            </p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={s1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                <img src={s2} className="img" alt="true" />
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default AboutContent
