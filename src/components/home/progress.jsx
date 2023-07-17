import React, { Component } from "react";
import proImage1 from "../../assets/images/resource/progress-1.png";
class Progress extends Component {
  parentRef = React.createRef();
  componentDidMount() {
    const innerChild = this.parentRef.current.querySelectorAll(
      ".progress-box .progress-bar .bar-inner .progress-line"
    );
    innerChild.forEach((child) => {
      var percent = child.getAttribute("data-width");
      child.style.width = `${percent}%`;
    });
  }
  render() {
    return (
      <div>
        <section className="progress-sec">
          <div className="progress-bg" />
          <div className="container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="content-box">
                  <div className="sec-title text-left">
                    <h6 className="subtitle">Our Benefits</h6>
                    <h2>
                      Get more visitors on your website
                    </h2>
                    <p>
                      As a leader in Web Development, web design, ecommerce, website
                      conversion, SEO, & Internet marketing services, our firm prides.
                    </p>
                  </div>
                  <div className="progress-levels" ref={this.parentRef}>
                    <div
                      className="progress-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="0ms"
                    >
                      <div className="progress-header clearfix">
                        <div className="box-title">Web Design & Development</div>
                        <div className="progress-percentage">
                          <div className="count-box">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="100"
                            >
                              0
                            </span>
                            %
                          </div>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" data-width="100" />
                        </div>
                      </div>
                    </div>

                    <div
                      className="progress-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="0ms"
                    >
                      <div className="progress-header clearfix">
                        <div className="box-title">WordPress, Shopify, and Wix (CMS Development)</div>
                        <div className="progress-percentage">
                          <div className="count-box">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="100"
                            >
                              0
                            </span>
                            %
                          </div>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" data-width="100" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="progress-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="0ms"
                    >
                      <div className="progress-header clearfix">
                        <div className="box-title">Social Media Marketing</div>
                        <div className="progress-percentage">
                          <div className="count-box">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="80"
                            >
                              0
                            </span>
                            %
                          </div>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" data-width="80" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="progress-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="0ms"
                    >
                      <div className="progress-header clearfix">
                        <div className="box-title">Facebook Marketing</div>
                        <div className="progress-percentage">
                          <div className="count-box">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="90"
                            >
                              0
                            </span>
                            %
                          </div>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" data-width="90" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="progress-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="0ms"
                    >
                      <div className="progress-header clearfix">
                        <div className="box-title">SEO Optimization</div>
                        <div className="progress-percentage">
                          <div className="count-box">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="80"
                            >
                              0
                            </span>
                            %
                          </div>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" data-width="80" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="progress-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="0ms"
                    >
                      <div className="progress-header clearfix">
                        <div className="box-title">FREE CONSULTING</div>
                        <div className="progress-percentage">
                          <div className="count-box">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="100"
                            >
                              0
                            </span>
                            %
                          </div>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" data-width="100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-cloumn col-lg-6 col-md-12 col-sm-12">
                <div className="image-box">
                  <figure>
                    <img src={proImage1} alt="progress image" />
                  </figure>
                  <div className="animated-img-1" />
                  <div className="animated-img-2" />
                  <div className="animated-img-3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Progress;
