import React, { useEffect } from "react";
import Aos from "aos";


const Backend = () => {
     useEffect(() => {
         Aos.init({duration: 2000})
     }, []);
    return (
        <div  data-aos="fade-down" className="skills_content">
            <h3 className="skills_title">Backend Developer</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">Node.js</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">Python</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">Java</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">My SQL</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">Firebase</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skill_name">Vb.Net</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;
