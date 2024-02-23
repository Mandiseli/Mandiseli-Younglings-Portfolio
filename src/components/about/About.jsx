// Import React library
import React from "react";

// Importing images and components
import AboutImg from "../../assets/me.jpg"; // Importing image for about section
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
                    <p className="about_description">A highly motivated graduate with a National Diploma in Information Technology, 
                    specializing in Business Applications, seeks opportunities in the tech industry. 
                    Equipped with strong academic credentials and a passion for continuous learning, 
                    I am eager to apply theoretical knowledge in practical settings, 
                    embracing challenges and experiences to propel career growth. 
                    Driven by a desire to make a significant impact, they are ready to embark on a journey of 
                    professional development and discovery within the dynamic tech space.
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
