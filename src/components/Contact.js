import React from "react";
import "../styles/contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <>
    <header className="head">
        <h2>Contact</h2>
      </header>
      <p className="sub-head">- Don't be shy! Hit me up! -</p>
      <section className="contact-section">
        <div className="contact-container">
            <div className="contact-item">
                <div className="contact-icon">
                    <FaLinkedin/>
                </div>
                <div className="contact-details">
                    <span><small>LinkedIn</small></span>
                    <span>punam-kumavat</span>
                </div>
            </div>
            <div className="contact-item">
                <div className="contact-icon">
                    <FaGithub/>
                </div>
                <div className="contact-details">
                    <span><small>Github</small></span>
                    <span>punam01</span>
                </div>
            </div>
            <br/>
            <div className="contact-item">
                <div className="contact-icon">
                    <FaEnvelope/>
                </div>
                <div className="contact-details">
                    <span><small>Email</small></span>
                    <span>punamkumavat01@gmail.com</span>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Contact;