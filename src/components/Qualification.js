import React from "react";
import "../styles/qualification.css";
import { FaCity, FaCalendarWeek } from "react-icons/fa";
function Qualification() {
  return (
    <>
      <header>
        <h2>Qualification</h2>
      </header>
      <p className="sub-head">- My Journey -</p>
      <section className="q-section">
        <div className="container">
          <div className="left">
            <div className="post">
              <p>National Institute of technology</p>
              <p>Masters in Computer Application</p>
              <small>
                <FaCity />
                Surathkal,Karnataka
              </small>
              <br />
              <small>
                <FaCalendarWeek />
                2022-2025
              </small>
            </div>
          </div>
          <div className="right">
            <div className="under"></div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Qualification;
