import React from "react";
import "../styles/navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop-100,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="brand" onClick={() => scrollToSection("home")}>
          Punam Kumavat
        </div>
        <ul>
          <li>
            <div className="list-item" onClick={() => scrollToSection("home")}>
              Home
            </div>
          </li>
          <li>
            <div
              className="list-item"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </div>
          </li>
          <li>
            <div className="list-item" onClick={() => scrollToSection("about")}>
              About
            </div>
          </li>
          <li>
            <div
              className="list-item"
              onClick={() => scrollToSection("project")}
            >
              Project
            </div>
          </li>
          <li>
            <div
              className="list-item"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
