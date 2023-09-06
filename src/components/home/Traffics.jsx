import React, { Component } from "react";
import TrafficImg1 from "../../assets/images/resource/about-img.png";
import { Link } from "react-router-dom";
import {Col, Container, Row,} from "react-bootstrap";

class Traffics extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(/images/background/1.png)`
    };
    return (
      <div>
        <section className="about-section" style={BgImage}>
          <Container>
            <Row>
              <Col lg='6' md='12' sm='12' className="image-column">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="alphabet-img wow fadeInRight">
                      <img src={TrafficImg1} alt="about img" />
                    </figure>
                  </div>
                </div>
              </Col>
              <Col lg='5' md='12' sm='12' className="content-column offset-lg-1">
                <div className="inner-column wow fadeInLeft">
                  <div className="content-box">
                    <div className="sec-title text-left">
                      <h6 className="subtitle">
                        Grow Traffice & Increase Revenue
                      </h6>
                      <h2>
                        Appear on the <br />
                        front page of google!
                      </h2>
                    </div>
                    <p>
                      We are full-service Internet marketing and SEO company
                      offering innovative web marketing solutions to mid to
                      large size companies across the globe. As a leader in SEO,
                      web design, ecommerce, website conversion, and Internet
                      marketing services, our firm prides ourselves.
                    </p>
                    <p>
                      We have an ever-expanding trophy cabinet for our web
                      design, SEO, and digital marketing work.
                    </p>
                    <div className="link-box">
                      <Link to="/about" className="theme-btn btn-style-one">
                        <span className="txt">About More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Traffics;
