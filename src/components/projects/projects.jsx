import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ProjectAdd from "./ProjectAdd";
import ProjectList from "./Data/data";
import AllIMG1 from "../../assets/images/gallery/6.jpg";
import AllIMG2 from "../../assets/images/gallery/7.jpg";
import AllIMG3 from "../../assets/images/gallery/8.jpg";
import AllIMG4 from "../../assets/images/gallery/9.jpg";
import AllIMG5 from "../../assets/images/gallery/10.jpg";
import AllIMG6 from "../../assets/images/gallery/11.jpg";
import AllIMG7 from "../../assets/images/gallery/12.jpg";
import AllIMG8 from "../../assets/images/gallery/13.jpg";
import BroadCamp from "../broadCamp/BroadCamp";

const Projects = () => {
  const BgImage = {
    backgroundImage: `url(images/background/22.png)`
  };
  return (
    <div>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <BroadCamp name={'Our Great Projects'} bgImageStyle={BgImage}/>
      <section className="projects-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h6 className="subtitle">Explore Case Studies</h6>
            <h2>Solid results of our different case studies</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="inner-container">
            <div className="row">
              <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12">
                <div className="project-block-two">
                  <div className="image-box">
                    <figure className="image">
                      <img src={AllIMG1} alt="" />
                    </figure>
                    <div className="overlay-box">
                      <div className="category">
                        <Link
                            to="/project"
                            className="theme-btn btn-style-one"
                        >
                          <span className="txt">CMS</span>
                        </Link>
                      </div>
                      <div className="detail-box">
                        <div className="upper-content">
                          <Link to="/project-detail">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                          <Link
                              to={AllIMG1}
                              className="lightbox-image"
                              data-fancybox="gallery"
                          >
                            <i className="fa fa-search"></i>
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
              <div className="col-xl-4 col-lg-8 col-md-12 col-sm-12">
                <div className="project-block-two">
                  <div className="image-box">
                    <figure className="image">
                      <img src={AllIMG2} alt="" />
                    </figure>
                    <div className="overlay-box">
                      <div className="category">
                        <Link
                            to="/project"
                            className="theme-btn btn-style-one"
                        >
                          <span className="txt">Digital Work</span>
                        </Link>
                      </div>
                      <div className="detail-box">
                        <div className="upper-content">
                          <Link to="/project-detail">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                          <Link
                              to={AllIMG2}
                              className="lightbox-image"
                              data-fancybox="gallery"
                          >
                            <i className="fa fa-search"></i>
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
              <div className="col-xl-4 col-lg-8 col-md-12 col-sm-12">
                <div className="project-block-two">
                  <div className="image-box">
                    <figure className="image">
                      <img src={AllIMG3} alt="" />
                    </figure>
                    <div className="overlay-box">
                      <div className="category">
                        <Link
                            to="/project"
                            className="theme-btn btn-style-one"
                        >
                          <span className="txt">Mobile App Vister</span>
                        </Link>
                      </div>
                      <div className="detail-box">
                        <div className="upper-content">
                          <Link to="/project-detail">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                          <Link
                              to={AllIMG3}
                              className="lightbox-image"
                              data-fancybox="gallery"
                          >
                            <i className="fa fa-search"></i>
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
              <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12">
                <div className="project-block-two">
                  <div className="image-box">
                    <figure className="image">
                      <img src={AllIMG4} alt="" />
                    </figure>
                    <div className="overlay-box">
                      <div className="category">
                        <Link
                            to="/project"
                            className="theme-btn btn-style-one"
                        >
                          <span className="txt">Opertray</span>
                        </Link>
                      </div>
                      <div className="detail-box">
                        <div className="upper-content">
                          <Link to="/project-detail">
                            <i className="fas fa-arrow-right"/>
                          </Link>
                          <Link
                              to={AllIMG4}
                              className="lightbox-image"
                              data-fancybox="gallery"
                          >
                            <i className="fa fa-search"/>
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
              <div className="col-xl-4 col-lg-8 col-md-12 col-sm-12">
                <div className="project-block-two">
                  <div className="image-box">
                    <figure className="image">
                      <img src={AllIMG5} alt="" />
                    </figure>
                    <div className="overlay-box">
                      <div className="category">
                        <Link
                            to="/project"
                            className="theme-btn btn-style-one"
                        >
                          <span className="txt">Innovative Interface</span>
                        </Link>
                      </div>
                      <div className="detail-box">
                        <div className="upper-content">
                          <Link to="/project-detail">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                          <Link
                              to={AllIMG5}
                              className="lightbox-image"
                              data-fancybox="gallery"
                          >
                            <i className="fa fa-search"></i>
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
              <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12">
                <div className="project-block-two">
                  <div className="image-box">
                    <figure className="image">
                      <img src={AllIMG6} alt="" />
                    </figure>
                    <div className="overlay-box">
                      <div className="category">
                        <Link
                            to="/project"
                            className="theme-btn btn-style-one"
                        >
                          <span className="txt">Interface</span>
                        </Link>
                      </div>
                      <div className="detail-box">
                        <div className="upper-content">
                          <Link to="/project-detail">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                          <Link
                              to={AllIMG6}
                              className="lightbox-image"
                              data-fancybox="gallery"
                          >
                            <i className="fa fa-search"></i>
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
              <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12">
                <div className="project-block-two">
                  <div className="image-box">
                    <figure className="image">
                      <img src={AllIMG7} alt="" />
                    </figure>
                    <div className="overlay-box">
                      <div className="category">
                        <Link
                            to="/project"
                            className="theme-btn btn-style-one"
                        >
                          <span className="txt">Mobile App</span>
                        </Link>
                      </div>
                      <div className="detail-box">
                        <div className="upper-content">
                          <Link to="/project-detail">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                          <Link
                              to={AllIMG7}
                              className="lightbox-image"
                              data-fancybox="gallery"
                          >
                            <i className="fa fa-search"></i>
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
              <div className="col-xl-4 col-lg-8 col-md-12 col-sm-12">
                <div className="project-block-two">
                  <div className="image-box">
                    <figure className="image">
                      <img src={AllIMG8} alt="" />
                    </figure>
                    <div className="overlay-box">
                      <div className="category">
                        <Link
                            to="/project"
                            className="theme-btn btn-style-one"
                        >
                          <span className="txt">Commercial</span>
                        </Link>
                      </div>
                      <div className="detail-box">
                        <div className="upper-content">
                          <Link to="/project-detail">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                          <Link
                              to={AllIMG8}
                              className="lightbox-image"
                              data-fancybox="gallery"
                          >
                            <i className="fa fa-search"></i>
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
              {ProjectList.map((item) => (
                  <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12">
                    <div className="project-block-two">
                      <div className="image-box">
                        <figure className="image">
                          <img src={item.image} alt="" />
                        </figure>
                        <div className="overlay-box">
                          <div className="category">
                            <Link
                                to="/project"
                                className="theme-btn btn-style-one"
                            >
                              <span className="txt">{item.title}</span>
                            </Link>
                          </div>
                          <div className="detail-box">
                            <div className="upper-content">
                              <Link to="/project-detail">
                                <i className="fas fa-arrow-right"/>
                              </Link>
                              <Link
                                  to={item.image}
                                  className="lightbox-image"
                                  data-fancybox="gallery"
                              >
                                <i className="fa fa-search"/>
                              </Link>
                            </div>
                            <h5>
                              <Link to="#">
                                {item.title1}
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <div className="btn-box text-center">
            <Link to="project.html" className="theme-btn btn-style-one">
              <span className="txt">View All Project</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
