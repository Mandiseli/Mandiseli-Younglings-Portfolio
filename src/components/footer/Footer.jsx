import React from 'react'; // Import React library
import './footer.css'; // Import CSS styles for the footer

// Footer functional component
const Footer = () => {
    return (
        <footer className="footer"> {/* Footer container */}
            <div className="footer-text"> {/* Container for footer text */}
                {/* Copyright notice */}
                <p>Copyright &copy; 2024 by Mandiseli | All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; // Export Footer component

