import React from "react";
import "../styles/contact.css";
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
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
            <BsLinkedin className="contact-icon"/>
            <button className="contact-button" onClick={()=>handleChatNow()}>Chat Now</button>
          </div>
          <div className="contact-item">
            <AiOutlineMail className="contact-icon"/>
            <button className="contact-button" onClick={()=>handleEmail()}>Email</button>
          </div>
          <div className="contact-item">
            <BsGithub className="contact-icon"/>
          <button className="contact-button" onClick={()=>handleGithub()}>Github</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
