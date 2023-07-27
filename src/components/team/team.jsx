import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import ThumbnailTwo from "./ThumbnailTwo";
import CarouselData from "./data/data";

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
