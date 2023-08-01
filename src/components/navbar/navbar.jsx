import React, { useEffect, useState } from "react";
import Header from "./Header";
import DTMLogo from "../../DTM_Logo.png";
import {Link} from "react-router-dom";
import StickyHeader from "./StickyHeader";
import HeaderMobile from "./HeaderMobile"

const Navbar = () => {
  const imgSize= {
    maxHeight:'53px',
  }
  const handleToggleSideNav = () => {
    document.body.classList.toggle("active-side-nav");
  };
  const handleToggleMobileSideNav = () => {
    document.body.classList.toggle("mobile-menu-visible");
  };
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowpos = window.pageYOffset;
      const headerElement = document.querySelector(".main-header");
      const stickyHeaderElements = document.querySelectorAll(
          ".main-header .sticky-header, .header-style-two .outer-container, .header-style-four .header-lower, .header-style-six .outer-container"
      );
      const scrollLink = document.querySelector(".scroll-to-top");

      if (windowpos > 55) {
        headerElement.classList.add("fixed-header");
        stickyHeaderElements.forEach((element) => {
          element.classList.add("animated", "slideInDown");
        });
        scrollLink.style.display = "block";
        setIsFixedHeader(true);
      } else {
        headerElement.classList.remove("fixed-header");
        stickyHeaderElements.forEach((element) => {
          element.classList.remove("animated", "slideInDown");
        });
        scrollLink.style.display = "none";
        setIsFixedHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header className="main-header header-style-two">
        <div className="auto-container">
          <Header classOuter={'outer-box'} className={"theme-btn btn-style-one"}/>
        </div>
        <StickyHeader/>
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleToggleMobileSideNav}/>
          <div className="close-btn" onClick={handleToggleMobileSideNav}><span className="icon fas fa-times"/></div>
            <nav className="menu-box mCustomScrollbar _mCS_1 mCS_no_scrollbar">
              <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabIndex="0"
                   // style="max-height: 518px;"
              >
                <div id="mCSB_1_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                     // style="position:relative; top:0; left:0;"
                     dir="ltr"
                >
                  <div className="nav-logo">
                    <Link to="/">
                      <img src={DTMLogo} style={imgSize} alt="" title="" className="mCS_img_loaded"/>
                      </Link>
                    </div>
                  <div className="menu-outer">
                    <div className="collapse show navbar-collapse clearfix" id="navbarSupportedContent">
                      <HeaderMobile />
                    </div>
                  </div>
                  <div className="options-box clearfix">
                    <div className="social-box">
                      <ul className="social-icons">
                        <li>
                          <Link target='_blank' to="https://www.facebook.com/techdtm"><i className="fab fa-facebook-f"/></Link>
                        </li>
                        <li>
                          <Link target={'_blank'} to="https://www.instagram.com/devtechmasters"><i className="fab fa-instagram"/></Link>
                        </li>
                        <li>
                          <Link to="#"><i className="fab fa-linkedin"/></Link>
                        </li>
                        <li>
                          <Link target={'_blank'} to="https://www.youtube.com/@DevTechMasters"><i className="fab fa-youtube"/></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        </div>
      </header>
      <div className="form-back-drop" onClick={handleToggleSideNav}/>
      <section className="hidden-bar">
        <div className="inner-box">
          <div className="cross-icon" onClick={handleToggleSideNav} >
            <span className="fa fa-times" />
          </div>
          <div className="about-sec">
            <div className="logo">
              <Link to="/">
                <img src={DTMLogo} style={imgSize} alt="" title=""/>
              </Link>
            </div>
            <div className="title"><h2>About Us</h2></div>
            <p>
              We are full-service Digital marketing and Web Development company
              offering innovative web marketing solutions to mid to
              large size companies across the globe. As a leader in SEO,
              web design, ecommerce, website conversion, and Internet
              marketing services, our firm prides ourselves.
            </p>
            <Link to="/about" className="theme-btn btn-style-one" onClick={handleToggleSideNav}>
              <span className="txt">Learn More</span>
            </Link>
          </div>
          <div className="contact-info-box">
            <ul className="info-list">
              <li>support@devtechmasters.com</li>
              <li>+1 (971) 231-9745 </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link target='_blank' to="https://www.facebook.com/techdtm"><i className="fab fa-facebook-f"/></Link>
              </li>
              <li>
                <Link target={'_blank'} to="https://www.instagram.com/devtechmasters"><i className="fab fa-instagram"/></Link>
              </li>
              <li>
                <Link to="#"><i className="fab fa-linkedin"/></Link>
              </li>
              <li>
                <Link target={'_blank'} to="https://www.youtube.com/@DevTechMasters"><i className="fab fa-youtube"/></Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
