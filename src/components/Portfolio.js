import React, { useState } from "react";
import "../styles/portfolio.css";

import { FaExternalLinkAlt } from "react-icons/fa";

import BirdImage from "../images/4.jpg";
import ChintanImage from "../images/1.jpg";
import WeatherImage from "../images/2.jpg";
import HCCImage from "../images/3.jpg";

function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <header id="project">
        <h2>Projects</h2>
      </header>
      <p className="sub-head">- My recent work -</p>
      <section className="project-section">
        <div className="tab-titles">
          <p className={`tab-links ${activeTab === 'all' ? 'current' : ''}`}
            onClick={()=>openTab('all')}>All</p>
          <p className={`tab-links ${activeTab === 'web' ? 'current' : ''}`}
            onClick={() => openTab('web')}>Web</p>
          <p className={`tab-links ${activeTab === 'python' ? 'current' : ''}`}
            onClick={() => openTab('python')}>Python</p>
          <p className={`tab-links ${activeTab === 'unity' ? 'current' : ''}`}
            onClick={() => openTab('unity')}>Unity</p>          
        </div>
        <div className={`project-container ${activeTab === 'all' ? 'active-tab' : ''}`}
          id="all">
          <ul className="pul">
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={ChintanImage} alt="chintanika" />
                </div>
                <p className="project-card-title">Chintanika</p>
                <p className="project-card-link">
                    Link{" "}
                    <a href="https://github.com/punam01/Chintanika-Web">
                      <FaExternalLinkAlt />
                    </a>
                </p>
              </div>
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>
        <div className={`project-container ${activeTab === 'web' ? 'active-tab' : ''}`} id="web">
          <ul className="pul">
            <li>
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
            </li>

            <li>
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
            </li>
          </ul>
        </div>
        <div className={`project-container ${activeTab === 'python' ? 'active-tab' : ''}`}
          id="python">
          <ul className="pul">
            <li>
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
            </li>
          </ul>
        </div>
        <div className={`project-container ${activeTab === 'unity' ? 'active-tab' : ''}`}
          id="unity">
          <ul className="pul">
            <li>
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
            </li>
          </ul>
        </div>
        {/*<div className="project-container">
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
  </div>*/}
      </section>
    </>
  );
}
export default Portfolio;
