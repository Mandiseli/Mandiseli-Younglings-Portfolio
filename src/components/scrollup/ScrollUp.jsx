import React from 'react';
import "./scrollup.css"; // Importing the CSS file for styling

const ScrollUp = () => {
    // Adding a scroll event listener to the window object
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        // When the vertical scroll position is higher than 560 viewport height,
        // add the "show-scroll" class to the element with the "scrollup" class
        if (this.scrollY >= 560) 
            scrollUp.classList.add("show-scroll");
        else
            scrollUp.classList.remove("show-scroll");
    });

    // Rendering the scroll-up button with an arrow icon
    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup_icon"></i> {/* Arrow icon */}
        </a>
    );
}

export default ScrollUp; // Exporting the ScrollUp component
