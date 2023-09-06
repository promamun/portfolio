import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjrctView({ title, title1, image }) {
  return (
    <Col lg="4" md="12" sm="12">
      <div className="project-block-two">
        <div className="image-box">
          <figure className="image">
            <img src={image} alt="" />
          </figure>
          <div className="overlay-box">
            <div className="category">
              <Link to="/project-details" className="theme-btn btn-style-one">
                <span className="txt">{title} </span>
              </Link>
            </div>
            <div className="detail-box">
              <div className="upper-content">
                <Link to="/project-details">
                  <i className="fas fa-arrow-right" />
                </Link>
                <Link
                  to="images/gallery/7.jpg"
                  className="lightbox-image"
                  data-fancybox="gallery"
                >
                  <i className="fa fa-search" />
                </Link>
              </div>
              <h5>
                <Link to="#">{title1}</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjrctView;
