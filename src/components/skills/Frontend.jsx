import React, { useEffect } from "react";
import Aos from "aos";

const FrontEnd = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    return (
        <div  data-aos="fade-up" className="skills_content">
            <h3 className="skills_title">Frontend Developer</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">HTML</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">CSS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">JavaScript</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">Bootstrap</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">Git</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">React</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FrontEnd;