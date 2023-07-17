import React, { useEffect  } from "react";
import { Link } from "react-router-dom";
import DTMC from "../../assets/images/dtmcolor.png";
import DTM from "../../assets/images/dtm.png";

const Navbar = () => {
  useEffect(() => {
    const checkBackgroundColor = () => {
      const body = document.body;
      const logo = document.getElementById("logo");
      const backgroundColor = window.getComputedStyle(body).backgroundColor;
      const isWhiteBackground =
          backgroundColor === "rgb(255, 255, 255)" || backgroundColor === "#ffffff";

      if (isWhiteBackground) {
        logo.src = DTMC; // Set black logo when background is white
      } else {
        logo.src = DTM; // Set white logo when background is not white
      }
    };

    // Call the function initially
    checkBackgroundColor();

    // Add event listener to check background color whenever the window is resized
    window.addEventListener("resize", checkBackgroundColor);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkBackgroundColor);
    };
  }, []);
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
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/service">Services</Link>
                        </li>
                        <li>
                          <Link to="/team">Team</Link>
                        </li>
                        <li>
                          <Link to="/case-studies">Case Studies</Link>
                        </li>
                        <li>
                          <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                          <Link to="/pricing-plans">Pricing</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
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
          <div className="sticky-header">
            <div className="auto-container">
              <div className="header-lower">
                <div className="main-box clearfix">
                  <div className="logo-box">
                    <div className="logo">
                      <Link to="/">
                        <img id={'logo'}
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
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/service">Services</Link>
                          </li>
                          <li>
                            <Link to="/team">Team</Link>
                          </li>
                          <li>
                            <Link to="/case-studies">Case Studies</Link>
                          </li>
                          <li>
                            <Link to="/projects">Projects</Link>
                          </li>
                          <li>
                            <Link to="/pricing-plans">Pricing</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
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
}

export default Navbar;
