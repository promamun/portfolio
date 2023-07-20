import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class NotFound extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/22.png)`
    };
    const bannerIcon = {
      backgroundImage: `url(images/main-banner/banner-icon.png)`
    };
    const bannerIcon1 = {
      backgroundImage: `url(images/main-banner/banner-icon-1.png)`
    };
    const bannerIcon2 = {
      backgroundImage: `url(images/main-banner/banner-icon-2.png)`
    };
    const bannerIcon3 = {
      backgroundImage: `url(images/main-banner/banner-icon-3.png)`
    };
    const bannerIcon4 = {
      backgroundImage: `url(images/main-banner/banner-icon-4.png)`
    };
    const bannerIcon5 = {
      backgroundImage: `url(images/main-banner/banner-icon-5.png)`
    };
    const bannerIcon6 = {
      backgroundImage: `url(images/main-banner/banner-icon-6.png)`
    };
    const bannerIcon7 = {
      backgroundImage: `url(images/main-banner/banner-icon-7.png)`
    };
    const bannerIcon8 = {
      backgroundImage: `url(images/main-banner/banner-icon-8.png)`
    };
    const bannerIcon9 = {
      backgroundImage: `url(images/main-banner/banner-icon-9.png)`
    };
    const bannerIcon10 = {
      backgroundImage: `url(images/main-banner/banner-icon-10.png)`
    };
    return (
      <div>
        <Helmet>
          <title>404 Error</title>
        </Helmet>
        <section className="page-title" style={BgImage}>
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="title-box">
                <h1>404 Page Not Found</h1>
                <ul className="bread-crumb clearfix">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>404 Error Page</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="error-section">
          <div className="pattern-layer-one" style={bannerIcon10} />
          <div className="pattern-layer-two" style={bannerIcon5} />
          <div className="pattern-layer-three" style={bannerIcon6} />
          <div className="pattern-layer-four" style={bannerIcon} />
          <div className="pattern-layer-five" style={bannerIcon1} />
          <div className="pattern-layer-six" style={bannerIcon2} />
          <div className="pattern-layer-seven" style={bannerIcon8} />
          <div className="pattern-layer-eight" style={bannerIcon7} />
          <div className="pattern-layer-nine" style={bannerIcon10} />
          <div className="pattern-layer-ten" style={bannerIcon9} />
          <div className="pattern-layer-eleven" style={bannerIcon3} />
          <div className="pattern-layer-tweleve" style={bannerIcon4} />
          <div className="auto-container">
            <div className="error-title">
              4<span>0</span>4
            </div>
            <h4>Page not found</h4>
            <Link to="/" className="theme-btn btn-style-one">
              <span className="txt">Home Page</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default NotFound;
