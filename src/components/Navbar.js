import React from "react";
import "../styles/navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">Punam Kumavat</div>
        <ul>
          <li>
            <Link to="home" spy={true} smooth={true} offset={-300} duration={700} className="list-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={700} className="list-item">
              About
            </Link>
          </li>
          <li>
            <Link to="skill" spy={true} smooth={true} offset={0} duration={700} className="list-item">
              Skills
            </Link>
          </li>
          <li>
            <Link to="project" spy={true} smooth={true} offset={-100} duration={700} className="list-item">
              Project
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={700} className="list-item">
              Contact
            </Link>
          </li>

    
          
            
    

          
          Expand Down
    
    
  
        </ul>
      </nav>
    </>
  );
}
export default Navbar;