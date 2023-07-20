import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Projects = () => {
  const BgImage = {
    backgroundImage: `url(images/background/22.png)`
  };
  return (
    <div>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <section className="page-title" style={BgImage}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Our Great Projects</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section gallery-proj">
        <div className="container-fluid">
          <div className="mixitup-gallery">
            <div className="inner-container">
              <div className="filter-list row">
                <div className="col-lg-2 col-md-12 col-sm-12">
                  <div className="project-block-two">
                    <div className="image-box">
                      <figure className="image">
                        <img src="images/gallery/6.jpg" alt="" />
                      </figure>
                      <div className="overlay-box">
                        <div className="category">
                          <Link
                            to="/project-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">CMS</span>
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
                            <Link to="#">
                              Construction <br />
                              Management Process
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="project-block-two">
                    <div className="image-box">
                      <figure className="image">
                        <img src="images/gallery/7.jpg" alt="" />
                      </figure>
                      <div className="overlay-box">
                        <div className="category">
                          <Link
                            to="/project-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Digital Work</span>
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
                            <Link to="#">
                              Construction <br />
                              Management Process
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="project-block-two">
                    <div className="image-box">
                      <figure className="image">
                        <img src="images/gallery/8.jpg" alt="" />
                      </figure>
                      <div className="overlay-box">
                        <div className="category">
                          <Link
                            to="/project-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Mobile App Vister</span>
                          </Link>
                        </div>
                        <div className="detail-box">
                          <div className="upper-content">
                            <Link to="/project-details">
                              <i className="fas fa-arrow-right" />
                            </Link>
                            <Link
                              to="images/gallery/8.jpg"
                              className="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <i className="fa fa-search" />
                            </Link>
                          </div>
                          <h5>
                            <Link to="#">
                              Construction <br />
                              Management Process
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12">
                  <div className="project-block-two">
                    <div className="image-box">
                      <figure className="image">
                        <img src="images/gallery/9.jpg" alt="" />
                      </figure>
                      <div className="overlay-box">
                        <div className="category">
                          <Link
                            to="/project-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Opertray</span>
                          </Link>
                        </div>
                        <div className="detail-box">
                          <div className="upper-content">
                            <Link to="/project-details">
                              <i className="fas fa-arrow-right" />
                            </Link>
                            <Link
                              to="images/gallery/9.jpg"
                              className="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <i className="fa fa-search" />
                            </Link>
                          </div>
                          <h5>
                            <Link to="#">
                              Construction <br />
                              Management Process
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="project-block-two">
                    <div className="image-box">
                      <figure className="image">
                        <img src="images/gallery/10.jpg" alt="" />
                      </figure>
                      <div className="overlay-box">
                        <div className="category">
                          <Link
                            to="/project-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Innovative Interface</span>
                          </Link>
                        </div>
                        <div className="detail-box">
                          <div className="upper-content">
                            <Link to="/project-details">
                              <i className="fas fa-arrow-right" />
                            </Link>
                            <Link
                              to="images/gallery/10.jpg"
                              className="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <i className="fa fa-search" />
                            </Link>
                          </div>
                          <h5>
                            <Link to="#">
                              Construction <br />
                              Management Process
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12">
                  <div className="project-block-two">
                    <div className="image-box">
                      <figure className="image">
                        <img src="images/gallery/11.jpg" alt="" />
                      </figure>
                      <div className="overlay-box">
                        <div className="category">
                          <Link
                            to="/project-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Interface</span>
                          </Link>
                        </div>
                        <div className="detail-box">
                          <div className="upper-content">
                            <Link to="/project-details">
                              <i className="fas fa-arrow-right" />
                            </Link>
                            <Link
                              to="images/gallery/11.jpg"
                              className="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <i className="fa fa-search" />
                            </Link>
                          </div>
                          <h5>
                            <Link to="#">
                              Construction <br />
                              Management Process
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                  <div className="project-block-two">
                    <div className="image-box">
                      <figure className="image">
                        <img src="images/gallery/12.jpg" alt="" />
                      </figure>
                      <div className="overlay-box">
                        <div className="category">
                          <Link
                            to="/project-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Mobile App</span>
                          </Link>
                        </div>
                        <div className="detail-box">
                          <div className="upper-content">
                            <Link to="/project-details">
                              <i className="fas fa-arrow-right" />
                            </Link>
                            <Link
                              to="images/gallery/12.jpg"
                              className="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <i className="fa fa-search" />
                            </Link>
                          </div>
                          <h5>
                            <Link to="#">
                              Construction <br />
                              Management Process
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="project-block-two">
                    <div className="image-box">
                      <figure className="image">
                        <img src="images/gallery/13.jpg" alt="" />
                      </figure>
                      <div className="overlay-box">
                        <div className="category">
                          <Link
                            to="/project-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="txt">Strategy</span>
                          </Link>
                        </div>
                        <div className="detail-box">
                          <div className="upper-content">
                            <Link to="/project-details">
                              <i className="fas fa-arrow-right" />
                            </Link>
                            <Link
                              to="images/gallery/13.jpg"
                              className="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <i className="fa fa-search" />
                            </Link>
                          </div>
                          <h5>
                            <Link to="#">
                              Construction <br />
                              Management Process
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="styled-pagination">
            <ul className="clearfix">
              <li className="prev-post">
                <Link to="#">
                  <span className="fa fa-angle-left" />
                </Link>
              </li>
              <li>
                <Link to="#">1</Link>
              </li>
              <li className="active">
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li className="next-post">
                <Link to="#">
                  <span className="fa fa-angle-right" />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
