import React from "react";

function PackageTwo({
  thumb2Title,
  thumb2Price,
  thumb2Month,
  thumb2Analytics,
  thumb2Keywords,
  thumb2Social,
  thumb2Optimize,
  thumb2Support,
  backgroundImage,
}) {
  return (
    <>
      <div className="price-block col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="packge-plan" style={{ backgroundImage }}>
            <h6>{thumb2Title} </h6>
            <div className="price">{thumb2Price} </div>
            <span className="plan-text">{thumb2Month}</span>
          </div>
          <div className="list-packges-area">
            <ul className="price-list">
              <li className="active">{thumb2Analytics}</li>
              <li className="active">{thumb2Keywords} </li>
              <li className="active">{thumb2Social}</li>
              <li>{thumb2Optimize} </li>
              <li>{thumb2Support} </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageTwo;