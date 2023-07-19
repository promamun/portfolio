import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import DTMC from "../../assets/images/dtmcolor.png";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "red"
    };
  };

  return (
    <div>
      <header className="main-header header-style-two">
        <div className="auto-container">
          <div className="header-lower">
            <div className="main-box clearfix">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img height={75} width={142} src={DTMC} alt="" title="" />
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
                      <li>
                      
                        <NavLink style={navLinkStyles} to="/">
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink style={navLinkStyles} to="/service">
                          Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink style={navLinkStyles} to="/team">Team</NavLink>
                      </li>
                      <li>
                        <NavLink style={navLinkStyles} to="/case-studies">Case Studies</NavLink>
                      </li>
                      <li>
                        <NavLink style={navLinkStyles} to="/projects">Projects</NavLink>
                      </li>
                      <li>
                        <NavLink style={navLinkStyles} to="/pricing-plans">Pricing</NavLink>
                      </li>
                      <li>
                        <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
                      </li>
                      <li>
                        <NavLink style={navLinkStyles} to="/about">About</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="outer-box">
                  <NavLink
                    to="/free-consultation"
                    className="theme-btn btn-style-one"
                  >
                    <span className="txt">Free Consultation</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="auto-container">
            <div className="header-lower">
              <div className="main-box clearfix">
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img
                        id={"logo"}
                        height={75}
                        width={142}
                        src={DTMC}
                        alt=""
                        title=""
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
                        <li>
                          <NavLink style={navLinkStyles} to="/">Home</NavLink>
                        </li>
                        <li>
                          <NavLink style={navLinkStyles} to="/service">Services</NavLink>
                        </li>
                        <li>
                          <NavLink style={navLinkStyles} to="/team">Team</NavLink>
                        </li>
                        <li>
                          <NavLink style={navLinkStyles} to="/case-studies">Case Studies</NavLink>
                        </li>
                        <li>
                          <NavLink style={navLinkStyles} to="/projects">Projects</NavLink>
                        </li>
                        <li>
                          <NavLink style={navLinkStyles} to="/pricing-plans">Pricing</NavLink>
                        </li>
                        <li>
                          <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
                        </li>
                        <li>
                          <NavLink style={navLinkStyles} to="/about">About</NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="outer-box">
                    <Link
                      to="/free-consultation"
                      className="theme-btn btn-style-one"
                    >
                      <span className="txt">Free Consultation</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
