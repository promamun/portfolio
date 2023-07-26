import React, { useState } from 'react';
// import './ScrollToTopButton.css'; // Create a CSS file for styling the scroll-to-top button

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the scroll-to-top button when the user scrolls down 200 pixels
        setIsVisible(window.scrollY > 200);
    };

    const scrollToTop = () => {
        // Smooth scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Attach the scroll event listener to show/hide the button
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`scroll-to-top scroll-to-target theme-btn btn-style-one ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <span className="txt"><i className="fas fa-arrow-up"/></span>
        </div>
    );
};

export default ScrollToTop;