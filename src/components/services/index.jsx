import React, { Component } from "react";
import AllService from "./AllService";
import WebService from "./service";
import ContactFrom from "../contact/ContactFrom";
import BroadCamp from "../broadCamp/BroadCamp";
import { Helmet } from "react-helmet";
import DigitalMarketingService from "./DigitalMarketingService";
import Button from "../contact/Button";
import { Col, Container, Row } from "react-bootstrap";

class Index extends Component {
  render() {
    const BgImg1 = {
      backgroundImage: `url(images/background/11.png)`
    };
    return (
      <div>
        <Helmet>
          <title>Service</title>
        </Helmet>
        <BroadCamp name="Service" />
        <AllService />
        <WebService />
        <section className="get-started-sec" style={BgImg1}>
          <div className="auto-container">
            <Row>
              <div className="col-12 text-center inner-box">
                <div className="sec-title text-center">
                  <h6 className="subtitle">More With Us</h6>
                  <h2>
                    You want to Analysis your website <br />
                    BY top Developer
                  </h2>
                  <section className="get-started-form">
                    <Container>
                      <Row>
                        <Col lg="8" md="12" className="offset-lg-2">
                          <div
                            className="form-area wow fadeInDown"
                            data-wow-delay="100ms"
                            data-wow-duration="100ms"
                          >
                            <form method="post">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="getstarted"
                                  placeholder="http://yoursite.com"
                                />
                                <Button
                                  type="submit"
                                  children="Submit For Analysis"
                                  className="theme-btn btn-style-one"
                                />
                              </div>
                            </form>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </div>
              </div>
            </Row>
          </div>
        </section>
        <DigitalMarketingService />
        <ContactFrom />
      </div>
    );
  }
}

export default Index;
