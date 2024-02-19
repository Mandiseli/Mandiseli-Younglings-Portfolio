import React, { useEffect } from "react";
import "./work.css";
import Works from "./Works";
import Aos from "aos";


const Work = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    return (
        <section className="work section" id="portfolio">
            <h2 data-aos="fade-up" className="section_title">Portfolio</h2>
            <span data-aos="fade-up" className="section_subtitle">My recent work</span>

            <Works/>
            
            
        </section>
    )
}

export default Work



