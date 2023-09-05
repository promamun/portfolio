import React from "react";
import { Link } from "react-router-dom";

const BroadCamp = ({ name, bgImageStyle }) => {
  const sectionStyle = {
    backgroundImage: `url(/images/background/22.png)`,
    ...(bgImageStyle || {}), // Merge with provided bgImageStyle or an empty object
  };
  return (
    <>
      <section className="page-title" style={sectionStyle}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>{name}</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>{name}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BroadCamp;
