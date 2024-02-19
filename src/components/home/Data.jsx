import React, { useEffect } from "react";
import Aos from "aos";

const Data = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    return (
        <div className="home_data">
            <h3 data-aos="fade-up" className="home_title">
                Mandiseli Mfeya
            </h3>
            <h3 className="home_subtitle">Junior Software Developer</h3>
            <p className="home_description">This is my official portfolio website to show all my
                Details and work Experience</p>

                <a href="#contact" className="button button--flex">Contact Me</a>
        </div>
        
        
    )
}

export default Data