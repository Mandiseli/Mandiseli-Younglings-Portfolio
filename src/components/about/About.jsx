// Import React library
import React from "react";

// Importing images and components
import AboutImg from "../../assets/home.jpg"; // Importing image for about section
import CV from "../../assets/myCV.pdf"; // Importing CV PDF
import Info from "./Info"; // Importing additional information component

// Importing CSS styles for the about section
import "./about.css";

// Functional component for the About section
const About = () => {
    return (
        <section className="about section" id="about"> {/* About section */}
            {/* Title and subtitle for the section */}
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid"> {/* Container for about information */}
                <img src={AboutImg} alt="" className="about_img" /> {/* Displaying about image */}

                <div className="about_data"> {/* About data container */}
                    <h3 className="about_head">Junior Software Developer</h3> {/* Job title */}
                    <Info/> {/* Additional information component */}
                    
                    {/* Description about the developer */}
                    <p className="about_description">Energetic & goal-driven, I am a graduate with National Diploma in Information Technology 
                    equipped with a solid academic background specializing in Business 
                    Applications mainly Information Systems, Development Software, Business 
                    Analysis and Technical support. My focus is on building my career in Tech space 
                    and learning as much as I can. I am seeking for vacant position which can be a 
                    graduate internship or entry level job in the field that aligns with my studies.
                    </p>

                    {/* Download link for the CV */}
                    <a download="myCV.pdf" href={CV} className="button button--flex">Download CV</a>
                </div>

            </div>
        </section>
    )
}

// Exporting the About component
export default About;
