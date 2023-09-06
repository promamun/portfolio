import React, { Component } from "react";
import BroadCamp from "../broadCamp/BroadCamp";
import TeamMembers from "./TeamMembers";
import Manager from "./manager";
import { Helmet } from "react-helmet";
import Janin from "../../assets/images/team/Janin1.png"
import Button from "../contact/Button";

class Index extends Component {
  render() {
      const crossIcon = {
          backgroundImage: `url(images/main-banner/cross-icon.png)`
      };
      const crossIcon1 = {
          backgroundImage: `url(images/main-banner/banner-icon-1.png)`
      };const crossIcon2 = {
          backgroundImage: `url(images/main-banner/banner-icon-2.png)`
      };const crossIcon4 = {
          backgroundImage: `url(images/main-banner/banner-icon-4.png)`
      };
      const crossIcon6 = {
          backgroundImage: `url(images/main-banner/banner-icon-6.png)`
      };
      const FontSize = {
          fontSize:'25px',
          fontStyle: `italic`,
          color: '#00d084',
      }
    return (
      <div>
        <Helmet>
          <title>Team</title>
        </Helmet>
        <BroadCamp name={"Team"} />
        <Manager />
          <section className="experince-sec">
              <div
                  className="pattern-layer-one"
                  style={crossIcon}
              ></div>
              <div
                  className="pattern-layer-six"
                  style={crossIcon2}
              ></div>
              <div
                  className="pattern-layer-tweleve"
                  style={crossIcon4}
              ></div>
              <div
                  className="pattern-layer-four"
                  style={crossIcon}
              ></div>
              <div
                  className="pattern-layer-three"
                  style={crossIcon6}
              ></div>
              <div
                  className="pattern-layer-five"
                  style={crossIcon1}
              ></div>
              <div className="auto-container">
                  <div className="row">
                      <div className="image-column col-lg-4 col-md-6 col-sm-12">
                          <div
                              className="image-box parallax-scene-1 wow fadeInLeft"
                              data-wow-delay="100ms"
                              data-wow-duration="100ms"
                          >
                              <div className="image" data-depth="0.30">
                                  <img src={Janin} alt=""/>
                              </div>
                              <div className="review-box" data-depth="0.60">
                                  <ul className="review">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                  </ul>
                                  <h6>LMS <br/>Of The Years</h6>
                              </div>
                          </div>
                      </div>
                      <div className="content-column col-lg-6 col-md-6 col-sm-12">
                          <div
                              className="inner-box wow fadeInLeft"
                              data-wow-delay="300ms"
                              data-wow-duration="300ms"
                          >
                              <div className="sec-title">
                                  <h6 className="subtitle">The Write ToolBox Admin <strong>"Janine Holman"</strong> Collaborate With Us</h6>
                                  <h2>Discuss project requirements, Share Insights and get work done</h2>
                              </div>
                              <p>
                                  <strong style={FontSize}>Janine Holman, </strong>Is a great versatile personality to work with.. She is an instructor/trainer on several learning platforms. Also an author of multiple books.. We really feel joyous and grateful to have her on board & will proceed together to add extreme values and impact in to our organization.
                              </p>
                              <Button To="#" className="theme-btn btn-style-two" children="Learn More"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        <TeamMembers />
      </div>
    );
  }
}

export default Index;
