import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ProjectAdd from "./ProjectAdd";
import ProjectList from "./Data/data";
import ProjrctView from "./ProjrctView";
import ProjectList1 from "./Data/dataPro";

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
                {ProjectList.map((item) => (
                  <ProjectAdd
                    title={item.title}
                    title1={item.title1}
                    image={item.image}
                  />
                ))}

                {ProjectList1.map((item) => (
                  <ProjrctView
                    title={item.title}
                    title1={item.title1}
                    image={item.image}
                  />
                ))}
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
