import React from "react";
import "../styles/contact.css";
import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiChatCenteredDotsLight,
} from "react-icons/pi";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const handleChatNow = () => {
    window.location.href = "https://www.linkedin.com/in/punam-kumavat";
  };

  const handleEmail = () => {
    window.location.href = "mailto:punamkumavat01@gmail.com";
  };

  const handleGithub = () => {
    window.location.href = "https://github.com/punam01";
  };
  return (
    <>
      <header className="head" id="contact">
        <h2>Get in Touch</h2>
      </header>
      <p className="sub-head">- Don't be shy! Hit me up! -</p>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-item">
            <form className="contact-form"> 
              <div className="contact-form-div">
                <label className="contact-form-tag">Name</label>
                <input type="text" name="name" placeholder="Insert your name" className="contact-form-input" />
              </div>
              <div className="contact-form-div">
                <label className="contact-form-tag">Mail</label>
                <input type="email" name="email" placeholder="Insert your email" className="contact-form-input" />
              </div>
              <div className="contact-form-div">
                <label className="contact-form-tag">Message</label>
                <textarea name="message" placeholder="Insert your message" cols="30" rows="10" className="contact-form-area"></textarea>
              </div>
              <button>
              Say Hello <FaPaperPlane className="social-item" />
            </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
