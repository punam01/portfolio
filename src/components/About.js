import React from "react";
import '../styles/about.css'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function About(){
    return(
        <>
        <section>
            <div  className="container">
                <div className="social">
                    <FaLinkedin className="social-item"/>
                    <FaGithub className="social-item"/>
                    <FaEnvelope className="social-item"/>
                </div>
                <div className="intro">
                    <h1>Punam Kumavat 👋</h1>
                    <p className="typed">
                        <span><hr/></span>                        
                    </p>
                    <p className="desc">"As an undergraduate student from India, I am fueled by enthusiasm to venture beyond familiar boundaries and embrace new opportunities and challenges." </p>
                </div>
                <div className="profile">
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60img.jpg" alt="img"/>
                </div>
            </div>
        </section>
        </>
    );
}
export default About;