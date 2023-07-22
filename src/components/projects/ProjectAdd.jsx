import React from "react";
import { Link } from "react-router-dom";

function ProjectAdd({ title, title1, image }) {
  return (
    <>
      <div className="col-lg-2 col-md-12 col-sm-12">
        <div className="project-block-two">
          <div className="image-box">
            <figure className="image">
              <img src={image} alt="" />
            </figure>
            <div className="overlay-box">
              <div className="category">
                <Link to="/project-details" className="theme-btn btn-style-one">
                  <span className="txt">{title}</span>
                </Link>
              </div>
              <div className="detail-box">
                <div className="upper-content">
                  <Link to="/project-details">
                    <i className="fas fa-arrow-right" />
                  </Link>
                  <Link
                    to="images/gallery/6.jpg"
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
      </div>
    </>
  );
}

export default ProjectAdd;
