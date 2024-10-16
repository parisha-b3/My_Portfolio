// import "./FooterStyles.css";

// import React from 'react';
// import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="footer">
//         <div className="footer-container">
//             <div className="left">
//                 <div className="location">
//                     <FaHome size={20} style = {{ color: "#fff", marginRight: "2rem"}} />
//                     <div>
//                         <p>Khekra, Baghpat</p>
//                         <p>Uttar Pradesh, India</p>
//                     </div>
//                     <div className="phone">
//                         <h4>
//                             <FaPhone size={20} style = {{color: "#fff", marginRight: "2rem"}}/>
//                             <p> +91 9368552525</p>
//                         </h4>
//                     </div>
//                     <div className="email">
//                     <h4>
//                             <FaMailBulk size={20} style = {{color: "#fff", marginRight: "2rem"}}/>
//                             <p> parisha2612@gmail.com</p>
//                         </h4>
//                     </div>
//                 </div>
//             </div>
//             <div className="right">
//                 <h4>About</h4>
//                 <p>A self-motivated learner and a problem solver having a keen eagerness and grow in a dynamic and a collaborative environment of AI or continuous innovation and solutions.</p>
//                 <div className="social">
//                 <FaLinkedin size={20} style = {{color: "#fff", marginRight: "2rem"}}/>
//                 <FaGithub size={20} style = {{color: "#fff", marginRight: "2rem"}}/>
//                 </div>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Footer;
import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Khekra, Baghpat</p>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              +91 9368552525
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              parisha2612@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About</h4>
          <p>
            A self-motivated learner and a problem solver with a keen eagerness to grow in a dynamic and collaborative environment of AI, continuously innovating solutions.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noreferrer">
              <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

