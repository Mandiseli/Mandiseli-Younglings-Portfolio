import React, { useEffect } from "react"; // Import React and useEffect hook
import Aos from "aos"; // Import AOS library for animations

const Data = () => {
    useEffect(() => {
        // Initialize AOS library with duration of 2000 milliseconds
        Aos.init({ duration: 2000 });
    }, []); // Run this effect only once after initial render

    return (
        <div className="home_data">
            {/* Title with fade-up animation */}
            <h3 data-aos="fade-up" className="home_title">
                Mandiseli Mfeya
            </h3>
            {/* Subtitle */}
            <h3 className="home_subtitle">Junior Software Developer</h3>
            {/* Description */}
            <p className="home_description">
            Welcome to my official portfolio website. I am committed to pioneering
            innovative solutions and pushing the limits of technology. 
            With a solid background in Information Technology and specialized expertise in Business Applications, 
            I offer a distinctive combination of technical prowess and inventive
            problem-solving skills to each project I engage in.
            </p>
            {/* Contact button */}
            <a href="#contact" className="button button--flex">Contact Me</a>
        </div>
    );
}

export default Data; // Export the Data component
