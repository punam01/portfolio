import React from "react";
import "../styles/skills.css";
import { FaArrowUp } from "react-icons/fa";
function Skills() {
  return (
    <>
      <header id="skills">
        <h2>Skills</h2>
      </header>
      <p className="sub-head">- An Overview -</p>
      <section>
        <div className="skills-section">
          <div className="skills-container">
            <div className="logos">
              <ul>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                    alt="skill-icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <a href="#home" className="scroll-top" onClick={()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}>
        <FaArrowUp/>
      </a>
    </>
  );
}
export default Skills;
