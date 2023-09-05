import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ProjectAdd from "./ProjectAdd";
import ProjectList from "./Data/data";
import ProjrctView from "./ProjrctView";
import ProjectList1 from "./Data/dataPro";
import BrodCamp from "../broadCamp/BroadCamp"

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <BrodCamp name={'Our Great Projects'}/>
      <section className="projects-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h6 className="subtitle">Explore Case Studies</h6>
            <h2>Solid results of our different case studies</h2>
          </div>
        </div>
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
