import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import CIMG1 from "../../assets/images/gallery/3.jpg";
import CIMG2 from "../../assets/images/gallery/2.jpg";
import CIMG3 from "../../assets/images/gallery/13.jpg";
import CIMG4 from "../../assets/images/gallery/10.jpg";

class CaseStudies extends Component {
  render() {
    return (
      <div>
        <section className="projects-section">
          <div className="auto-container">
            <div className="sec-title text-left">
              <h6 className="subtitle">Explore Case Studies</h6>
              <h2>Solid results of our different case studies</h2>
            </div>
          </div>
          <div className="inner-container">
            <OwlCarousel
              items={4}
              autoPlay={true}
              loop={true}
              nav={true}
              margin={10}
              navText={[
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>'
              ]}
              className="projects-carousel owl-carousel owl-theme"
            >
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <img height={250} width={469} src={CIMG1} alt="" />
                  </figure>
                  <div className="overlay-box">
                    <Link to="/project-detail">
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
                <div className="text-box">
                  <span className="tag">Development</span>
                  <h3>
                    <Link to="/project-detail">Website Creation</Link>
                  </h3>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <img height={250} width={469} src={CIMG2} alt="" />
                  </figure>
                  <div className="overlay-box">
                    <Link to="/project-detail">
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
                <div className="text-box">
                  <span className="tag">Digital Marketing</span>
                  <h3>
                    <Link to="/project-detail">Marketing</Link>
                  </h3>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <img src={CIMG3} alt="" />
                  </figure>
                  <div className="overlay-box">
                    <Link to="/project-detail">
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
                <div className="text-box">
                  <span className="tag">CMS DEVELOPMENT</span>
                  <h3>
                    <Link to="/project-detail">
                      WORDPRESS, SHOPIFY, AND WIX
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <img src={CIMG4} alt="" />
                  </figure>
                  <div className="overlay-box">
                    <Link to="/project-detail">
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
                <div className="text-box">
                  <span className="tag">SEO OPTIMIZATION</span>
                  <h3>
                    <Link to="/project-detail">Search Engin OPTIMIZATION</Link>
                  </h3>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
      </div>
    );
  }
}

export default CaseStudies;
