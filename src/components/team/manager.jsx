import React, { Component } from "react";
import TImage from "../../assets/images/resource/testimonial.png";
import MamunPro from "../../assets/images/team/Mamun_Pro.png";
import OwlCarousel from "react-owl-carousel";
import { Col, Row } from "react-bootstrap";

class Team extends Component {
  render() {
    return (
      <div>
        <section className="testimonial-section">
          <div className="auto-container">
            <Row>
              <Col lg="6" md="12" sm="12" className="image-column">
                <div className="image-box">
                  <figure>
                    <img src={TImage} alt="Testimonial Image" />
                  </figure>
                </div>
              </Col>
              <Col lg="6" md="12" sm="12" className="testimonial-column">
                <div className="sec-title">
                  <h6 className="subtitle">OUR TEAM</h6>
                  <h2>
                    Individually, our potential is limited,
                    <br />
                    but when we collaborate, our possibilities become boundless.
                  </h2>
                </div>
                <OwlCarousel
                  items={1}
                  loop={true}
                  className="testimonial-carousel owl-carousel owl-theme"
                >
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        “Working with{" "}
                        <strong className="text-success">Mamun Pro</strong> is
                        always an absolute joy, both personally and
                        professionally.{" "}
                        <strong className="text-success">Mamun Pro</strong> is
                        an amazing speaker. His experience, expertise and
                        genuine passion for what he does is obvious in every
                        word he says.”
                      </div>
                      <div className="icon-quote">
                        <i className="flaticon flaticon-quote" />
                      </div>
                      <div className="info-box">
                        <div className="thumb">
                          <img src={MamunPro} alt="Manager" />
                        </div>
                        <div className="text-box">
                          <h4 className="name">Mamun Pro</h4>
                          <span className="designation">
                            Project & Marketing Manager
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}

export default Team;
