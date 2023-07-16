import React, { useState } from "react";
import "../styles/portfolio.css";

import { PiLinkThin } from "react-icons/pi";

import BirdImage from "../images/4.jpg";
import ChintanImage from "../images/1.jpg";
import WeatherImage from "../images/2.jpg";
import HCCImage from "../images/3.jpg";
import Figma1 from "../images/figma1.JPG";
import Figma2 from "../images/figma2.JPG";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

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
          <p
            className={`tab-links ${activeTab === "all" ? "current" : ""}`}
            onClick={() => openTab("all")}
          >
            All
          </p>
          <p
            className={`tab-links ${activeTab === "python" ? "current" : ""}`}
            onClick={() => openTab("python")}
          >
            Python
          </p>
          <p
            className={`tab-links ${activeTab === "web" ? "current" : ""}`}
            onClick={() => openTab("web")}
          >
            Web
          </p>
          <p
            className={`tab-links ${activeTab === "unity" ? "current" : ""}`}
            onClick={() => openTab("unity")}
          >
            Unity
          </p>
          <p
            className={`tab-links ${activeTab === "figma" ? "current" : ""}`}
            onClick={() => openTab("figma")}
          >
            Figma
          </p>
        </div>
        <div
          className={`project-container ${
            activeTab === "all" ? "active-tab" : ""
          }`}
          id="all"
        >
          <ul className="pul">
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={ChintanImage} alt="chintanika" />
                </div>
                <div className="project-card-title">
                  Chintanika
                  <br />
                  <span className="project-card-link">
                    Github Link{" "}
                    <a href="https://github.com/punam01/Chintanika-Web">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={HCCImage} alt="hcc" />
                </div>
                <div className="project-card-title">
                  NITK Health Care Center
                  <br />
                  <span className="project-card-link">
                    Github Link{" "}
                    <a href="https://github.com/punam01/HCC-NITK">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={WeatherImage} alt="weather" />
                </div>
                <div className="project-card-title">
                  Microsoft-Github-Copilot
                  <br />
                  <span className="project-card-link">
                    Github Link{" "}
                    <a href="https://github.com/punam01/Microsoft-Github-Copilot">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={BirdImage} alt="fly-birdie" />
                </div>
                <div className="project-card-title">
                  Fly-Birdie
                  <br />
                  <span className="project-card-link">
                    Github Link{" "}
                    <a href="https://github.com/punam01/Fly-Birdie">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={Figma1} alt="event" />
                </div>
                <div className="project-card-title">
                  Event Booking
                  <br />
                  <span className="project-card-link">
                    Figma Link{" "}
                    <a href="https://www.figma.com/proto/PnKTVWfPZszZWR4YRseKMn/Event-Booking?node-id=10-153&starting-point-node-id=10%3A153&mode=design&t=c6YgDdJIlOACqZHi-1">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={Figma2} alt="ttt" />
                </div>
                <div className="project-card-title">
                  Tic-Tac-Toe Prototype
                  <br />
                  <span className="project-card-link">
                    Figma Link{" "}
                    <a href="https://www.figma.com/proto/zHeDAFIoZ3ZfSTHVnkyHdx/Tic-Tac-Toe?type=design&t=2ibXjR3EfuKaBYHc-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=25%3A141&node-id=25-141&mode=design">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
        <div
          className={`project-container ${
            activeTab === "web" ? "active-tab" : ""
          }`}
          id="web"
        >
          <ul className="pul">
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={ChintanImage} alt="chintanika" />
                </div>
                <div className="project-card-title">
                  Chintanika
                  <br />
                  <span className="project-card-link">
                    Github Link{" "}
                    <a href="https://github.com/punam01/Chintanika-Web">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={HCCImage} alt="hcc" />
                </div>
                <div className="project-card-title">
                  NITK Health Care Center
                  <br />
                  <span className="project-card-link">
                    Github Link{" "}
                    <a href="https://github.com/punam01/HCC-NITK">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={`project-container ${
            activeTab === "python" ? "active-tab" : ""
          }`}
          id="python"
        >
          <ul className="pul">
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={WeatherImage} alt="weather" />
                </div>
                <div className="project-card-title">
                  Microsoft-Github-Copilot
                  <br />
                  <span className="project-card-link">
                    Github Link{" "}
                    <a href="https://github.com/punam01/Microsoft-Github-Copilot">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={`project-container ${
            activeTab === "unity" ? "active-tab" : ""
          }`}
          id="unity"
        >
          <ul className="pul">
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={BirdImage} alt="fly-birdie" />
                </div>
                <div className="project-card-title">
                  Fly-Birdie
                  <br />
                  <span className="project-card-link">
                    Github Link{" "}
                    <a href="https://github.com/punam01/Fly-Birdie">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>       
        <div
          className={`project-container ${
            activeTab === "figma" ? "active-tab" : ""
          }`}
          id="figma"
        >
          <ul className="pul">
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={Figma1} alt="event" />
                </div>
                <div className="project-card-title">
                  Event Booking
                  <br />
                  <span className="project-card-link">
                    Figma Link{" "}
                    <a href="https://www.figma.com/proto/PnKTVWfPZszZWR4YRseKMn/Event-Booking?node-id=10-153&starting-point-node-id=10%3A153&mode=design&t=c6YgDdJIlOACqZHi-1">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="project-card">
                <div className="project-card-item">
                  <img src={Figma2} alt="ttt" />
                </div>
                <div className="project-card-title">
                  Tic-Tac-Toe Prototype
                  <br />
                  <span className="project-card-link">
                    Figma Link{" "}
                    <a href="https://www.figma.com/proto/zHeDAFIoZ3ZfSTHVnkyHdx/Tic-Tac-Toe?type=design&t=2ibXjR3EfuKaBYHc-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=25%3A141&node-id=25-141&mode=design">
                      <PiLinkThin className="link-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
      </section>
    </>
  );
}
export default Portfolio;
