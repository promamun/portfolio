import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import SocialBanner from "../../assets/images/services/4.png";
import SeoBanner from "../../assets/images/services/6.png";
import Button from "../contact/Button";
import SlideZone from "./SlideZone";
import SlideData from "./data/data";

class Slider extends Component {
  render() {
    const MainBanner = {
      backgroundImage: `url('images/main-banner/4.jpg')`
    };
    const BannerIcon = {
      backgroundImage: `url(images/main-banner/banner-icon.png)`
    };
    const CrossIcon = {
      backgroundImage: `url(images/main-banner/cross-icon.png)`
    };
    const BannerIcon1 = {
      backgroundImage: `url(images/main-banner/banner-icon-1.png)`
    };
    const BannerIcon2 = {
      backgroundImage: `url(images/main-banner/banner-icon-2.png)`
    };
    const BannerIcon3 = {
      backgroundImage: `url(images/main-banner/banner-icon-3.png)`
    };
    const BannerIcon4 = {
      backgroundImage: `url(images/main-banner/banner-icon-4.png)`
    };
    const BannerIcon5 = {
      backgroundImage: `url(images/main-banner/banner-icon-5.png)`
    };
    const BannerIcon6 = {
      backgroundImage: `url(images/main-banner/banner-icon-6.png)`
    };
    const BannerIcon7 = {
      backgroundImage: `url(images/main-banner/banner-icon-7.png)`
    };
    const BannerIcon8 = {
      backgroundImage: `url(images/main-banner/banner-icon-8.png)`
    };
    const BannerIcon9 = {
      backgroundImage: `url(images/main-banner/banner-icon-9.png)`
    };
    const BannerIcon10 = {
      backgroundImage: `url(images/main-banner/banner-icon-10.png)`
    };
    return (
      <>
        <section className="banner-section banner-slider" style={MainBanner}>
          <div className="pattern-layer-one" style={CrossIcon} />
          <div className="pattern-layer-two" style={BannerIcon5} />
          <div className="pattern-layer-three" style={BannerIcon6} />
          <div className="pattern-layer-four" style={BannerIcon} />
          <div className="pattern-layer-five" style={BannerIcon1} />
          <div className="pattern-layer-six" style={BannerIcon2} />
          <div className="pattern-layer-seven" style={BannerIcon8} />
          <div className="pattern-layer-eight" style={BannerIcon7} />
          <div className="pattern-layer-nine" style={BannerIcon10} />
          <div className="pattern-layer-ten" style={BannerIcon9} />
          <div className="pattern-layer-eleven" style={BannerIcon3} />
          <div className="pattern-layer-tweleve" style={BannerIcon4} />
          <OwlCarousel
            autoplay={true}
            items={1}
            loop={true}
            navText={[
              '<span class="fa fa-angle-left"></span>',
              '<span class="fa fa-angle-right"></span>'
            ]}
            className="main-slider-carousel owl-carousel owl-theme"
          >
            {SlideData.map((item) => (
              <SlideZone
                id={item.id}
                key={item.id}
                title={item.title}
                title1={item.title1}
                image={item.image}
              />
            ))}
          </OwlCarousel>
        </section>
      </>
    );
  }
}

export default Slider;
