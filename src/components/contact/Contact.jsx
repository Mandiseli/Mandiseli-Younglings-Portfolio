import React, { useRef, useEffect } from 'react'; // Importing React, useRef, and useEffect
import emailjs from '@emailjs/browser'; // Importing emailjs library for sending emails
import Aos from 'aos'; // Importing AOS library for animations
import ReCAPTCHA from "react-google-recaptcha"; // Importing ReCAPTCHA component for captcha functionality

// Importing CSS styles for the contact section
import "./contact.css";

// Functional component for the Contact section
const Contact = () => {
    
    // Creating a reference to the form element
    const form = useRef();

    // Callback function for ReCAPTCHA onChange event
    const onChange = () => {};

    // Function to send email
    const sendEmail = (e) => {
        e.preventDefault(); // Preventing default form submission behavior

         // Validate form fields
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

      // Check if ReCAPTCHA is checked
      const recaptchaToken = form.current['g-recaptcha-response'].value;
      if (!recaptchaToken) {
          alert('Please complete the ReCAPTCHA.');
          return;
      }

        // Sending form data using emailjs library
        emailjs
            .sendForm('service_r229kk7', 'template_duopm39', form.current, {
                publicKey: 'GO40VW9Lgnu9z7UdP', // Public key for emailjs
            })

            .then(() => {
                alert('Your message has been sent successfully!');
                form.current.reset(); // Resetting the form after successful submission
            })
            .catch((error) => {
                alert('An error occurred while sending your message. Please try again later.');
                console.error('EmailJS Error:', error);
            });
        e.target.reset(); // Resetting the form after submission
    };

    // useEffect hook to initialize AOS library for animations
    useEffect(() => {
        Aos.init({ duration: 2000 }); // Initializing AOS with a duration of 2000ms
    }, []);

    // JSX to render the Contact section
    return (
        <section className="contact section" id="contact"> {/* Contact section */}
            <h2 data-aos="fade-up" className="section_title">Contact Me</h2> {/* Title with AOS animation */}
            <span data-aos="fade-up" className="section_subtitle">Get In Touch</span> {/* Subtitle with AOS animation */}

            <div data-aos="zoom-in" className="contact_container container grid"> {/* Container for contact content */}
                <div className="contact_content"> {/* Container for contact information */}
                    <h3 className="contact_title">Talk to me</h3> {/* Title for contact information */}

                    <div className="contact_info"> {/* Container for contact cards */}
                        {/* Contact card for email */}
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i> {/* Icon for email */}
                            <h3 className="contact_card-title">Email</h3> {/* Title for email */}
                            <span className="contact_card-data">mandiseli@outlook.com</span> {/* Email address */}
                            <a href="https://mail.google.com" className="contact_button">Write me <i 
                                className="bx bx-link-external contact_button-icon"></i> </a> {/* Button to write email */}
                        </div>

                        {/* Contact card for Whatsapp */}
                        <div className="contact_card">
                            <i className="bx bxl-whatsapp-square contact_card-icon"></i> {/* Icon for Whatsapp */}
                            <h3 className="contact_card-title">Whatsapp</h3> {/* Title for Whatsapp */}
                            <span className="contact_card-data">0631095231</span> {/* Whatsapp number */}
                            <a href="https://www.whatsapp.com" className="contact_button">Write me <i 
                                className="bx bx-link-external contact_button-icon"></i> </a> {/* Button to write Whatsapp message */}
                        </div>

                        {/* Contact card for Messenger */}
                        <div className="contact_card">
                            <i className="bx bxl-messenger contact_card-icon"></i> {/* Icon for Messenger */}
                            <h3 className="contact_card-title">Messenger</h3> {/* Title for Messenger */}
                            <span className="contact_card-data">Mandiseli Mfeya</span> {/* Messenger name */}
                            <a href="https://www.messenger.com" className="contact_button">Write me <i 
                                className="bx bx-link-external contact_button-icon"></i> </a> {/* Button to write Messenger message */}
                        </div>
                    </div>
                </div>

                {/* Container for contact form */}
                <div className="contact_content">
                    <h3 className="contact_title">Write me your project</h3> {/* Title for contact form */}

                    {/* Form for sending message */}
                    <form ref={form} onSubmit={sendEmail} className="contact_form"> {/* Form element */}
                        {/* Input field for name */}
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Name</label> {/* Label for name input */}
                            <input 
                                type="text" 
                                name="name" 
                                className="contact_form-input"
                                placeholder="Full-Name" 
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                                /> {/* Input field for name */}
                        </div>

                        {/* Input field for email */}
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Mail</label> {/* Label for email input */}
                            <input 
                                type="email" 
                                name="email" 
                                className="contact_form-input"
                                placeholder="Email-Address"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)} 
                                /> {/* Input field for email */}
                        </div>

                        {/* Textarea field for message */}
                        <div className="contact_form-div contact_form-area">
                            <label className="contact_form-tag">Message</label> {/* Label for message textarea */}
                            <textarea 
                                name="message" 
                                cols="30" 
                                rows="10"
                                className="contact_form-input"
                                placeholder="Write your message"
                                // value={message}
                                // onChange={(e) => setMessage(e.target.value)}
                                ></textarea> {/* Textarea field for message */}
                        </div>

                        <div className='recaptcha'>
                             {/* ReCAPTCHA component */}
                            <ReCAPTCHA sitekey="6Ldte3kpAAAAAFHcLTc8PYX7BxNXTjVKwPCxOsLc" onChange={onChange}/> {/* ReCAPTCHA for captcha functionality */}
                        </div>

                        {/* Button to send message */}
                        <button className="button button-flex">Send Message</button> {/* Button to submit form */}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact; // Exporting the Contact component
