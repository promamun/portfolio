import React, { Component } from "react";
import {Link} from "react-router-dom";
import Logo from '../../DTM_Logo.png'

class Footer extends Component {
  render() {
    const currentDate = new Date().getFullYear();
    const BgImage = {
      backgroundImage: `url(images/background/6.png)`
    };
    return (
      <div>
        <footer className="main-footer" style={BgImage}>
          <div className="auto-container">
            <div className="widgets-section">
              <div className="row">
                <div className="newslatter-column col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="row clearfix">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="newslatter-form">
                          <form
                            method="post"
                            action="https://expert-themes.com/html/sola/blog.html"
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                name="getstarted"
                                placeholder="Enter Your Email Address ......."
                              />
                              <button
                                type="submit"
                                className="theme-btn btn-style-one"
                              >
                                <span className="txt">Submit Now</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="contact-box-footer">
                          <div className="content-block">
                            <div className="icon-box">
                              <i className="flaticon flaticon-communication"/>
                            </div>
                            <div className="text-box">
                              <p>+1 (845) 579-2174 </p>
                              <a href="mailto:support@devtechmasters.com">
                                support@devtechmasters.com
                              </a>
                            </div>
                          </div>
                          <div className="content-block">
                            <div className="icon-box">
                              <i className="flaticon flaticon-location"/>
                            </div>
                            <div className="text-box">
                              <p>
                                28 Green Tower, <br />
                                Street Name, New York
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="footer-widget about-widget">
                        <div className="footer-logo">
                          <figure>
                            <Link to="/">
                              <img height={75} width={142} src={Logo} alt="DTM" />
                            </Link>
                          </figure>
                        </div>
                        <div className="widget-content">
                          <p>
                            DTM have much planned for the future, working with
                            great clients and continued software development & Digital World. If
                            you’d like to join our team. Just Call US.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="footer-widget gallery-widget">
                        <h4 className="widget-title">Projects</h4>
                        <div className="widget-content">
                          <div className="outer clearfix">
                            <figure className="image">
                              <a
                                href="images/resource/work-thumb-1.jpg"
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img
                                  src="images/resource/work-thumb-1.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                            <figure className="image">
                              <a
                                href="images/resource/work-thumb-2.jpg"
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img
                                  src="images/resource/work-thumb-2.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                            <figure className="image">
                              <a
                                href="images/resource/work-thumb-3.jpg"
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img
                                  src="images/resource/work-thumb-3.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                            <figure className="image">
                              <a
                                href="images/resource/work-thumb-4.jpg"
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img
                                  src="images/resource/work-thumb-4.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                            <figure className="image">
                              <a
                                href="images/resource/work-thumb-5.jpg"
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img
                                  src="images/resource/work-thumb-5.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                            <figure className="image">
                              <a
                                href="images/resource/work-thumb-6.jpg"
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img
                                  src="images/resource/work-thumb-1.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                  <div className="row clearfix">
                    <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget">
                        <h4 className="widget-title">Useful links</h4>
                        <div className="widget-content">
                          <ul className="list">
                            <li><Link to="/service">Service</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                          </ul>
                          <ul className="list">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/free-consultation">Free Consultation</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                      <div className="footer-widget contact-widget">
                        <h4 className="widget-title">Contacts</h4>
                        <div className="widget-content">
                          <ul className="list-style-one">
                            <li>
                              <span className="icon fas fa-envelope" />
                              +1 (845) 579-2174
                            </li>
                            <li>
                              <span className="icon fas fa-map-marker-alt" />
                              28 Green Tower, Street Name, New York
                            </li>
                            <li>
                              <span className="icon fas fa-envelope" />
                              support@devtechmasters.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="inner-container clearfix">
                <div className="social-links">
                  <ul className="social-icon-two">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <p>
                    Copyright © {currentDate} Portfolio by{" "}
                    <Link to="#">DevTechMasters.</Link> All right reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
