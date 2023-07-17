import React, { Component } from "react";
import { Link } from "react-router-dom";
import ALLIMG1 from "../../assets/images/resource/service-center.png";

class Service extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/10.png)`
    };
    const serviceBlock = {
      backgroundImage: "visibility: visible",
      "animation-duration": "1500ms",
      "animation-delay": "0ms",
      "animation-name": "fadeInLeft"
    };
    const serviceBlock1 = {
      backgroundImage: "visibility: visible",
      "animation-duration": "1500ms",
      "animation-delay": "250ms",
      "animation-name": "fadeInLeft"
    };
    const serviceBlock2 = {
      backgroundImage: "visibility: visible",
      "animation-duration": "1500ms",
      "animation-delay": "500ms",
      "animation-name": "fadeInLeft"
    };
    const serviceBlock3 = {
      backgroundImage: "visibility: visible",
      "animation-duration": "1500ms",
      "animation-delay": "0ms",
      "animation-name": "fadeInRight"
    };
    const serviceBlock4 = {
      backgroundImage: "visibility: visible",
      "animation-duration": "1500ms",
      "animation-delay": "250ms",
      "animation-name": "fadeInRight"
    };
    const serviceBlock5 = {
      backgroundImage: "visibility: visible",
      "animation-duration": "1500ms",
      "animation-delay": "500ms",
      "animation-name": "fadeInRight"
    };
    return (
      <div>
        <section className="services-section altrenate" style={BgImage}>
          <div className="container-fluid">
            <div className="sec-title text-center light">
              <h6 className="subtitle">Best Service For You</h6>
              <h2>
                Web Design & Development <br />
                Digital Marketing & SEO
              </h2>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                <div className="left-column pull-left col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="service-block-two">
                      <div
                        className="inner-box wow fadeInLeft animated"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                        style={serviceBlock}
                      >
                        <div className="icon-box red">
                          <span className="icon flaticon flaticon-social-media" />
                        </div>
                        <div className="text-box">
                          <h4>
                            <Link to="/blog-detail">Social Media Marketing</Link>
                          </h4>
                          <p>
                            Elevate Your Brand's Digital Presence. Our social media marketing services unlock the power of social platforms to drive brand awareness, engagement, and achieve impactful results..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="service-block-two">
                      <div
                        className="inner-box wow fadeInLeft animated"
                        data-wow-delay="250ms"
                        data-wow-duration="1500ms"
                        style={serviceBlock1}
                      >
                        <div className="icon-box green">
                          <span className="icon flaticon flaticon-seo" />
                        </div>
                        <div className="text-box">
                          <h4>
                            <Link to="/blog-detail">SEO Optimization</Link>
                          </h4>
                          <p>
                            Boost Your Online Visibility and Drive Organic Traffic.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="service-block-two">
                      <div
                        className="inner-box wow fadeInLeft animated"
                        data-wow-delay="500ms"
                        data-wow-duration="1500ms"
                        style={serviceBlock2}
                      >
                        <div className="icon-box light-blue">
                          <span className="icon flaticon flaticon-social-media" />
                        </div>
                        <div className="text-box">
                          <h4>
                            <Link to="/blog-detail">Facebook Marketing</Link>
                          </h4>
                          <p>
                            Harness the Power of Facebook for Business Growth. Unlock the potential of the world's largest social media platform
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div
                    className="inner-column wow zoomIn"
                    data-wow-delay="600ms"
                  >
                    <div className="image-box">
                      <figure>
                        <img
                          src={ALLIMG1}
                          alt="service center"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="right-column pull-right col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="service-block-three">
                      <div
                        className="inner-box wow fadeInRight animated"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                        style={serviceBlock3}
                      >
                        <div className="icon-box blue">
                          <span className="icon flaticon flaticon-computer" />
                        </div>
                        <div className="text-box">
                          <h4>
                            <Link to="/blog-detail">Web Development</Link>
                          </h4>
                          <p>
                            Building websites that drive growth, engage customers, Make brand.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="service-block-three">
                      <div
                        className="inner-box wow fadeInRight animated"
                        data-wow-delay="250ms"
                        data-wow-duration="1500ms"
                        style={serviceBlock4}
                      >
                        <div className="icon-box purple">
                          <span className="icon flaticon flaticon-3d-modeling" />
                        </div>
                        <div className="text-box">
                          <h4>
                            <Link to="/blog-detail">Frontend Development</Link>
                          </h4>
                          <p>
                            Frontend development expertise brings websites and applications to life, combining cutting-edge technologies, intuitive design, and seamless interactions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="service-block-three">
                      <div
                        className="inner-box wow fadeInRight animated"
                        data-wow-delay="500ms"
                        data-wow-duration="1500ms"
                        style={serviceBlock5}
                      >
                        <div className="icon-box yellow">
                          <span className="icon flaticon flaticon-computer" />
                        </div>
                        <div className="text-box">
                          <h4>
                            <Link to="/blog-detail">CMS Development</Link>
                          </h4>
                          <p>
                            WordPress, Shopify, and Wix development websites, seamlessly integrating powerful E-commerce functionalities In a Short Time.
                          </p>
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
