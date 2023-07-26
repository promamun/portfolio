import React from 'react'
import {Link, useLocation} from "react-router-dom";
import DTMLogo from "../../DTM_Logo.png";

const StickyHeader = () => {
    const scrollToTop = () => {
        // Smooth scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleToggleSideNav = () => {
        document.body.classList.toggle("active-side-nav");
    };
    const handleToggleMobileSideNav = () => {
        document.body.classList.toggle("mobile-menu-visible");
    };
    const location = useLocation();

    // Define an array of navigation links with their paths and labels
    const navigationLinks = [
        { path: "/", label: "Home" },
        { path: "/service", label: "Services" },
        { path: "/team", label: "Team" },
        { path: "/case-studies", label: "Case Studies" },
        { path: "/projects", label: "Projects" },
        { path: "/pricing-plans", label: "Pricing" },
        { path: "/contact", label: "Contact" },
        // { path: "/free-consultation", label: "Free Consultation" }
    ];

    return (
        <div className="sticky-header">
            <div className="auto-container clearfix">
                <div className="main-box clearfix">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/">
                                <img src={DTMLogo}
                                     height={75}
                                     width={142}
                                     alt=""
                                     title=""
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-outer clearfix">
                        <div className="mobile-nav-toggler" onClick={handleToggleMobileSideNav}>
                            <span className="icon flaticon flaticon-menu"/>
                        </div>
                        <nav className="main-menu navbar-expand-md">
                            <div
                                className="collapse show navbar-collapse clearfix"
                                id="navbarSupportedContent"
                            >
                                <ul className="navigation clearfix">
                                    {navigationLinks.map((link) => (
                                        <li
                                            key={link.path}
                                            className={location.pathname === link.path ? "current" : ""}
                                            onClick={scrollToTop}
                                        >
                                            <Link to={link.path} className="nav-link">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                        <div className="outer-box">
                            <div className="cart-box">
                                <div className="dropdown">
                                    <Link to={'/free-consultation'}
                                          className="theme-btn btn-style-one"
                                    >
                                        <span className="txt">Free Consultation</span>
                                    </Link>
                                </div>
                            </div>
                            <button className="nav-toggler" onClick={handleToggleSideNav}>
                                <span className="flaticon flaticon-menu"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StickyHeader