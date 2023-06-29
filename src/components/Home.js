import React from "react";
import "../styles/home.css";
import profileImage from "../images/profile.jpg";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="social">
            <FaLinkedin className="social-item" />
            <FaGithub className="social-item" />
            <FaEnvelope className="social-item" />
          </div>
          <div className="intro">
            <h1>Punam Kumavat 👋</h1>
            <p className="typed">
              <span>
                <hr />
              </span>
              {/*<Typed
                strings={[
                  "Post Graduate Student",
                  "Indian",
                  "Front-End Web Developer",
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
              />*/}
            </p>
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
