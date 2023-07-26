import React from "react";

function Package({
  thumb1Title,
  thumb1Price,
  thumb1Month,
  thumb1Analytics,
  thumb1Keywords,
  thumb1Social,
  thumb1Optimize,
  thumb1Support,
  backgroundImage
}) {
  return (
    <>
      <div className="price-block col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="packge-plan" style={{ backgroundImage }}>
            <h6>{thumb1Title} </h6>
            <div className="price">{thumb1Price} </div>
            <span className="plan-text">{thumb1Month}</span>
          </div>
          <div className="list-packges-area">
            <ul className="price-list">
              <li className="active">{thumb1Analytics}</li>
              <li className="active">{thumb1Keywords} </li>
              <li className="active">{thumb1Social}</li>
              <li>{thumb1Optimize} </li>
              <li>{thumb1Support} </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
