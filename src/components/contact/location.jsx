import React, { Component } from "react";
import { Link } from "react-router-dom";

class Location extends Component {
  render() {
    return (
      <div>
        <section className="contact-page-section">
          <div className="auto-container">
            <div className="row">
              <div className="contact-column col-lg-12 col-md-12 col-sm-12">
                <div className="contact-info">
                  <div className="row">
                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
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
                    </div>
                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
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
                    </div>
                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
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

export default Location;
