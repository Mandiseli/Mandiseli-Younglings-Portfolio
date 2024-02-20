import React from "react"; // Importing React library
import "./about.css"; // Importing CSS styles for the about section

// Functional component for displaying additional information
const Info = () => {
    return (
        <div className="about_info grid"> {/* Container for information */}
            {/* Box for experience */}
            <div className="about_box">
                {/* Icon for experience */}
                <i class="bx bx-award about_icon"></i>
                {/* Title for experience */}
                <h3 className="about_title">Experience</h3>
                {/* Subtitle for experience */}
                <span className="about_subtitle">1 year Experience</span>
            </div>

            {/* Box for completed projects */}
            <div className="about_box">
                {/* Icon for completed projects */}
                <i class="bx bx-briefcase-alt about_icon"></i>
                {/* Title for completed projects */}
                <h3 className="about_title">completed</h3>
                {/* Subtitle for completed projects */}
                <span className="about_subtitle">5 + Projects</span>
            </div>

            {/* Box for support */}
            <div className="about_box">
                {/* Icon for support */}
                <i class="bx bx-support about_icon"></i>
                {/* Title for support */}
                <h3 className="about_title">Support</h3>
                {/* Subtitle for support */}
                <span className="about_subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info; // Exporting the Info component
