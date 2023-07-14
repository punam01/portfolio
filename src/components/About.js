import "../styles/about.css";
import pdf from "../PUNAM_KUMAVAT_Resume.pdf";
import { FaLaptop, FaMedal, FaPortrait, FaSuitcase } from "react-icons/fa";
import { SiGeeksforgeeks,SiLeetcode,SiCodechef } from "react-icons/si";
function About() {
  const handleClick = () => {
    window.open(pdf, "_blank");
  };
  const handleGeeks = () => {
    window.open("https://auth.geeksforgeeks.org/user/punamk_01/practice/", "_blank");
  };
  const handleLeetcode = () => {
    window.open("https://leetcode.com/Punam_Kumavat/", "_blank");
  };
  const handleCodechef = () => {
    window.open("https://www.codechef.com/users/punamkumavat01", "_blank");
  };

  return (
    <>
      <header id="about">
        <h2>About Me</h2>
      </header>
      <p className="sub-head">- Know thy Author -</p>
      <section className="about-section">
        <div className="about-container">
          <div className="about">
            <div className="about-cards">
              <div className="card-item">
                <FaMedal className="icon" />
                <span>Experience</span>
                <p>2 Years </p>
                <p>Programming</p>
              </div>
              <div className="card-item">
                <FaSuitcase className="icon" />
                <span>Completed</span>
                <p>3+ Projects</p>
                <p></p>
              </div>
              <div className="card-item">
                <FaLaptop className="icon" />
                <span>Support</span>
                <p>3+ Projects</p>
                <p></p>
              </div>
            </div>
            <div className="desc">
              As I strive to achieve my goal of becoming a{" "}
              <span>full-stack developer</span>, I have gained valuable
              experience through the{" "}
              <span>completion of multiple beginner-level projects</span> and
              have honed my programming skills over the years. Furthermore, my{" "}
              <span>notable aptitude for self-directed learning</span> enables
              me to quickly acquire new skills within tight timeframes.
            </div>
            <br />
            <button onClick={handleClick}>
              Download CV <FaPortrait className="social-item" />
            </button>
            <div className="socials">
              <SiGeeksforgeeks className="social" onClick={handleGeeks}/>
              <SiLeetcode className="social" onClick={handleLeetcode}/>
              <SiCodechef className="social" onClick={handleCodechef}/>
            </div>
              
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
