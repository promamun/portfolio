import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import WebsiteBanner from "../../assets/images/main-banner/1.png";
import SocialBanner from "../../assets/images/services/4.png";
import SeoBanner from "../../assets/images/services/6.png";
import Button from "../contact/Button";
import { Link } from "react-router-dom";

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
            <div className="slide">
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      {/*<div className="video-link">*/}
                      {/*  <Link*/}
                      {/*    to="https://www.youtube.com/watch?v=Fvae8nxzVz4"*/}
                      {/*    data-fancybox="gallery"*/}
                      {/*    data-caption=""*/}
                      {/*  >*/}
                      {/*    <span*/}
                      {/*      className="icon fa fa-play"*/}
                      {/*      aria-hidden="true"*/}
                      {/*    />*/}
                      {/*    <i className="ripple" />*/}
                      {/*  </Link>*/}
                      {/*</div>*/}
                      <h1>
                        We Create Website
                        <br />
                        For Your Business
                      </h1>
                      <p>
                        Building websites that drive growth, engage customers,
                        <br />
                        and prospects across the entire web That elevate your
                        brand.
                      </p>
                      <div className="btns-box">
                        <Button
                          To={"/pricing-plans"}
                          className={"theme-btn btn-style-one"}
                        >
                          {"Started"}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column parallax-scene-2">
                      <div className="image" data-depth="0.30">
                        <img src={WebsiteBanner} alt="Main Banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      {/*<div className="video-link">*/}
                      {/*  <Link*/}
                      {/*    to="https://www.youtube.com/watch?v=Fvae8nxzVz4"*/}
                      {/*    data-fancybox="gallery"*/}
                      {/*    data-caption=""*/}
                      {/*  >*/}
                      {/*    <span*/}
                      {/*      className="icon fa fa-play"*/}
                      {/*      aria-hidden="true"*/}
                      {/*    />*/}
                      {/*    <i className="ripple" />*/}
                      {/*  </Link>*/}
                      {/*</div>*/}
                      <h1>
                        We Provide Brilliant Marketing
                        <br />
                        For Your Business
                      </h1>
                      <p>
                        We build effective strategies to help you deliver
                        exceptional results
                        <br />
                        and stand out in the dynamic world of social media.
                      </p>
                      <div className="btns-box">
                        <Button
                          To={"/pricing-plans"}
                          className={"theme-btn btn-style-one"}
                        >
                          {"Get Started"}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column parallax-scene-2">
                      <div className="image" data-depth="0.30">
                        <img src={SocialBanner} alt="Main Banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      {/*<div className="video-link">*/}
                      {/*  <Link*/}
                      {/*    to="https://www.youtube.com/watch?v=Fvae8nxzVz4"*/}
                      {/*    data-fancybox="gallery"*/}
                      {/*    data-caption=""*/}
                      {/*  >*/}
                      {/*    <span*/}
                      {/*      className="icon fa fa-play"*/}
                      {/*      aria-hidden="true"*/}
                      {/*    />*/}
                      {/*    <i className="ripple" />*/}
                      {/*  </Link>*/}
                      {/*</div>*/}
                      <h1>
                        We Bring You
                        <br />
                        #Top10 Using SEO
                      </h1>
                      <p>
                        Unlock Your Business's Online Visibility. Drives your
                        business Into #Top10 of search engine rankings.
                        <br />
                        attracting more traffic, leads, and success.
                      </p>
                      <div className="btns-box">
                        <Button
                          To={"/pricing-plans"}
                          className={"theme-btn btn-style-one"}
                        >
                          {"Get Started"}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column parallax-scene-2">
                      <div className="image" data-depth="0.30">
                        <img src={SeoBanner} alt="Main Banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </section>
      </>
    );
  }
}

export default Slider;
