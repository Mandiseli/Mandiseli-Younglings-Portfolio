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
          <p>I specialize in building, creating, and maintaining websites. 
            Whether you need a brand new site or assistance 
            in maintaning an existing one, I have got you covered. Check out my portfolio
            to see some of my past projects and let me help you get your website online 
            in no time.</p> {/* Description of the service */}
        </div>

        <div data-aos="flip-down" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Python Development</h3>
          <p>As a Python Developer, I excel in programming and software development
            using the Python language. Whether its building web applications, automating 
            tasks, or developing complex algorithms, I have skills and experience to bring
            your ideas to life.
          </p>
        </div>

        <div data-aos="flip-left" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Software Developer</h3>
          <p>With proficiency in JavaScript, Vb.Net, Python and Java, I have broad range of experience
            in software application development. You can explore some of my 
            projects on my GitHub profile, showcasing my ability to deliver robust
            and scalable solutions tailored to your needs.
          </p>
        </div>

        <div data-aos="flip-right" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Java Development</h3>
          <p>Java is my language of choice in programming and software development.
            As a Java Developer, I specialize in leveraging the power of Java to create efficient
            and reliable applications that meet your requirements and exceed your expectations.
          </p>
        </div>

        <div data-aos="zoom-in" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">IT Technical Support</h3>
          <p>In addition to my development expertise, I also offer comprehensive IT Technical 
            support services. Whether you are facing software issues, hardware problems, or 
            network concerns, I'm here to provide timely assistance and ensure smooth
            operations for your business.</p>
        </div>

        <div data-aos="zoom-in" className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Database Administration</h3>
          <p>This services encompass the core responsibilities of a Database Administrator, 
            ensuring the efficient management, security, 
            and optimization of databases to support the organization's data-driven
            operations and objectives.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
