import React, { useEffect } from "react";
import Aos from "aos"; // Importing the AOS library for animations
import "./services.css"; // Importing the CSS file for styling

const Services = () => {
  useEffect(() => {
    Aos.init({duration: 2000}) // Initializing AOS library with a duration of 2000ms
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <section className="services section" id="services">
      {/* Title and subtitle for the services section */}
      <h2 data-aos="fade-up" className="section_title">Services</h2>
      <span data-aos="fade-up" className="section_subtitle">What I Offer</span> 

      {/* Container for displaying individual services */}
      <div className="services-container container grid">
        {/* Individual service items */}
        <div data-aos="flip-up" className="services_content">
          <i className="uil uil services_icon"></i> {/* Icon for the service */}
          <h3 className="services_title">Web Development</h3> {/* Title of the service */}
          <p>Building, Creating and Maintaining. View my portfolio and allow me to get your website online in no time.</p> {/* Description of the service */}
        </div>

        <div data-aos="flip-down" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Python Development</h3>
          <p>A Python Developer specializes in programming and software development using the Python language.</p>
        </div>

        <div data-aos="flip-left" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Software Developer</h3>
          <p>As a software developer experienced in JavaScript, VB.Net, Java and Python, I specialize in Software Application. You can find some of my projects on my GitHub Profile.</p>
        </div>

        <div data-aos="flip-right" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Java Developer</h3>
          <p>Java developers use the Java language for programming and software development.</p>
        </div>

        <div data-aos="zoom-in" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">IT Technical Support</h3>
          <p>As a software developer experienced in JavaScript, VB.Net, Java, and Python, I specialize in Software Application. You can find some of my projects on my GitHub Profile.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
