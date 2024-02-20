import React, { useEffect } from "react"; // Import React and useEffect hook
import "./home.css"; // Import the CSS file for styling
import Social from "./Social"; // Import the Social component
import Data from "./Data"; // Import the Data component

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                {/* Grid layout for home content */}
                <div className="home_content grid">
                    {/* Render the Social component */}
                    <Social/>
                    
                    {/* Placeholder for home image, possibly for future implementation */}
                    <div className="home_img"></div>
                    
                    {/* Render the Data component */}
                    <Data/>
                </div>
            </div>
        </section>
    );
}

export default Home; // Export the Home component
