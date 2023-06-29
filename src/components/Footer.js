import React from "react";
import "../styles/footer.css";
import { FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="f-left">Copyright &#169; 2023. No rights reserved.</div>
        <div className="f-right">
          <p>
            Mumbai,Maharashtra
            {"   "}
            <FaLocationArrow />
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
