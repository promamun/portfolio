
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DTMLogo from "../../DTM_Logo.png";

const Header = () => {
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
    { path: "/about", label: "About" },
  ];

  return (
      <div className="header-lower">
        <div className="main-box clearfix">
          <div className="logo-box">
            <div className="logo">
              <Link to="/">
                <img
                    id="logo"
                    height={75}
                    width={142}
                    src={DTMLogo}
                    alt="DTM Logo"
                    title="DTM Logo"
                />
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            <div className="mobile-nav-toggler">
              <span className="icon flaticon flaticon-menu" />
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
              <Link to="/free-consultation" className="theme-btn btn-style-one">
                <span className="txt">Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

const Navbar = () => {
  return (
      <div>
        <header className="main-header header-style-two">
          <div className="auto-container">
            {/* Render the Header component */}
            <Header />
          </div>
          <div className="sticky-header">
            <div className="auto-container">
              {/* Render the Header component */}
              <Header />
            </div>
          </div>
        </header>
      </div>
  );
};

export default Navbar;
