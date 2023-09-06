import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../DTM_Logo.png";
import Button from "../contact/Button";
import Project1 from "../../assets/images/resource/work-thumb-1.jpg";
import Project2 from "../../assets/images/resource/work-thumb-1.jpg";
import Project3 from "../../assets/images/resource/work-thumb-2.jpg";
import Project4 from "../../assets/images/resource/work-thumb-2.jpg";
import Project5 from "../../assets/images/resource/work-thumb-3.jpg";
import Project6 from "../../assets/images/resource/work-thumb-3.jpg";
import {Col, Form, Row} from "react-bootstrap";
import CustomInput from '../contact/CustomInput'

class Footer extends Component {
  render() {
    const currentDate = new Date().getFullYear();
    const BgImage = {
      backgroundImage: `url(/images/background/6.png)`
    };
    return (
      <div>
        <footer className="main-footer" style={BgImage}>
          <div className="auto-container">
            <div className="widgets-section">
              <Row>
                <Col xl={'12'} lg={'12'} md={'12'} sm={'12'} className="newslatter-column">
                  <div className="inner-column">
                    <Row className="clearfix">
                      <Col xl={'6'} lg={'6'} md={'12'} sm={'12'}>
                        <div className="newslatter-form">
                          <Form>
                            <Form.Group>
                              <CustomInput
                                type="text"
                                name="email"
                                placeholder="Enter Your Email Address ......."
                              />
                              <Button
                                type={"submit"}
                                className={"theme-btn btn-style-one"}
                              >
                                {"Submit Now"}
                              </Button>
                            </Form.Group>
                          </Form>
                        </div>
                      </Col>
                      <Col xl={'6'} lg={'6'} md={'12'} sm={'12'}>
                        <div className="contact-box-footer">
                          <div className="content-block">
                            <div className="icon-box">
                              <i className="flaticon flaticon-communication" />
                            </div>
                            <div className="text-box">
                              <p>+1 (971) 231-9745 </p>
                              <Link to="mailto:support@devtechmasters.com">
                                support@devtechmasters.com
                              </Link>
                            </div>
                          </div>
                          <div className="content-block">
                            <div className="icon-box">
                              <i className="flaticon flaticon-location" />
                            </div>
                            <div className="text-box">
                              <p>
                                2124 NE19th Street, #F240 <br />
                                Gresham, OR 97030
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xl={'6'} lg={'12'} md={'12'} sm={'12'} className="big-column">
                  <Row >
                    <Col xl={'6'} lg={'6'} md={'6'} sm={'12'} className="footer-column">
                      <div className="footer-widget about-widget">
                        <div className="footer-logo">
                          <figure>
                            <Link to="/">
                              <img src={Logo} alt="DTM" />
                            </Link>
                          </figure>
                        </div>
                        <div className="widget-content">
                          <p>
                            DTM have much planned for the future, working with
                            great clients and continued software development &
                            Digital World. If you’d like to join our team. Just
                            Call US.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xl={'6'} lg={'6'} md={'6'} sm={'12'} className="footer-column">
                      <div className="footer-widget gallery-widget">
                        <h4 className="widget-title">Projects</h4>
                        <div className="widget-content">
                          <div className="outer clearfix">
                            <figure className="image">
                              <Link
                                to={Project1}
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img src={Project1} alt="" />
                              </Link>
                            </figure>
                            <figure className="image">
                              <Link
                                to={Project2}
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img src={Project2} alt="" />
                              </Link>
                            </figure>
                            <figure className="image">
                              <Link
                                to={Project3}
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img src={Project3} alt="" />
                              </Link>
                            </figure>
                            <figure className="image">
                              <Link
                                to={Project4}
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img src={Project4} alt="" />
                              </Link>
                            </figure>
                            <figure className="image">
                              <Link
                                to={Project5}
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img src={Project5} alt="" />
                              </Link>
                            </figure>
                            <figure className="image">
                              <Link
                                to={Project6}
                                className="lightbox-image"
                                title="Image Title Here"
                              >
                                <img src={Project6} alt="" />
                              </Link>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xl={'6'} lg={'12'} md={'12'} sm={'12'} className="big-column">
                  <Row className="clearfix">
                    <Col xl={'7'} lg={'6'} md={'6'} sm={'12'} className="footer-column">
                      <div className="footer-widget links-widget">
                        <h4 className="widget-title">Useful links</h4>
                        <div className="widget-content">
                          <ul className="list">
                            <li>
                              <Link to="/service">Service</Link>
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
                              <Link to="/pricing">Pricing</Link>
                            </li>
                          </ul>
                          <ul className="list">
                            <li>
                              <Link to="/about">About Us</Link>
                            </li>
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                              <Link to="/privacy">Privacy Policy</Link>
                            </li>
                            <li>
                              <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                              <Link to="/free-consultation">
                                Free Consultation
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col xl={'5'} lg={'6'} md={'6'} sm={'12'} className="footer-column">
                      <div className="footer-widget contact-widget">
                        <h4 className="widget-title">Contacts</h4>
                        <div className="widget-content">
                          <ul className="list-style-one">
                            <li>
                              <span className="icon fas fa-envelope" />
                              +1 (971) 231-9745
                            </li>
                            <li>
                              <span className="icon fas fa-map-marker-alt" />
                              2124 NE19th Street, #F240 Gresham, OR 97030
                            </li>
                            <li>
                              <span className="icon fas fa-envelope" />
                              support@devtechmasters.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="inner-container clearfix">
                <div className="social-links">
                  <ul className="social-icon-two">
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.facebook.com/techdtm"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        target={"_blank"}
                        to="https://www.instagram.com/devtechmasters"
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        target={"_blank"}
                        to="https://www.youtube.com/@DevTechMasters"
                      >
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <p>
                    Copyright © {currentDate} Agency by{" "}
                    <Link to="/">DevTechMasters.</Link> All right reserved
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
