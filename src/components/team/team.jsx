import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import ThumbnailTwo from "./ThumbnailTwo";
import CarouselData from "./data/dataTwo";

import MamunPro from "../../assets/images/team/Mamun_Pro_Main.png";
import RamizImg from "../../assets/images/team/Ramiz.jpg";
import AvijitImg from "../../assets/images/team/Avijit.jpg";
import PopinImg from "../../assets/images/team/Popin.jpg";
import FarhanImg from "../../assets/images/team/Farhan.jpg";
import Shakib from "../../assets/images/team/Shakib.jpg";
import JeanBuagas from "../../assets/images/team/9.jpg";

class Team extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/3.png)`
    };
    return (
      <div>
        <section className="team-section">
          <div className="team-bg wow fadeInRight" style={BgImage} />
          <div className="auto-container">
            <div className="sec-title text-center">
              <h6 className="subtitle">Our Specialists TEAM</h6>
              <h2>
                Meet our expert team
                <br />
                Teamwork makes the dream work.
              </h2>
            </div>
            <OwlCarousel
              autoplay={true}
              items={4}
              className={"team-carousel owl-carousel owl-theme"}
            >
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Link to="/team">
                        <img src={MamunPro} alt="" />
                      </Link>
                    </div>
                  </div>
                  <ul className="social-links">
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.facebook.com/Mdmamun6160"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" to="https://twitter.com/MamunPro">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-dribbble" />
                      </Link>
                    </li>
                  </ul>
                  <div className="text-box">
                    <h4 className="name">
                      <Link target={"_blank"} to="/team">
                        Mamun Pro
                      </Link>
                    </h4>
                    <span className="designation">
                      Project & Marketing Manager
                    </span>
                  </div>
                </div>
              </div>

              {CarouselData.map((items) => (
                <ThumbnailTwo
                  image={items.image}
                  facebook={items.facebook}
                  twitter={items.twitter}
                  dribbble={items.dribbble}
                  name={items.name}
                  designation={items.designation}
                />
              ))}
            </OwlCarousel>
          </div>
        </section>
      </div>
    );
  }
}

export default Team;
