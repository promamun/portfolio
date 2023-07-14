import React, { Component } from "react";
import { Link } from "react-router-dom";
import ServiceImage from "../../assets/images/services/1.png";
import ServiceImage1 from "../../assets/images/services/2.png";
import ServiceImage2 from "../../assets/images/services/3.png";
class Service extends Component {
  render() {
    return (
      <div>
        <section className="services-section">
          <div className="auto-container">
            <div className="row">
              <div className="services-box col-lg-4 col-md-6 col-sm-12">
                <div className="service-block">
                  <div className="inner-box">
                    <div className="service-box-front">
                      <div className="image-box">
                        <figure className="image">
                          <a href="service-detail.html">
                            <img src={ServiceImage} alt="Services Image" />
                          </a>
                        </figure>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link to="/service-detail">
                            Conversion Rate Optimization
                          </Link>
                        </h3>
                        <p>
                          Turn your visitors into customers with our team of
                          experts. We'll analyze your website and create a
                          conversion-rate strategy.
                        </p>
                        <div className="link-box">
                          <Link
                            to="/service-detail"
                            className="theme-btn btn-style-two"
                          >
                            <span className="txt">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="service-box-back">
                      <div className="service-box-wave">
                        <svg
                          className="waves"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 24 150 28"
                          preserveAspectRatio="none"
                          shapeRendering="auto"
                        >
                          <defs>
                            <path
                              id="gentle-wave"
                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                          </defs>
                          <g className="parallax">
                            <use
                              xlinkHref="#gentle-wave"
                              x="48"
                              y="0"
                              fill="rgba(0,31,231,0.7"
                            />
                            <use
                              xlinkHref="#gentle-wave"
                              x="48"
                              y="3"
                              fill="rgba(0,34,225,0.7)"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="image-box">
                        <figure className="image">
                          <Link to="/service-detail">
                            <img src={ServiceImage} alt="Services Image" />
                          </Link>
                        </figure>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link to="/service-detail">
                            Conversion Rate Optimization
                          </Link>
                        </h3>
                        <p>
                          Turn your visitors into customers with our team of
                          experts. We'll analyze your website and create a
                          conversion-rate strategy.
                        </p>
                        <div className="link-box">
                          <Link
                            to="/service-detail"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-box col-lg-4 col-md-6 col-sm-12">
                <div className="service-block active">
                  <div className="inner-box">
                    <div className="service-box-front">
                      <div className="image-box">
                        <figure className="image">
                          <Link to="/service-detail">
                            <img src={ServiceImage1} alt="Services Image" />
                          </Link>
                        </figure>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link to="/service-detail">
                            Online Reputation Management
                          </Link>
                        </h3>
                        <p>
                          Analyzing negative materials about your brand and
                          addressing them with sentiment analysis and press
                          release distribution.
                        </p>
                        <div className="link-box">
                          <Link
                            to="/service-detail"
                            className="theme-btn btn-style-two"
                          >
                            <span className="txt">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="service-box-back">
                      <div className="service-box-wave">
                        <svg
                          className="waves"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 24 150 28"
                          preserveAspectRatio="none"
                          shapeRendering="auto"
                        >
                          <defs>
                            <path
                              id="gentle-wave"
                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                          </defs>
                          <g className="parallax">
                            <use
                              xlinkHref="#gentle-wave"
                              x="48"
                              y="0"
                              fill="rgba(0,31,231,0.7"
                            />
                            <use
                              xlinkHref="#gentle-wave"
                              x="48"
                              y="3"
                              fill="rgba(0,34,225,0.7)"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="image-box">
                        <figure className="image">
                          <Link to="/service-detail">
                            <img src={ServiceImage1} alt="Services Image" />
                          </Link>
                        </figure>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link to="/service-detail">
                            Online Reputation Management
                          </Link>
                        </h3>
                        <p>
                          Analyzing negative materials about your brand and
                          addressing them with sentiment analysis and press
                          release distribution.
                        </p>
                        <div className="link-box">
                          <Link
                            to="/service-detail"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-box col-lg-4 col-md-6 col-sm-12">
                <div className="service-block">
                  <div className="inner-box">
                    <div className="service-box-front">
                      <div className="image-box">
                        <figure className="image">
                          <Link to="/service-detail">
                            <img src={ServiceImage2} alt="Services Image" />
                          </Link>
                        </figure>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link to="/service-detail">Online Accounting</Link>
                        </h3>
                        <p>
                          Analyzing negative materials about your brand and
                          addressing them with sentiment analysis and press
                          release distribution.
                        </p>
                        <div className="link-box">
                          <Link
                            to="/service-detail"
                            className="theme-btn btn-style-two"
                          >
                            <span className="txt">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="service-box-back">
                      <div className="service-box-wave">
                        <svg
                          className="waves"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 24 150 28"
                          preserveAspectRatio="none"
                          shapeRendering="auto"
                        >
                          <defs>
                            <path
                              id="gentle-wave"
                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                          </defs>
                          <g className="parallax">
                            <use
                              xlinkHref="#gentle-wave"
                              x="48"
                              y="0"
                              fill="rgba(0,31,231,0.7"
                            />
                            <use
                              xlinkHref="#gentle-wave"
                              x="48"
                              y="3"
                              fill="rgba(0,34,225,0.7)"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="image-box">
                        <figure className="image">
                          <Link to="/service-detail">
                            <img src={ServiceImage2} alt="Services Image" />
                          </Link>
                        </figure>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <a href="service-detail.html">The board</a>
                        </h3>
                        <p>
                          Analyzing negative materials about your brand and
                          addressing them with sentiment analysis and press
                          release distribution.
                        </p>
                        <div className="link-box">
                          <Link
                            to="/service-detail"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Service;
