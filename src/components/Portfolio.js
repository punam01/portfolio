import React from "react";
import "../styles/portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  return (
    <>
      <header>
        <h2>Projects</h2>
      </header>
      <p className="sub-head">- My recent work -</p>
      <br/><br/>
      <section>
        <div className="project-container">
          <div className="project-card">
            <div className="project-card-item"></div>
            <p className="project-card-title">
              Chintanika
              <br />
              <span className="project-card-link">
                Link <FaExternalLinkAlt />
              </span>
            </p>
          </div>
          <div className="project-card">
            <div className="project-card-item"></div>
            <p className="project-card-title">
              NITK Health Care Center
              <br />
              <span className="project-card-link">
                Link <FaExternalLinkAlt />
              </span>
            </p>
          </div>
          <div className="project-card">
            <div className="project-card-item"></div>
            <p className="project-card-title">
              Microsoft-Github-Copilot
              <br />
              <span className="project-card-link">
                Link <FaExternalLinkAlt />
              </span>
            </p>
          </div>
          <div className="project-card">
            <div className="project-card-item"></div>
            <p className="project-card-title">
              Fly-Birdie
              <br />
              <span className="project-card-link">
                Link <FaExternalLinkAlt />
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
