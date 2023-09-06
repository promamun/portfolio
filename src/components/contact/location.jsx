import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Col, Row} from "react-bootstrap";

class Location extends Component {
  render() {
    return (
      <div>
        <section className="contact-page-section">
          <div className="auto-container">
            <Row>
              <Col lg={'12'} md={'12'} sm={'12'} className="contact-column">
                <div className="contact-info">
                  <Row>
                    <Col lg={'4'} md={'4'} sm={'12'} className="info-block">
                      <div className="inner">
                        <div className="icon-box">
                          <i className="flaticon flaticon-stopwatch" />
                        </div>
                        <div className="text-box">
                          <h4>Time</h4>
                          <p>
                            Always Open
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={'4'} md={'4'} sm={'12'} className="info-block">
                      <div className="inner">
                        <div className="icon-box">
                          <i className="flaticon flaticon-pin" />
                        </div>
                        <div className="text-box">
                          <h4>Location</h4>
                          <p>2124 NE19th Street, #F240 <br />
                            Gresham, OR 97030</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={'4'} md={'4'} sm={'12'} className="info-block">
                      <div className="inner">
                        <div className="icon-box">
                          <i className="flaticon flaticon-call" />
                        </div>
                        <div className="text-box">
                          <h4>Email / Phone</h4>
                          <p>+1 (971) 231-9745</p>
                          <p>
                            <Link to="#">support@devtechmasters.com</Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}

export default Location;
