import React, { Component } from "react";
import Solutions from "../home/Solutions";
import AllService from "./service";
import Analytics from "./Analytics";
import ContactFrom from "../contact/ContactFrom";
import BroadCamp from "../broadCamp/BroadCamp";
import { Helmet } from "react-helmet";
import DigitalMarketingService from "./DigitalMarketingService";
import Progress from "../home/progress";

class Index extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/22.png)`
    };
    const BgImg1={
        backgroundImage: `url(images/background/11.png)`,
    }
    return (
      <div>
        <Helmet>
          <title>Service</title>
        </Helmet>
        <BroadCamp name="Service" bgImageStyle={BgImage} />
        <Solutions />
        <AllService />
          <section
              className="get-started-sec"
              style={BgImg1}
          >
              <div className="auto-container">
                  <div className="row">
                      <div className="col-12 text-center inner-box">
                          <div className="sec-title text-center">
                              <h6 className="subtitle">More With Us</h6>
                              <h2>
                                  You want to showcase your website <br/>
                                  in top join with us
                              </h2>
                              <a href="#" className="theme-btn btn-style-one"
                              ><span className="txt">Get Started</span></a
                              >
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Progress />
          <DigitalMarketingService/>
        <ContactFrom />
      </div>
    );
  }
}

export default Index;
