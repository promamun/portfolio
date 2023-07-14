import React from "react";

const BroadCamp = ({name}) => {
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
              <h1>{name}</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>{name}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BroadCamp;
