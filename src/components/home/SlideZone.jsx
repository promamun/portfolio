import React from "react";
import Button from "../contact/Button";
import WebsiteBanner from "../../assets/images/main-banner/1.png";

function SlideZone({ title, title1,image }) {
  return (
    <>
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
                <h1>{title}</h1>
                <p>{title1}</p>
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
                  <img src={image} alt="Main Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideZone;
