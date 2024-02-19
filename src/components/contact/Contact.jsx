import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import ReCAPTCHA from "react-google-recaptcha";

import "./contact.css";

const Contact = () => {
    const onChange = () =>{}
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r229kk7', 
      'template_duopm39', 
      form.current, {
        publicKey: 'GO40VW9Lgnu9z7UdP',
      })
      e.target.reset()
  };
  useEffect(() => {
    Aos.init({duration: 2000})
}, []);
    return (
        <section className="contact section" id="contact">
            <h2 data-aos="fade-up" className="section_title">Contact Me</h2>
            <span data-aos="fade-up" className="section_subtitle">Get In Touch</span>

            <div data-aos="zoom-in" className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>

                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">mandiseli@outlook.com</span>

                            <a href="#" className="contact_button">Write me <i 
                            className="bx bx-right-arrow-alt 
                            contact_button-icon"></i> </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bx-whatsapp contact_card-icon"></i>

                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">0631095231</span>

                            <a href="#" className="contact_button">Write me <i 
                            className="bx bx-right-arrow-alt 
                            contact_button-icon"></i> </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-messenger contact_card-icon"></i>

                            <h3 className="contact_card-title">Messenger</h3>
                            <span className="contact_card-data">Mandiseli Mfeya</span>

                            <a href="#" className="contact_button">Write me <i 
                            className="bx bx-right-arrow-alt 
                            contact_button-icon"></i> </a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail}
                     className="contact_form">
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            className="contact_form-input"
                            placeholder="Full-Name" />
                        </div>

                        <div className="contact_form-div">
                            <label className="contact_form-tag">Mail</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="contact_form-input"
                            placeholder="Full-Name" />
                        </div>

                        <div className="contact_form-div contact_form-area">
                            <label className="contact_form-tag">Message</label>
                            <textarea 
                            name="message" 
                            cols="30" 
                            rows="10"
                            className="contact_form-input"
                            placeholder="Write your message"></textarea>
                        </div>
                        <ReCAPTCHA sitekey="Your client site key" onChange={onChange}/>

                        <button className="button button-flex">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact