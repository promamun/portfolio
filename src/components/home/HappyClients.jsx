import React, { Component } from "react";

class HappyClients extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/8.png)`
    };
    return (
      <div>
        <section className="fun-fact-section">
          <div className="outer-box" style={BgImage}>
            <div className="auto-container">
              <div className="fact-counter">
                <div className="row">
                  <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="count-box">
                      <div className="icon-box">
                        <span className="flaticon flaticon-project-management" />
                      </div>
                      <div className="text-box">
                        <div className="count">
                          <span
                            className="count-text"
                            data-speed="5000"
                            data-stop="345"
                          >
                            0
                          </span>
                          <i>+</i>
                        </div>
                        <h3 className="counter-title">Finished Projects</h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="count-box">
                      <div className="icon-box">
                        <span className="flaticon flaticon-award" />
                      </div>
                      <div className="text-box">
                        <div className="count">
                          <span
                            className="count-text"
                            data-speed="5000"
                            data-stop="17"
                          >
                            0
                          </span>
                          <i>+</i>
                        </div>
                        <h3 className="counter-title">Award View</h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                    data-wow-delay="800ms"
                  >
                    <div className="count-box">
                      <div className="icon-box">
                        <span className="flaticon flaticon-user-experience" />
                      </div>
                      <div className="text-box">
                        <div className="count">
                          <span
                            className="count-text"
                            data-speed="5000"
                            data-stop="10"
                          >
                            0
                          </span>
                          <i>+</i>
                        </div>
                        <h3 className="counter-title">Years Experience</h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                    data-wow-delay="1200ms"
                  >
                    <div className="count-box">
                      <div className="icon-box">
                        <span className="flaticon flaticon-diagram" />
                      </div>
                      <div className="text-box">
                        <div className="count">
                          <span
                            className="count-text"
                            data-speed="5000"
                            data-stop="489"
                          >
                            0
                          </span>
                        </div>
                        <h3 className="counter-title">Happy Clients</h3>
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

export default HappyClients;
