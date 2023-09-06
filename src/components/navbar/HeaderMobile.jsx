import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
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
    { path: "/free-consultation", label: "Free Consultation" }
  ];
  const handleToggleMobileSideNav = () => {
    document.body.classList.toggle("mobile-menu-visible");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>
      <ul className="navigation clearfix">
        {navigationLinks.map((link) => (
          <li
            key={link.path}
            className={location.pathname === link.path ? "current" : ""}
            onClick={handleToggleMobileSideNav}
          >
            <Link to={link.path} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
