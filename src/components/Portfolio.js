import React from "react";
import "../styles/portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import BirdImage from "../images/4.jpg";
import ChintanImage from "../images/1.jpg";
import WeatherImage from "../images/2.jpg";
import HCCImage from "../images/3.jpg";
function Portfolio() {
  return (
    <>
      <header id="project">
        <h2>Projects</h2>
      </header>
      <p className="sub-head">- My recent work -</p>
      <br />
      <br />
      <section>
        <div className="project-container">
          <div className="project-card">
            <div className="project-card-item">
              <img src={ChintanImage} alt="chintanika" />
            </div>
            <p className="project-card-title">
              Chintanika
              <br />
              <span className="project-card-link">
                Link{" "}
                <a href="https://github.com/punam01/Chintanika-Web">
                  <FaExternalLinkAlt />
                </a>
              </span>
            </p>
          </div>
          <div className="project-card">
            <div className="project-card-item">
              <img src={HCCImage} alt="hcc" />
            </div>
            <p className="project-card-title">
              NITK Health Care Center
              <br />
              <span className="project-card-link">
                Link{" "}
                <a href="https://github.com/punam01/HCC-NITK">
                  <FaExternalLinkAlt />
                </a>
              </span>
            </p>
          </div>
          <div className="project-card">
            <div className="project-card-item">
              <img src={WeatherImage} alt="weather" />
            </div>
            <p className="project-card-title">
              Microsoft-Github-Copilot
              <br />
              <span className="project-card-link">
                Link{" "}
                <a href="https://github.com/punam01/Microsoft-Github-Copilot">
                  <FaExternalLinkAlt />
                </a>
              </span>
            </p>
          </div>
          <div className="project-card">
            <div className="project-card-item">
              <img src={BirdImage} alt="fly-birdie" />
            </div>
            <p className="project-card-title">
              Fly-Birdie
              <br />
              <span className="project-card-link">
                Link{" "}
                <a href="https://github.com/punam01/Fly-Birdie">
                  <FaExternalLinkAlt />
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
