import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import { Col, Row } from "react-bootstrap";
import TSIMG1 from "../../assets/images/resource/testimonial.png";
import TSIMG2 from "../../assets/images/resource/alex.png";
import TSIMG3 from "../../assets/images/resource/client_gsbd.png";
import TSIMG4 from "../../assets/images/resource/WilliamSmith.png";
import TSIMG5 from "../../assets/images/resource/8-business-woman-girl-png-image.png";

class Testimonials extends Component {
  render() {
    return (
      <div>
        <section className="testimonial-section">
          <div className="auto-container">
            <Row>
              <Col lg="6" md="12" sm="12" className="image-column">
                <div className="image-box">
                  <figure>
                    <img src={TSIMG1} alt="TestimonialImage" />
                  </figure>
                </div>
              </Col>
              <Col lg="6" md="12" sm="12" className="testimonial-column">
                <div className="sec-title">
                  <h6 className="subtitle">Testimonials</h6>
                  <h2>
                    What clients are saying <br />
                    for our work
                  </h2>
                </div>
                <OwlCarousel
                  items={1}
                  autoPlay={true}
                  loop={true}
                  nav={true}
                  className="testimonial-carousel owl-carousel owl-theme"
                >
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        Collaborating with this agency on our renovation tiles
                        website has been extraordinary. They have metamorphosed
                        our obsolete website into a visually captivating
                        platform that flawlessly presents our tile products. The
                        team's proficiency, meticulousness, and innovative
                        approach have genuinely amazed us."
                      </div>
                      <div className="icon-quote">
                        <i className="flaticon flaticon-quote" />
                      </div>
                      <div className="info-box">
                        <div className="thumb">
                          <img src={TSIMG2} alt="" />
                        </div>
                        <div className="text-box">
                          <h4 className="name">Alex</h4>
                          <span className="designation">
                            Business Owner (USA)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        "We are highly amazed by the logistic website crafted by
                        this agency. They flawlessly grasped our business
                        requirements and designed a user-friendly interface that
                        simplifies operations. The team's professionalism,
                        responsiveness, and outstanding outcomes have gone
                        beyond our expectations."
                      </div>
                      <div className="icon-quote">
                        <i className="flaticon flaticon-quote" />
                      </div>
                      <div className="info-box">
                        <div className="thumb">
                          <img src={TSIMG3} alt="" />
                        </div>
                        <div className="text-box">
                          <h4 className="name">MD. SHAH ALAM</h4>
                          <span className="designation">
                            Business Owner (BANGLADESH)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        "We are absolutely awestruck by the logistic website
                        meticulously crafted by this extraordinary agency. With
                        impeccable precision, they effortlessly grasped our
                        unique business requirements, weaving them into a
                        stunning and user-friendly interface that elegantly
                        simplifies operations. The team's unwavering
                        professionalism, lightning-fast responsiveness, and
                        exceptional results have not just met, but truly
                        exceeded our wildest expectations. A heartfelt
                        appreciation to the remarkable talents behind this
                        remarkable endeavor."
                      </div>
                      <div className="icon-quote">
                        <i className="flaticon flaticon-quote" />
                      </div>
                      <div className="info-box">
                        <div className="thumb">
                          <img src={TSIMG4} alt="" />
                        </div>
                        <div className="text-box">
                          <h4 className="name">William Smith</h4>
                          <span className="designation">
                            Business Owner (CANADA)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        "Their profound mastery of online marketing strategies
                        and extensive industry knowledge has been instrumental
                        in propelling us to soaring heights. They have deftly
                        shaped our brand's presence in the digital realm,
                        leading to heightened visibility and a surge in website
                        traffic. We wholeheartedly endorse their services to any
                        enterprise seeking to enrich their online footprint and
                        foster business expansion."
                      </div>
                      <div className="icon-quote">
                        <i className="flaticon flaticon-quote" />
                      </div>
                      <div className="info-box">
                        <div className="thumb">
                          <img src={TSIMG5} alt="" />
                        </div>
                        <div className="text-box">
                          <h4 className="name"> Syang chung fu</h4>
                          <span className="designation">
                            Business Owner (CHINA)
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

export default Testimonials;
