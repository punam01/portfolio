import React from "react";
import "../styles/footer.css";
import { FaGithub, FaLinkedin ,FaEnvelope } from "react-icons/fa";
import table from "../images/table.png";
function Footer() {
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
      <footer>
        <div>
          <p className="potrait"></p>
          <img
            className="me"
            src={table}
            alt="Animated Woman with Laptop"
          />
        </div>
        <div className="footer-text">
          <div>
            <FaLinkedin className="links" onClick={handleChatNow}/>
            <FaGithub className="links" onClick={handleGithub}/>
            <FaEnvelope className="links" onClick={handleEmail}/>
          </div>
        </div>
        <div>Copyright &#169; 2023. No rights reserved.</div>
      </footer>
    </>
  );
}
export default Footer;
