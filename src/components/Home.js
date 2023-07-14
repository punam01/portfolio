import React from "react";
import "../styles/home.css";
import profileImage from "../images/profile.jpg";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import TypeWriter from "./TypeWriter";
function Home() {
  return (
    <>
      <section className="home-section">
        <div className="home-container" id="home">
          <div className="social">
            <a href="https://www.linkedin.com/in/punam-kumavat">
              <FaLinkedin className="social-item" />
            </a>
            <a href="https://github.com/punam01">
              <FaGithub className="social-item" />
            </a>
            <a href="https://mail.google.com/mail">
              <FaEnvelope className="social-item" />
            </a>
          </div>
          <div className="intro">
            <h1>Punam Kumavat 👋</h1>
            <div className="typed">
              <span>
                <hr />
              </span>
              <TypeWriter
                messages={[
                  "Post Graduate Student",
                  "Indian",
                  "Front-End Web Developer",
                ]}
              />
            </div>
            <p className="desc">
              "As an undergraduate student from India, I am fueled by enthusiasm
              to venture beyond familiar boundaries and embrace new
              opportunities and challenges."
            </p>
            <button>
              Say Hello <FaPaperPlane className="social-item" />
            </button>
          </div>
          <div className="profile">
            <img src={profileImage} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
