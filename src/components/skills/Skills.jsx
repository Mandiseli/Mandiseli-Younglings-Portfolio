import React, { useEffect } from "react";
import "./skills.css";
import FrontEnd from "./Frontend";
import Backend from "./Backend";
import Aos from "aos";



const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    return (
        <section className="skills section" id="skills">
            <h2 data-aos="fade-up" className="section_title">Skills</h2>
            <span data-aos="fade-up" className="section_subtitle">My Technical Level</span>

            <div className="skills_container container grid">
                <FrontEnd/>
                <Backend/>

            </div>


        </section>
    )
}

export default Skills;