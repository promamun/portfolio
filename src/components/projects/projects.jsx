import React, { Component } from "react";

class Projects extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/22.png)`
    };
    return (
      <div>
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
                    <a href="index.html">Home</a>
                  </li>
                  <li>Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="projects-section gallery-proj">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h6 className="subtitle">Explore Case Studies</h6>
              <h2>
                Solid results of our <br />
                different case studies
              </h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="mixitup-gallery">
              <div className="filters text-center clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                  <li
                    className="active filter"
                    data-role="button"
                    data-filter="all"
                  >
                    All
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".strategy"
                  >
                    Strategy
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".optimization"
                  >
                    Optimization
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".advertising"
                  >
                    Advertising
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".social"
                  >
                    Social
                  </li>
                </ul>
              </div>
              <div className="inner-container">
                <div className="filter-list row">
                  <div className="all mix advertising social optimization col-lg-2 col-md-12 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/gallery/6.jpg" alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <a
                              href="project.html"
                              className="theme-btn btn-style-one"
                            >
                              <span className="txt">CMS</span>
                            </a>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <a href="project-detail.html">
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a
                                href="images/gallery/6.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <h5>
                              <a href="#">
                                Construction <br />
                                Management Process
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all mix optimization social col-lg-4 col-md-12 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/gallery/7.jpg" alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <a
                              href="project.html"
                              className="theme-btn btn-style-one"
                            >
                              <span className="txt">Digital Work</span>
                            </a>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <a href="project-detail.html">
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a
                                href="images/gallery/7.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <h5>
                              <a href="#">
                                Construction <br />
                                Management Process
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all mix optimization advertising col-lg-4 col-md-12 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/gallery/8.jpg" alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <a
                              href="project.html"
                              className="theme-btn btn-style-one"
                            >
                              <span className="txt">Mobile App Vister</span>
                            </a>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <a href="project-detail.html">
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a
                                href="images/gallery/8.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <h5>
                              <a href="#">
                                Construction <br />
                                Management Process
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all mix optimization strategy social col-lg-2 col-md-12 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/gallery/9.jpg" alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <a
                              href="project.html"
                              className="theme-btn btn-style-one"
                            >
                              <span className="txt">Opertray</span>
                            </a>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <a href="project-detail.html">
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a
                                href="images/gallery/9.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <h5>
                              <a href="#">
                                Construction <br />
                                Management Process
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all mix optimization advertising col-lg-4 col-md-12 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/gallery/10.jpg" alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <a
                              href="project.html"
                              className="theme-btn btn-style-one"
                            >
                              <span className="txt">Innovative Interface</span>
                            </a>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <a href="project-detail.html">
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a
                                href="images/gallery/10.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <h5>
                              <a href="#">
                                Construction <br />
                                Management Process
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all mix optimization strategy advertising col-lg-2 col-md-12 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/gallery/11.jpg" alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <a
                              href="project.html"
                              className="theme-btn btn-style-one"
                            >
                              <span className="txt">Interface</span>
                            </a>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <a href="project-detail.html">
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a
                                href="images/gallery/11.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <h5>
                              <a href="#">
                                Construction <br />
                                Management Process
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all mix optimization advertising col-lg-2 col-md-2 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/gallery/12.jpg" alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <a
                              href="project.html"
                              className="theme-btn btn-style-one"
                            >
                              <span className="txt">Mobile App</span>
                            </a>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <a href="project-detail.html">
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a
                                href="images/gallery/12.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <h5>
                              <a href="#">
                                Construction <br />
                                Management Process
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all mix optimization advertising col-lg-4 col-md-12 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/gallery/13.jpg" alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <a
                              href="project.html"
                              className="theme-btn btn-style-one"
                            >
                              <span className="txt">Strategy</span>
                            </a>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <a href="project-detail.html">
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a
                                href="images/gallery/13.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <h5>
                              <a href="#">
                                Construction <br />
                                Management Process
                              </a>
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
                  <a href="#">
                    <span className="fa fa-angle-left" />
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li className="next-post">
                  <a href="#">
                    <span className="fa fa-angle-right" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
