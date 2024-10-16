import "./FooterStyles.css";

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Khekra, Baghpat</p>
                        <p>Uttar Pradesh, India</p>
                    </div> 
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                    +91 9368552525
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                    parisha2612@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About</h4>
                <p>A self-motivated learner and a problem solver having a keen eagerness and grow in a dynamic and a collaborative environment 
                    of AI or continuous innovation and solutions.</p>
                      <div className="social">
                        <div className="s1">
                        <a href="https://www.linkedin.com/in/parisha-n0410">
                        <FaLinkedin size={30} style={{ color:"#fff", marginRight: "2rem" }} />
                        </a>
                        </div>

                        <div className="s2">
                        <a href="https://github.com/parisha-b3">
                        <FaGithub size={30} style={{ color:"#fff", marginRight: "2rem" }} />
                        </a>
                        </div>
                    
                      </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer





