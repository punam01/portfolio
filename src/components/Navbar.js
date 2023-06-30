import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">Punam Kumavat</div>
        <ul>
          <li>
            <Link to="/" className="list-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="list-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="list-item">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/project" className="list-item">
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact" className="list-item">
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